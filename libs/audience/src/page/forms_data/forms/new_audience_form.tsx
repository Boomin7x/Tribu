import { AudienceGLMap } from '@tribu/maps';
import AudienceGenericFormFIeldsForm from './generic_fields';
import {
  DemographicDto,
  PersonaDto,
  PsychographicsDto,
  TransactionDataDto,
} from '@tribu/targets';
import { IBehavioral } from 'libs/targets/src/interfaces/behavioral.dto';
import { WeatherAndClimateDto } from 'libs/targets/src/interfaces/weather-and-climate.dto';
import { behavioralFormData } from '../data/behavior_form_data';
import { demographicFormData } from '../data/demographic_form_data';
import { psychographicFormData } from '../data/psychographic_form_data';
import { transactionFormData } from '../data/transaction_form_data';
import { weatherAndClimateFormData } from '../data/weather_and_climate_form_data';
import { Parameters } from '../../../data/enums/form_enums';
import { AudienceBloc } from '@tribu/audience';

export interface NewAudienceFormProps {
  formDataValue: PersonaDto | undefined;
  currentBloc: AudienceBloc | undefined;
  setFormDataValue: (data: PersonaDto) => void;
  updateBloc: (data: AudienceBloc) => void;
  control: any;
}
const GenerateForm = ({
  currentBloc,
  control,
  formDataValue,
  setFormDataValue,
  updateBloc,
}: NewAudienceFormProps) => {
  if (!currentBloc)
    return (
      <div className="flex items-center justify-center h-[50vh]">
        No Form added yet!
      </div>
    );
  switch (currentBloc.key) {
    case Parameters.Demographics:
      return (
        <AudienceGenericFormFIeldsForm<DemographicDto>
          data={formDataValue?.demographic}
          formFields={demographicFormData}
          formTitle={Parameters.Demographics}
          control={control}
          updateField={(index, value) => {
            currentBloc.fields[index].metaData.value = value;
            // currentBloc.fields[index].description = value;
            updateBloc(currentBloc);
          }}
          updateAudienceGenericFormFIelds={(data) => {
            setFormDataValue({ ...formDataValue, demographic: data });
          }}
        />
      );
    case Parameters.Psychographics:
      return (
        <AudienceGenericFormFIeldsForm<PsychographicsDto>
          data={formDataValue?.psychographics}
          formFields={psychographicFormData}
          control={control}
          formTitle={Parameters.Psychographics}
          updateAudienceGenericFormFIelds={(data) => {
            setFormDataValue({ ...formDataValue, psychographics: data });
          }}
          updateField={(index, value) => {
            currentBloc.fields[index].metaData.value = value;
            // currentBloc.fields[index].description = value;
            updateBloc(currentBloc);
          }}
        />
      );
    case Parameters.Behavior:
      return (
        <AudienceGenericFormFIeldsForm<IBehavioral>
          data={formDataValue?.behavioral}
          formFields={behavioralFormData}
          control={control}
          formTitle={Parameters.Behavior}
          updateAudienceGenericFormFIelds={(data) => {
            setFormDataValue({ ...formDataValue, behavioral: data });
          }}
          updateField={(index, value) => {
            currentBloc.fields[index].metaData.value = value;
            // currentBloc.fields[index].description = value;
            updateBloc(currentBloc);
          }}
        />
      );
    case Parameters.WeatherAndClimate:
      return (
        <AudienceGenericFormFIeldsForm<WeatherAndClimateDto>
          data={formDataValue?.weatherAndClimate}
          formFields={weatherAndClimateFormData}
          control={control}
          formTitle={Parameters.WeatherAndClimate}
          updateAudienceGenericFormFIelds={(data) => {
            setFormDataValue({ ...formDataValue, weatherAndClimate: data });
          }}
          updateField={(index, value) => {
            currentBloc.fields[index].metaData.value = value;
            // currentBloc.fields[index].description = value;
            updateBloc(currentBloc);
          }}
        />
      );
    case Parameters.TransactionalData:
      return (
        <AudienceGenericFormFIeldsForm<TransactionDataDto>
          control={control}
          data={formDataValue?.transactionalData}
          formFields={transactionFormData}
          formTitle={Parameters.TransactionalData}
          updateAudienceGenericFormFIelds={(data) => {
            setFormDataValue({ ...formDataValue, transactionalData: data });
          }}
          updateField={(index, value) => {
            currentBloc.fields[index].metaData.value = value;
            // currentBloc.fields[index].description = value;
            updateBloc(currentBloc);
          }}
        />
      );

    case Parameters.Location:
      return (
        <div className="flex flex-col  item-center justify-center">
          <AudienceGLMap
            onLocationUpdate={(location) => {
              currentBloc.fields[0].metaData.value = location?.text;
              // currentBloc.fields[0].description = location?.place_name ?? '';
              updateBloc(currentBloc);
              setFormDataValue({
                ...formDataValue,
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
        </div>
      );

    default:
      break;
  }

  return (
    <div className="flex items-center justify-center h-[50vh]">
      No Form added yet!
    </div>
  );
};

export default GenerateForm;
