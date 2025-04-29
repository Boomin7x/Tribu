import {
  setFormData,
  Survey,
  SurveyTemplate,
  TemplateCategoryController,
} from '@tribu/surveys';
import {
  AppButton,
  AppModalDialog,
  AppUIInput,
  ErrorCard,
  SkeletonBar,
} from '@tribu/ui';
import { RouteNames, useApi } from '@tribu/utils';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TemplateCategory } from '../../data/interfaces/template_category';
import {
  AppFormState,
  FormFields,
  FormInputField,
  FormTextArea,
} from '@tribu/forms';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { setSurveyInfo } from '../data/logic/survey_slice';

export const SurveyTemplates = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [activeSurvey, setActiveSurvey] = useState<
    SurveyTemplate | undefined
  >();
  const [activeItem, setActiveItem] = useState<TemplateCategory | undefined>();
  const [action, setAction] = useState(false);

  const schema = yup
    .object({
      name: yup.string().required(),
      description: yup.string().required(),
    })
    .required();

  const { control, handleSubmit, reset } = useForm<{
    name: string;
    description: string;
  }>({
    resolver: yupResolver(schema),
  });

  const {
    data: templates,
    isPending: loadingTemplates,
    mutate: fetchTemplate,
    isError: isErrorFetchingTemplates,
    error,
  } = useApi.mutate({
    queryKey: ['findTemplateCategoryById'],
    callBack: (id: string) => {
      return TemplateCategoryController.findTemplateCategoryById(id);
    },
  });
  const {
    data: templateCategories,
    isLoading: isCategoryLoading,
    isError: isCategoryError,
    error: categoryError,
    refetch: refetchCategories,
  } = useApi.query<TemplateCategory[]>({
    queryKey: ['getCategories'],
    callBack: () => TemplateCategoryController.getCategories(),
  });

  const {
    isPending: isAddingCategory,
    mutate: addCategory,
    isError: isErrorAddingCategory,
    error: addCategoryError,
  } = useApi.mutate({
    queryKey: ['createTemplateCategory'],
    callBack: (data: TemplateCategory) => {
      return TemplateCategoryController.createTemplateCategory(data);
    },
    onSuccess: () => {
      refetchCategories();
      setAction(false);
      reset();
    },
  });

  const onSubmit = (data: Record<string, any>) => {
    console.log(data);
    addCategory(data);
  };

  return (
    <div className="w-screen h-screen">
      <div className="flex w-full">
        <div className="lg:w-1/3 bg-secondary-100 h-screen"></div>
        <div className="h-screen w-full lg:w-2/3">
          <div className="w-[70%] ml-20 mt-20 ">
            <AppUIInput
              placeholder="Enter campaign Name"
              label="Enter campaign Name"
              additionalClasses="mt-20"
              inputClasses="w-full py-3"
            />
          </div>
          <div className="h-[60vh] overflow-y-scroll border-y-[1px] border-gray-200 mt-10 w-full">
            <div className="flex">
              <div
                className={`w-[30%] border-r-[1px] flex flex-col gap-5 ${
                  isCategoryError ||
                  (templateCategories && templateCategories.length == 0)
                    ? ''
                    : 'pl-10 lg:pl-20 pt-10'
                }`}
              >
                {isCategoryLoading && (
                  <div className="w-4/5">
                    <SkeletonBar count={10} />
                  </div>
                )}

                {isCategoryError && (
                  <ErrorCard
                    title="Could not fetch templates"
                    message={categoryError.message}
                    className="h-full py-20 text-center px-5"
                    callback={() => refetchCategories()}
                  />
                )}
                {templateCategories && templateCategories.length == 0 && (
                  <ErrorCard
                    message=""
                    title="No templates found"
                    className="h-full py-20 text-center px-5 !bg-secondary-50"
                    btnText="Create Template"
                    callback={() => {
                      setAction(true);
                    }}
                  />
                )}
                {templateCategories &&
                  templateCategories.map((item) => {
                    return (
                      <div
                        onClick={() => {
                          setActiveItem(item);
                          fetchTemplate(item._id);
                          setActiveSurvey(undefined);
                        }}
                        className={`
                        cursor-pointer font-normal ${
                          activeItem?.name === item.name &&
                          'border-r-2 border-primary-500'
                        }
                        `}
                        key={`template-${item.name}`}
                      >
                        {item.name}
                      </div>
                    );
                  })}
              </div>
              <div
                className={`flex flex-col ${
                  templates?.forms && templates.forms.length > 0
                    ? 'justify-start py-10'
                    : 'items-center justify-center'
                } w-[70%] h-[60vh] px-10`}
              >
                <div>{loadingTemplates && <SkeletonBar count={10} />}</div>
                {isErrorFetchingTemplates && (
                  <ErrorCard
                    title={`Could not ${activeItem?.name} surveys`}
                    message={error.message}
                    className="h-full py-20"
                  />
                )}

                {templates && templates.forms?.length == 0 && (
                  <ErrorCard
                    title={`No survey for category "${activeItem?.name}"`}
                    message=""
                    className="!h-[40vh] py-20 !bg-primary-50"
                    btnText="Create Survey"
                    callback={() => {
                      navigate(
                        `/${RouteNames.dashboard}/${RouteNames.add_survey}/`
                      );
                    }}
                  />
                )}

                {templates?.forms && templates.forms?.length > 0 && (
                  <div>
                    {templates.forms.map((item) => {
                      return (
                        <div
                          className={`p-5 rounded-sm bg-primary-50 cursor-pointer transition-colors duration-500 ${
                            activeSurvey === item
                              ? 'bg-primary-600 text-white'
                              : 'hover:bg-primary-600 hover:text-white'
                          }`}
                          onClick={() => {
                            const formData: AppFormState = {
                              sections: item.blocs.map((item) => {
                                return {
                                  id: item.metaData.key,
                                  index: item.metaData.index,
                                  formItems: item.questions.map(
                                    (q) => q.metaData
                                  ),
                                };
                              }),
                              isTemplate: item.isTemplate,
                              activeSection: 0,
                              formTitle: item.name,
                              formDescription: item.description,
                              selectedField: null,
                              audienceIds: [],
                            };
                            dispatch(setFormData(formData));
                            setActiveSurvey(item);
                          }}
                        >
                          <p className="">{item.name}</p>
                          <p className="">{item.description}</p>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-end px-20 gap-2">
            <AppButton
              label="Add Category"
              className="flex mt-10 justify-end rounded-sm bg-primary-600"
              onClick={() => setAction(true)}
            />
            <AppButton
              disabled={!activeSurvey}
              label="Proceed"
              className="flex mt-10 justify-end rounded-sm bg-primary-600"
              onClick={() => {
                dispatch(setSurveyInfo(activeSurvey));
                if (activeSurvey) {
                  navigate('/dashboard/surveys/new');
                }
              }}
            />
          </div>
        </div>
      </div>
      <AppModalDialog
        isOpen={action}
        onClose={() => {
          setAction(false);
        }}
        title="Add Category"
      >
        <div>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <FormInputField
              label="Category Name"
              id=""
              name="name"
              type={FormFields.INPUT}
              control={control}
              placeholder="Enter Category Name"
              index={0}
              activeSectionIndex={0}
            />
            <div className="my-2"></div>
            <FormTextArea
              label="Category Name"
              id=""
              name="description"
              type={FormFields.INPUT}
              control={control}
              placeholder="Enter Category Name"
              index={0}
              activeSectionIndex={0}
              maxLength={200}
            />
            <div className="flex justify-end mt-4">
              <AppButton
                label="Cancel"
                onClick={() => {
                  setAction(false);
                }}
                className="mr-2"
              />
              <AppButton
                label="Add"
                isLoading={isAddingCategory}
                type="submit"
              />
            </div>
          </form>
        </div>
      </AppModalDialog>
    </div>
  );
};

export default SurveyTemplates;
