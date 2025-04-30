import {
  resetState,
  RootState,
  setFormData,
  SurveyTemplate,
  TemplateCategoryController,
  updateFormTitle,
} from '@tribu/surveys';
import { AppButton, AppUIInput, ErrorCard, SkeletonBar } from '@tribu/ui';
import { RouteNames, useApi } from '@tribu/utils';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TemplateCategory } from '../data/interfaces/template_category';
import { AppFormState } from '@tribu/forms';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { setSurveyInfo } from '../components/survey_builder/data/logic/survey_slice';
import AddTemplateCategory from '../components/modals/template_modal';

export const SurveyTemplates = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [activeSurvey, setActiveSurvey] = useState<
    SurveyTemplate | undefined
  >();
  const [activeItem, setActiveItem] = useState<TemplateCategory | undefined>();
  const [action, setAction] = useState(false);
  const { formTitle } = useSelector((state: RootState) => state.form);
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
    isPending: isCategoryLoading,
    isError: isCategoryError,
    error: categoryError,
    mutate: fetchCategories,
  } = useApi.mutate<TemplateCategory[]>({
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
      fetchCategories({});
      setAction(false);
      reset();
    },
  });

  const onSubmit = (data: Record<string, any>) => {
    console.log(data);
    addCategory(data);
  };

  useEffect(() => {
    if (!templateCategories) fetchCategories({});
  }, [templateCategories]);

  return (
    <div className="w-screen h-screen">
      <div className="flex w-full">
        <div className="lg:w-1/3 bg-secondary-100 h-screen"></div>
        <div className="h-screen w-full lg:w-2/3">
          <div className="w-[70%] ml-20 mt-20 ">
            <AppUIInput
              placeholder="Enter campaign Name"
              label="Enter campaign Name"
              inputClasses="w-full py-3"
              onChange={(e) => dispatch(updateFormTitle(e.target.value))}
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
                    callback={() => fetchCategories({})}
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
                          setActiveSurvey(undefined);
                          dispatch(resetState({}));
                          fetchTemplate(item._id);
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
              disabled={formTitle.length < 2 && !activeSurvey}
              label="Proceed"
              className="flex mt-10 justify-end rounded-sm "
              onClick={() => {
                if (activeSurvey) {
                  dispatch(setSurveyInfo(activeSurvey));
                  navigate('/dashboard/surveys/new');
                }
                if (formTitle.length > 2) {
                  navigate('/dashboard/surveys/new');
                }
              }}
            />
          </div>
        </div>
      </div>

      <AddTemplateCategory
        action={action}
        setAction={setAction}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        isAddingCategory={isAddingCategory}
        control={control}
      />
    </div>
  );
};

export default SurveyTemplates;
