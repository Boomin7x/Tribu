import { AppButton, AppChip } from '@tribu/ui';
import { useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { generateFormName, generateValidationSchema } from '@tribu/forms';
import { PersonaDto } from '@tribu/targets';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import GenerateForm from '../../page/forms_data/forms/new_audience_form';
import AudienceController from '../../controllers/audience_controller';
import { RouteNames, useApi } from '@tribu/utils';
import { Parameters } from '../../data/enums/form_enums';
import {
  Bloc,
  CreateAudience,
  Question,
} from '../../data/interfaces/create_audience';
import { useNavigate, useParams } from 'react-router-dom';
import GenerateEditForm from '../forms_data/forms/edit_audience_form';

export const EditAudienceGroup = () => {
  const { id } = useParams();
  const { data, isLoading, isError, isSuccess, error } =
    useApi.get<CreateAudience>({
      queryKey: [id!],
      callBack: () => AudienceController.findAudienceGroupById(id!),
    });

  const [validationSchema, setValidationSchema] = useState<any>();
  const [blocs, setBlocs] = useState<Bloc[]>([]);

  useEffect(() => {
    if (data?.blocs) {
      setBlocs(data.blocs);
      if (data.blocs.length > 0) {
        setCurrentBloc(data.blocs[0]);
      }
    }
    console.log('blocs', data?.blocs);
  }, [isSuccess]);

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
  }, []);
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const [currentBloc, setCurrentBloc] = useState<Bloc | undefined>(
    blocs.length > 0 ? blocs[0] : undefined
  );
  // const [formDataValue, setFormDataValue] = useState<PersonaDto>({});

  const { mutate: addAudience, isPending } = useApi.post({
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

  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>No data found</div>;
  if (isError) return <div>No data found</div>;
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
                {blocs.map((parameter, index) => (
                  <div
                    className="flex w-full border-b  border-gray-100 grow"
                    key={`{${parameter}-${index}`}
                  >
                    <div
                      className={`flex w-1/4 cursor-pointer text-sm items-center bg-gray-50 px-5`}
                    >
                      {parameter.key}
                    </div>
                    <div className="flex w-full flex-wrap   py-4 items-center px-5 gap-x-2 gap-y-2">
                      <GenerateChipPreview
                        bloc={parameter}
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
              label="Save"
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
  return bloc.fields.map((question, index) => {
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
