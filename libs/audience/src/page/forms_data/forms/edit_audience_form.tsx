import { AudienceGLMap } from '@tribu/maps';
import AudienceGenericFormFIeldsForm from './generic_fields';
import { DemographicDto, PersonaDto } from '@tribu/targets';
import { Parameters } from '../../../data/enums/form_enums';
import { AudienceBloc } from 'libs/audience/src/data/interfaces/create_audience';

export interface NewAudienceFormProps {
  bloc: AudienceBloc;
  setBloc: (data: PersonaDto) => void;
  updateBloc: (data: AudienceBloc) => void;
  control: any;
}
const GenerateEditForm = ({
  control,
  bloc,
  setBloc,
  updateBloc,
}: NewAudienceFormProps) => {
  if (bloc.key == Parameters.Location) {
    return (
      <AudienceGLMap
        onLocationUpdate={(location) => {
          bloc.fields[0].metaData.value = location?.text;
          updateBloc(bloc);
          setBloc({
            ...bloc,
            location: {
              country: 'string',
              region: 'string',
              city: location?.text,
              postalCode: 'string',
              latitude: location?.coordinates.latitude,
              longitude: location?.coordinates.longitude,
              neighborhood: location?.place_name,
              proximityToLandmark: 'string',
              timeZone: 'string',
            },
          });
        }}
      />
    );
  }

  return (
    <AudienceGenericFormFIeldsForm
      data={bloc.fields}
      formFields={bloc.fields.map((field) => field.metaData)}
      formTitle={bloc.key}
      control={control}
      updateField={(index, value) => {
        bloc.fields[index].metaData.value = value;
        updateBloc(bloc);
      }}
      updateAudienceGenericFormFIelds={(data) => {
        setBloc({ ...bloc, demographic: data });
      }}
    />
  );
};

export default GenerateEditForm;
