import { AppButton, AppChip, AppLoader, ErrorCard } from '@tribu/ui';
import { useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { generateFormName, generateValidationSchema } from '@tribu/forms';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import AudienceController from '../../controllers/audience_controller';
import { RouteNames, useApi } from '@tribu/utils';
import { Bloc, CreateAudience } from '../../data/interfaces/create_audience';
import { useNavigate, useParams } from 'react-router-dom';
import GenerateEditForm from '../forms_data/forms/edit_audience_form';
import { UseQueryResult } from '@tanstack/react-query';

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
  const [blocs, setBlocs] = useState<Bloc[]>([]);
  const [currentBloc, setCurrentBloc] = useState<Bloc | undefined>(
    blocs.length > 0 ? blocs[0] : undefined
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
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div>
        <div className="w-full h-[88vh]">
          <div className="flex w-[90%] mx-auto  border-b-gray-100">
            <div className="flex w-1/2">
              <div className="w-1/4 py-10">
                {blocs.map((parameter, index) => (
                  <div
                    key={`{${parameter}-x-${index}`}
                    className={`py-4 cursor-pointer pl-2 text-sm ${
                      currentBloc?.key === parameter.key
                        ? 'bg-gray-100 border-r-primary-500 border-r-2'
                        : ''
                    }`}
                    onClick={() => setCurrentBloc(parameter)}
                  >
                    {parameter.key}
                  </div>
                ))}
              </div>
              <div className="border-l border-gray-50 px-12 py-10 grow overflow-y-scroll h-[80vh]">
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
  );
};
const GenerateChipPreview = ({
  bloc,
  emptyField,
}: {
  bloc: Bloc;
  emptyField: (data: Bloc) => undefined;
}) => {
  return bloc.fields
    .filter((item) => item.metaData.value != undefined)
    .map((question, index) => {
      return (
        <AppChip
          label={question.metaData.value}
          key={`${question.key}-y-${index}`}
          additionClasses="bg-gray-50 text-gray-800 font-light px-4  border border-gray-100 text-sm hover:border-gray-100"
          icon={
            <IoMdClose
              className="hover:bg-gray-100 rounded-full w-6 h-6 p-1 "
              onClick={() => {
                question.metaData.value = undefined;
                emptyField(bloc);
              }}
            />
          }
        />
      );
    });
};

export default EditAudienceGroup;
