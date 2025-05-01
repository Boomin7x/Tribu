import { AudienceGLMap } from '@tribu/maps';
import AudienceGenericFormFIeldsForm from './generic_fields';
import { PersonaDto } from '@tribu/targets';
import { Parameters } from '../../../data/enums/form_enums';
import { AudienceBloc } from '@tribu/audience';
import { ErrorCard } from '@tribu/ui';

export interface NewAudienceFormProps {
  // formDataValue: PersonaDto | undefined;
  // setBloc: (data: PersonaDto) => void;
  currentBloc: AudienceBloc | undefined;
  updateBloc: (data: AudienceBloc) => void;
  onDeleteField: (index: number, value: any) => void;
  control: any;
}
const GenerateForm = ({
  currentBloc,
  control,
  // setBloc,
  updateBloc,
  onDeleteField,
}: NewAudienceFormProps) => {
  if (!currentBloc)
    return (
      <div className="flex items-center justify-center h-[50vh]">
        No Form added yet!
      </div>
    );

  if (currentBloc.fields.length == 0)
    return (
      <ErrorCard
        title={`Category "${currentBloc.key}" is empty`}
        message={`No question has been added to the category "${currentBloc.key}"`}
        className="h-full !bg-secondary-50 text-center !gap-y-1 px-10"
      />
    );

  if (currentBloc.key == Parameters.Location) {
    return (
      <AudienceGLMap
        onLocationUpdate={(location) => {
          currentBloc.fields[0].metaData.value = location?.text;
          updateBloc(currentBloc);
          // setBloc({
          //   ...currentBloc,
          //   location: {
          //     country: 'string',
          //     region: 'string',
          //     city: location?.text,
          //     postalCode: 'string',
          //     latitude: location?.coordinates.latitude,
          //     longitude: location?.coordinates.longitude,
          //     neighborhood: location?.place_name,
          //     proximityToLandmark: 'string',
          //     timeZone: 'string',
          //   },
          // });
        }}
      />
    );
  }

  return (
    <AudienceGenericFormFIeldsForm
      data={currentBloc.fields}
      formFields={currentBloc.fields.map((field) => field.metaData)}
      formTitle={currentBloc.key}
      control={control}
      onDeleteField={onDeleteField}
      updateField={(index, value) => {
        currentBloc.fields[index].metaData.value = value;
        updateBloc(currentBloc);
      }}
      updateAudienceGenericFormFIelds={(data) => {
        // setBloc({ ...currentBloc, demographic: data });
      }}
    />
  );
};

export default GenerateForm;
