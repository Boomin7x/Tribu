import { useSelector } from 'react-redux';
import { RootState } from '../../data/store/app_store';
import { Box, Checkbox, Stack, Typography } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import FormRenderer from '../forms/components/form_field_renderer';
import { useDispatch } from 'react-redux';
import { FormProvider, useForm } from 'react-hook-form';
import {
  setCurrentIndex,
  setPreviewItems,
  updatePreviewItem,
} from '../../data/logic/preview.slice';
import PreviewProgressIndicator from './components/progress_indicator';
import PreviewButtons from './components/form_progress_buttons';
import {
  AppFormState,
  ActionActions,
  evaluateCanSkip,
  generateValidationSchema,
  getErrorMessage,
  AllFormInterfacesType,
  generateFormName,
  FormFields,
  AppSelect,
} from '@tribu/forms';
import { yupResolver } from '@hookform/resolvers/yup';
import { RouteNames, useApi } from '@tribu/utils';
import { useNavigate, useParams } from 'react-router-dom';
import {
  SurveyTemplateController,
  SurveyController,
  SurveyTemplate,
  Survey,
  TemplateCategoryController,
  TemplateCategory,
} from '@tribu/surveys';
import { ErrorCard, SkeletonBar } from '@tribu/ui';

export type AnimatingData = {
  isAnimating: boolean;
  isForward: boolean;
};
export const FormPreview = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    data: templateCategories,
    isLoading: isCategoryLoading,
    isError: isTemplateCategoryError,
    error: templateCategoryError,
    refetch: refetchTemplates,
  } = useApi.query<TemplateCategory[]>({
    queryKey: ['template'],
    callBack: () => TemplateCategoryController.getCategories(),
  });

  const formDetails: AppFormState = useSelector(
    (state: RootState) => state.form
  );
  const { previewItems, currentIndex } = useSelector(
    (state: RootState) => state.previewItem
  );

  const [reverseIndexes, setReverseIndexes] = useState<number[]>([0]);
  const [validationSchema, setValidationSchema] = useState<any>();
  const [selectedTemplateCategory, setSelectedTemplateCategory] =
    useState<TemplateCategory>();
  const [isTemplate, setIsTemplate] = useState<boolean>(false);

  const form = useForm({
    resolver: yupResolver(validationSchema),
  });

  const { handleSubmit, control, formState, reset, watch } = form;
  const { errors } = formState;

  useEffect(() => {
    console.log('Rebuilding validation schema...');

    const validSection = formDetails.sections.filter(
      (item) => item.formItems.length > 0
    );

    if (validSection.length > 0) {
      const allItems = validSection.map((item) => item.formItems).flat();
      const items = allItems.map((item, index) => {
        return { ...item, index: index };
      });

      const filteredItems = items.filter(
        (item) => item.type != FormFields.DIVIDER
      );

      dispatch(setPreviewItems(filteredItems));
      const yupSchema = generateValidationSchema(filteredItems);
      setValidationSchema(yupSchema);
    }

    return () => {
      dispatch(setPreviewItems([]));
      reset();
      dispatch(setCurrentIndex(0));
    };
  }, [formDetails.sections]);

  const { mutate: addSurvey, isPending } = useApi.mutate<
    Survey | SurveyTemplate
  >({
    queryKey: ['Survey', 'UpdateSurvey'],
    callBack: (data: Survey | SurveyTemplate) => {
      if (isTemplate) {
        return id
          ? SurveyTemplateController.createTemplate(
              data as SurveyTemplate,
              selectedTemplateCategory!._id!
            )
          : SurveyTemplateController.createTemplate(
              data as SurveyTemplate,
              selectedTemplateCategory!._id!
            );
      } else {
        return id
          ? SurveyController.updateSurvey(id, data as Survey)
          : SurveyController.createSurvey(data as Survey);
      }
    },
    onSuccess: (_) => {
      navigate(`/${RouteNames.dashboard}/${RouteNames.surveys_home}`);
    },
  });

  const onSubmit = (_: any) => {
    const template: SurveyTemplate = {
      _id: id,
      name: formDetails.formTitle,
      description: formDetails.formDescription,
      isTemplate: true,

      blocs: formDetails.sections.map((section) => ({
        key: section.id,
        metaData: {
          key: section.id,
          index: section.index,
        },
        questions: section.formItems.map((item) => ({
          key: item.id,
          name: item.label,
          description: item.label,
          type: item.type,
          branch: {
            key: section.id,
            index: section.index,
          },
          metaData: item,
        })),
      })),

      metaData: {
        key: formDetails.formTitle,
        index: 0,
      },
    };

    const survey: Survey = {
      _id: id,
      name: formDetails.formTitle,
      description: formDetails.formDescription,
      status: 'draft',
      audienceIds: formDetails.audienceIds,
      form: {
        isTemplate: isTemplate,
        name: formDetails.formTitle,
        description: formDetails.formDescription,
        metaData: {
          key: formDetails.formTitle,
          index: 0,
        },
        blocs: formDetails.sections.map((section, index) => ({
          key: section.id,
          metaData: {
            key: section.id,
            index: index,
          },
          questions: section.formItems.map((item, index) => ({
            key: item.id,
            name: item.label,
            description: item.label,
            type: item.type,
            metaData: item,
            branch: {
              key: section.id,
              index: section.index,
            },
          })),
        })),
      },
    };

    if (currentIndex == previewItems.length - 1) {
      console.log('Submitting ...');
      console.log('survey', survey);
      addSurvey(isTemplate ? template : survey);
    }
  };
  const [animationState, setAnimationState] = useState<AnimatingData>({
    isAnimating: false,
    isForward: false,
  });

  const animateNext = (isForward: boolean) => {
    const label = previewItems[currentIndex].label;

    const id = previewItems[currentIndex].id;

    const error = getErrorMessage(errors, label, id);
    console.log('errorMessage 2', errors, error);

    if (error == null) {
      if (currentIndex == previewItems.length - 1 && isForward) {
        console.log('Submitting ...');
        return;
      }
      setAnimationState({ isAnimating: true, isForward });
      // setAnimationState({ isAnimating: false, isForward });
      setTimeout(() => {
        setAnimationState({ isAnimating: false, isForward });
        isForward ? animateForward() : animateBackward();
      }, 600);
    }
  };

  const animateBackward = () => {
    if (reverseIndexes.length > 0) {
      reverseIndexes.pop();
      setReverseIndexes(reverseIndexes);
      dispatch(setCurrentIndex(reverseIndexes[reverseIndexes.length - 1]));
    }
  };
  const animateForward = () => {
    if (currentIndex == previewItems.length - 1) {
      return;
    }
    // If there is no conditions,
    if (previewItems[currentIndex].branching == null) {
      if (currentIndex < previewItems.length - 1) {
        dispatch(setCurrentIndex(currentIndex + 1));
        setReverseIndexes([...reverseIndexes, currentIndex + 1]);
      }
      return;
    }
    const canSkip = evaluateCanSkip(previewItems[currentIndex], watch);
    console.log('canSkip', canSkip);
    if (canSkip) {
      const nextActiveSectionIndex =
        Number(previewItems[currentIndex].branching.action.value) - 1;

      updateNextItemPreviousId(
        previewItems[currentIndex].id,
        nextActiveSectionIndex
      );

      preformNextActionFromCondition(
        previewItems[currentIndex],
        nextActiveSectionIndex
      );
    } else {
      if (currentIndex < previewItems.length - 1) {
        dispatch(setCurrentIndex(currentIndex + 1));
        setReverseIndexes([...reverseIndexes, currentIndex + 1]);
      }
    }
  };

  const preformNextActionFromCondition = (
    item: AllFormInterfacesType,
    nextActiveSectionIndex: number
  ) => {
    if (item.branching?.action.action == ActionActions.SKIP) {
      const nextSection = formDetails.sections[nextActiveSectionIndex];

      if (nextSection.formItems.length > 0) {
        const nextFirstSectionItem = nextSection.formItems[0];
        const nextPreviewItem = previewItems.filter(
          (item) => item.id === nextFirstSectionItem.id
        );
        const nextItemIndex = previewItems.indexOf(nextPreviewItem[0]);
        dispatch(setCurrentIndex(nextItemIndex));
        setReverseIndexes([...reverseIndexes, nextItemIndex]);
      } else {
        console.log('Submit form');
      }
    }
  };

  const updateNextItemPreviousId = (
    currentItemId: string,
    nextActiveSectionIndex: number
  ) => {
    const nextSection = formDetails.sections[nextActiveSectionIndex];

    if (nextSection.formItems.length > 0) {
      const nextFirstItem = nextSection.formItems[0];
      const nextItemInPreviewItems = previewItems.find(
        (item) => item.id == nextFirstItem.id
      );

      if (nextItemInPreviewItems) {
        const updatedNextItem: AllFormInterfacesType = {
          ...nextItemInPreviewItems,
          previousItemId: currentItemId,
        };
        dispatch(updatePreviewItem(updatedNextItem));
      }
    }
  };
  if (previewItems.length == 0) {
    return (
      <Box
        height={'100%'}
        width={'100%'}
        alignItems={'center'}
        justifyContent={'center'}
        display={'flex'}
      >
        <Typography textAlign={'center'}>Form is empty!</Typography>
      </Box>
    );
  }

  return (
    <Box height={'100%'}>
      <FormProvider {...form}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          style={{ height: '100%' }}
        >
          <div className="flex flex-col h-full justify-between">
            <div className="bg-secondary-600 rounded-sm py-16 px-12 mt-8 text-white">
              <Typography fontSize={30}>{formDetails.formTitle}</Typography>
              <Typography marginTop={2}>
                {formDetails.formDescription}
              </Typography>
            </div>

            <div>
              <Box
                sx={{
                  width: '100%',
                  transition: 'all 0.2s',
                  translate: `${
                    animationState.isAnimating
                      ? animationState.isForward
                        ? '10rem'
                        : '10rem'
                      : '0'
                  } 0`,
                  opacity: ` ${animationState.isAnimating ? '0' : '1'}`,
                }}
              >
                <Stack>
                  {previewItems &&
                    previewItems
                      .map((item, index) => {
                        const name = generateFormName(item.label, `${index}`);
                        const newField = { ...item, name };
                        const newItem = {
                          ...newField,
                          isPreview: true,
                          control: control,
                        };
                        return <FormRenderer key={index} {...newItem} />;
                      })
                      .filter((_, index) => index == currentIndex)}
                </Stack>
              </Box>

              {isTemplate && (
                <>
                  {isCategoryLoading && (
                    <div className="w-full bg-secondary-50 rounded-sm px-5 py-4 my-2">
                      <SkeletonBar count={3} />
                    </div>
                  )}
                  {isTemplateCategoryError && (
                    <ErrorCard
                      title="Template Error"
                      className="!h-[20vh] my-2"
                      message={templateCategoryError.message}
                      callback={refetchTemplates}
                    />
                  )}
                  {templateCategories && (
                    <div className="w-full mt-2">
                      <AppSelect
                        label="Select Template Category"
                        id=""
                        value={selectedTemplateCategory?.name}
                        items={templateCategories.map(
                          (template) => template.name
                        )}
                        onChange={(e) => {
                          const selected = templateCategories.find(
                            (template) => template.name == e.target.value
                          );
                          setSelectedTemplateCategory(selected);
                        }}
                        width="100%"
                      />
                    </div>
                  )}
                </>
              )}
            </div>

            <div className="flex flex-row w-full items-center justify-between mb-5">
              <FormProgressIndicators
                currentIndex={currentIndex}
                previewItems={previewItems}
              />
              <div className="flex flex-col">
                {!id && (
                  <div className="flex flex-row items-center justify-between">
                    <p>Use as template?</p>
                    <Checkbox
                      onChange={(e) => {
                        setIsTemplate(e.target.checked);
                      }}
                      checked={isTemplate}
                    />
                  </div>
                )}
                <PreviewButtons
                  id={id}
                  currentIndex={currentIndex}
                  loading={isPending}
                  animateNext={animateNext}
                  previewItems={previewItems}
                  reverseIndexes={reverseIndexes}
                />
              </div>
            </div>
          </div>
        </form>
      </FormProvider>
    </Box>
  );
};

type FormProgressIndicatorsType = {
  currentIndex: number;
  previewItems: AllFormInterfacesType[];
};
const FormProgressIndicators: FC<FormProgressIndicatorsType> = ({
  currentIndex,
  previewItems,
}: FormProgressIndicatorsType) => {
  return (
    <Stack>
      <Box mb={2} />
      <PreviewProgressIndicator
        currentIndex={currentIndex}
        items={previewItems}
        title="Progress"
      />
    </Stack>
  );
};

export default FormPreview;
