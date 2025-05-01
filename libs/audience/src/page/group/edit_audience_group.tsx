import { AppButton, AppChip, AppLoader, ErrorCard } from '@tribu/ui';
import { useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { generateFormName, generateValidationSchema } from '@tribu/forms';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import AudienceController from '../../controllers/audience_controller';
import { RouteNames, useApi } from '@tribu/utils';
import {
  AudienceBloc,
  CreateAudience,
  Question,
} from '../../data/interfaces/create_audience';
import { useNavigate, useParams } from 'react-router-dom';
import GenerateEditForm from '../forms_data/forms/edit_audience_form';
import { UseQueryResult } from '@tanstack/react-query';
import GenerateChipPreview from '../components/chip_preview';
import AddAudienceCategoryModal from '../components/audience_category_modal';
import AudienceFieldModal from '../components/audience_field_modal';
import { GoTrash } from 'react-icons/go';

export const EditAudienceGroup = () => {
  const { id } = useParams();
  const response = useApi.query<CreateAudience>({
    queryKey: [id!],
    callBack: () => AudienceController.findAudienceGroupById(id!),
  });

  return <EditAudienceFormGroup response={response} id={id!} />;
};

interface EditAudienceFormGroupProps {
  id: string;
  response: UseQueryResult<CreateAudience, Error>;
}

export const EditAudienceFormGroup = ({
  id,
  response,
}: EditAudienceFormGroupProps) => {
  const { data, isLoading: isFetching, isError, error } = response;

  const [validationSchema, setValidationSchema] = useState<any>();
  const [blocs, setBlocs] = useState<AudienceBloc[]>([]);
  const [currentBloc, setCurrentBloc] = useState<AudienceBloc | undefined>(
    blocs.length > 0 ? blocs[0] : undefined
  );
  const [openCategoryModal, setAddOpenCategoryModal] = useState(false);
  const [openField, setOpenField] = useState(false);

  const [hoveredBloc, setHoveredBloc] = useState<AudienceBloc | undefined>(
    undefined
  );
  useEffect(() => {
    if (data?.blocs) {
      setBlocs(data.blocs);
      setCurrentBloc(data.blocs[0]);

      const schema = generateValidationSchema(
        blocs
          .map((item) =>
            item.fields.map((field) => {
              return {
                ...field.metaData,
                // name: generateFormName(item.key, field.metaData.label),
              };
            })
          )
          .flat()
      );
      setValidationSchema(schema);
    }
  }, [data]);

  // console.log('data', data);
  // console.log('allBlocs', allBlocs);

  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  console.log('errors', errors);

  const { mutate: updateAudience, isPending } = useApi.mutate({
    queryKey: ['audience'],
    callBack: (data: CreateAudience) => {
      return AudienceController.updateAudience(id, data);
    },
    onSuccess: (_) => {
      navigate(`/${RouteNames.dashboard}/${RouteNames.audience_home}`);
    },
  });

  const onSubmit = (records: Record<string, any>) => {
    const finalData: CreateAudience = {
      name: data?.name ?? '',
      description: data?.description ?? '',
      isTemplate: data?.isTemplate ?? false,
      metaData: data?.metaData ?? {},
      blocs: blocs,
    };

    console.log('Final Data', finalData);
    updateAudience(finalData);
  };

  if (isFetching)
    return (
      <div className="h-full w-full flex items-center justify-center">
        <AppLoader />
      </div>
    );
  if (isError)
    return (
      <div className="flex h-full w-4/5 mx-auto items-center justify-center">
        <ErrorCard title="Error Finding Audience" message={error?.message} />
      </div>
    );
  if (!data)
    return (
      <div className="flex h-full w-4/5 mx-auto items-center justify-center">
        <ErrorCard
          title="No Audience"
          message={`Audience with ID ${id} not found`}
        />
      </div>
    );
  return (
    <>
      <AddAudienceCategoryModal
        action={openCategoryModal}
        setAction={setAddOpenCategoryModal}
        onAddCategory={(bloc: AudienceBloc) => {
          setBlocs([...blocs, bloc]);
        }}
      />
      {currentBloc && (
        <AudienceFieldModal
          currentBloc={currentBloc}
          action={openField}
          setAction={setOpenField}
          onAddField={(question: Question) => {
            console.log('findQuestion', question);
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
                  <AppButton
                    label="New Category"
                    className="w-full mb-2"
                    onClick={() => setAddOpenCategoryModal(true)}
                  />

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
                <div className="border-l border-gray-50 px-12 py-10 grow overflow-y-scroll h-[80vh]">
                  <div className="flex justify-end items-center border-0 border-b mb-3 py-2">
                    <AppButton
                      label="New Question"
                      onClick={() => setOpenField(true)}
                    />
                  </div>
                  {currentBloc && (
                    <GenerateEditForm
                      bloc={currentBloc}
                      setBloc={(data) => {}}
                      updateBloc={(newFormData) => {
                        const updatedBloc = blocs.map((item) =>
                          item.key === currentBloc.key ? newFormData : item
                        );
                        setBlocs(updatedBloc);
                        console.log('newFormData', newFormData);
                        console.log('updatedBloc', updatedBloc);
                      }}
                      control={control}
                    />
                  )}
                </div>
              </div>
              <div className="flex w-1/2 h-[80vh] overflow-y-auto">
                <div className="flex flex-col w-full">
                  {blocs.map((blocItem, index) => (
                    <div
                      className="flex w-full border-b  border-gray-100 grow"
                      key={`{${blocItem}-${index}-y-${index}`}
                    >
                      <div
                        className={`flex w-1/4 cursor-pointer text-sm items-center bg-gray-50 px-5`}
                      >
                        {blocItem.key}
                      </div>
                      <div className="flex w-full flex-wrap   py-4 items-center px-5 gap-x-2 gap-y-2">
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
                label="Update"
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
export default EditAudienceGroup;
