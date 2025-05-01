import { AppButton } from '@tribu/ui';
import { useEffect, useState } from 'react';
import { demographicFormData } from '../../page/forms_data/data/demographic_form_data';
import {
  FormFields,
  generateFormName,
  generateValidationSchema,
} from '@tribu/forms';

import { psychographicFormData } from '../../page/forms_data/data/psychographic_form_data';
import { weatherAndClimateFormData } from '../../page/forms_data/data/weather_and_climate_form_data';
import { transactionFormData } from '../../page/forms_data/data/transaction_form_data';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import GenerateForm from '../../page/forms_data/forms/new_audience_form';
import AudienceController from '../../controllers/audience_controller';
import { RouteNames, useApi } from '@tribu/utils';
import { GoTrash } from 'react-icons/go';
import { Parameters } from '../../data/enums/form_enums';
import { useNavigate } from 'react-router-dom';
import { behavioralFormData } from '../forms_data/data/behavior_form_data';
import { AudienceBloc, CreateAudience, Question } from '@tribu/audience';
import AddAudienceCategoryModal from '../components/audience_category_modal';
import AudienceFieldModal from '../components/audience_field_modal';
import GenerateChipPreview from '../components/chip_preview';

export const NewAudienceGroup = () => {
  console.log('Rendering NewAudienceGroup ....');

  const allBlocs: AudienceBloc[] = [
    {
      fields: [
        ...demographicFormData.map((item, index) => ({
          metaData: item,
          key: `${Parameters.Demographics}-${index}`,
          name: item.name,
          description: `${Parameters.Demographics}-${item.label}`,
          type: item.type,
        })),
      ],
      key: Parameters.Demographics,
    },

    {
      fields: [
        ...psychographicFormData.map((item, index) => ({
          metaData: item,
          key: `${Parameters.Psychographics}-${index}`,
          name: item.name,
          description: `${Parameters.Psychographics}-${item.label}`,
          type: item.type,
        })),
      ],
      key: Parameters.Psychographics,
    },
    {
      fields: [
        ...behavioralFormData.map((item, index) => ({
          metaData: item,
          key: `${Parameters.Behavior}-${index}`,
          name: item.name,
          description: `${Parameters.Behavior}-${item.label}`,
          type: item.type,
        })),
      ],
      key: Parameters.Behavior,
    },

    {
      fields: [
        ...weatherAndClimateFormData.map((item, index) => ({
          metaData: item,
          key: `${Parameters.WeatherAndClimate}-${index}`,
          name: item.name,
          description: `${Parameters.WeatherAndClimate}-${item.label}`,
          type: item.type,
        })),
      ],
      key: Parameters.WeatherAndClimate,
    },
    {
      fields: [
        ...transactionFormData.map((item, index) => ({
          metaData: item,
          key: `${Parameters.TransactionalData}-${index}`,
          name: item.name,
          description: `${Parameters.TransactionalData}-${item.label}`,
          type: item.type,
        })),
      ],
      key: Parameters.TransactionalData,
    },

    {
      fields: [
        {
          metaData: {
            id: '',
            index: 0,
            activeSectionIndex: 0,
            label: 'Location',
            placeholder: 'Location',
            icon: 'location',
            name: 'location',
            type: FormFields.LOCATION,
            required: true,
          },
          key: `${Parameters.Location}-${0}`,
          name: Parameters.Location,
          description: `${Parameters.Demographics}-location`,

          type: FormFields.LOCATION,
        },
      ],
      key: Parameters.Location,
    },
  ];
  const [validationSchema, setValidationSchema] = useState<any>();
  const [blocs, setBlocs] = useState<AudienceBloc[]>(allBlocs);
  const [openCategoryModal, setAddOpenCategoryModal] = useState(false);
  const [openField, setOpenField] = useState(false);
  const navigate = useNavigate();

  const schema = generateValidationSchema(
    blocs
      .map((item) =>
        item.fields.map((field) => {
          return {
            ...field.metaData,
            name: generateFormName(item.key, field.metaData.label),
          };
        })
      )
      .flat()
  );

  useEffect(() => {
    setValidationSchema(schema);
  }, [blocs]);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const [currentBloc, setCurrentBloc] = useState<AudienceBloc | undefined>(
    allBlocs.length > 0 ? allBlocs[0] : undefined
  );

  const [hoveredBloc, setHoveredBloc] = useState<AudienceBloc | undefined>(
    undefined
  );
  // const [formDataValue, setFormDataValue] = useState<PersonaDto>({});

  const { mutate: addAudience, isPending } = useApi.mutate({
    queryKey: [],
    callBack: (data: CreateAudience) => {
      return AudienceController.createAudience(data);
    },
    onSuccess: (_) => {
      navigate(`/${RouteNames.dashboard}/${RouteNames.audience_home}`);
    },
  });

  const onSubmit = (data: Record<string, any>) => {
    const finalData: CreateAudience = {
      name: 'Audience #101',
      description: '',
      isTemplate: true,
      metaData: {},
      blocs: blocs,
    };

    console.log('Final Data', finalData);
    addAudience(finalData);
  };
  return (
    <>
      <AddAudienceCategoryModal
        action={openCategoryModal}
        setAction={setAddOpenCategoryModal}
        onAddCategory={(bloc: AudienceBloc) => {
          setBlocs([...blocs, bloc]);
          setCurrentBloc(bloc);
        }}
      />
      {currentBloc && (
        <AudienceFieldModal
          currentBloc={currentBloc}
          action={openField}
          setAction={setOpenField}
          onAddField={(question: Question) => {
            if (currentBloc) {
              const newBloc: AudienceBloc = {
                ...currentBloc,
                fields: [...currentBloc.fields, question],
              };
              setCurrentBloc(newBloc);

              const currentIndex = blocs.findIndex(
                (item) => item.key == currentBloc.key
              );
              blocs[currentIndex] = currentBloc;
              setBlocs([...blocs]);

              console.log('currentBloc', currentBloc);
              console.log('blocs', blocs);
            }
          }}
        />
      )}
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div>
          <div className="w-full h-[88vh]">
            <div className="flex w-[90%] mx-auto  border-b-gray-100">
              <div className="flex w-1/2">
                <div className="w-1/4 py-10">
                  <div className="flex justify-between items-center mt-2 mb-2 border-0 border-b">
                    <AppButton
                      label="New Category"
                      className="w-full mb-2"
                      onClick={() => setAddOpenCategoryModal(true)}
                    />
                  </div>
                  {blocs.map((parameter, index) => (
                    <div
                      key={`{${parameter}-x-${index}`}
                      className={`flex items-center justify-between py-3 cursor-pointer pl-2 text-[0.75rem] transition-all duration-500 ease-in-out ${
                        currentBloc?.key === parameter.key
                          ? 'bg-gray-100 border-r-primary-500 border-r-2'
                          : ''
                      }`}
                      onClick={() => setCurrentBloc(parameter)}
                      onMouseEnter={() => setHoveredBloc(parameter)}
                    >
                      <p>{parameter.key}</p>
                      <div
                        className={`transition-all duration-300 ease-in-out ${
                          hoveredBloc?.key === parameter.key ? '' : 'scale-0'
                        }`}
                      >
                        <GoTrash
                          className="p-2 bg-gray-200 cursor-pointer hover:bg-gray-300 rounded-sm text-red-500"
                          size={30}
                          onClick={() => {
                            const newItems = blocs.filter(
                              (item) => item.key != currentBloc?.key
                            );
                            setCurrentBloc(undefined);
                            setBlocs(newItems);
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-l border-gray-50 px-5 py-10 overflow-y-hidden h-[80vh] grow">
                  <div className="flex justify-end items-center border-0 border-b mb-3 py-2">
                    <AppButton
                      label="New Question"
                      onClick={() => setOpenField(true)}
                    />
                  </div>
                  <div className="overflow-y-scroll px-2 h-full">
                    <GenerateForm
                      currentBloc={currentBloc}
                      onDeleteField={(index, field) => {
                        const item = currentBloc?.fields[index];
                        if (item) {
                          const newItems = currentBloc?.fields.filter(
                            (field) => field != item
                          );
                          if (currentBloc) {
                            const updatedBloc = {
                              ...currentBloc,
                              fields: newItems || [],
                            };
                            setCurrentBloc(updatedBloc);

                            const updatedBlocs = blocs.map((bloc) =>
                              bloc.key === currentBloc.key ? updatedBloc : bloc
                            );
                            setBlocs(updatedBlocs);
                          }
                        }
                      }}
                      updateBloc={(newFormData) => {
                        const updatedBlocs = blocs.map((bloc) =>
                          bloc.key === currentBloc?.key ? newFormData : bloc
                        );
                        setBlocs(updatedBlocs);
                      }}
                      control={control}
                    />
                  </div>
                </div>
              </div>
              <div className="flex w-1/2 h-[80vh] overflow-y-auto">
                <div className="flex flex-col w-full">
                  {blocs.map((blocItem, index) => (
                    <div
                      className="flex w-full border-b  border-gray-100 grow"
                      key={`{${blocItem}-${index}`}
                    >
                      <div
                        className={`flex w-1/4 cursor-pointer text-sm items-center bg-gray-50 px-5`}
                      >
                        {blocItem.key}
                      </div>
                      <div className="flex w-full flex-wrap   py-4 items-center px-5 gap-x-2 gap-y-2">
                        {
                          <GenerateChipPreview
                            bloc={blocItem}
                            emptyField={(data) => {
                              const updatedBloc = blocs.map((item) =>
                                item.key === data.key ? data : item
                              );
                              setBlocs(updatedBloc);
                              console.log('newFormData', data);
                            }}
                          />
                        }
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="border-b border-b-gray-50 w-full"></div>
            <div className="flex justify-end w-[90%] mx-auto mt-5">
              <AppButton
                isLoading={isPending}
                label="Save"
                type="submit"
                className="rounded-none w-32 justify-center item-center"
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default NewAudienceGroup;
