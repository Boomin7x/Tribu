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
import { Bloc } from 'libs/audience/src/data/interfaces/create_audience';

export interface NewAudienceFormProps {
  bloc: Bloc;
  setBloc: (data: PersonaDto) => void;
  updateBloc: (data: Bloc) => void;
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
    <AudienceGenericFormFIeldsForm<DemographicDto>
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

  //   switch (currentBloc.key) {
  //     case Parameters.Demographics:
  //       return (
  //         <AudienceGenericFormFIeldsForm<DemographicDto>
  //           data={bloc?.fields}
  //           formFields={demographicFormData}
  //           formTitle={Parameters.Demographics}
  //           control={control}
  //           updateField={(index, value) => {
  //             currentBloc.fields[index].metaData.value = value;
  //             // currentBloc.fields[index].description = value;
  //             updateBloc(currentBloc);
  //           }}
  //           updateAudienceGenericFormFIelds={(data) => {
  //             setBloc({ ...bloc, demographic: data });
  //           }}
  //         />
  //       );
  //     case Parameters.Psychographics:
  //       return (
  //         <AudienceGenericFormFIeldsForm<PsychographicsDto>
  //           data={bloc?.psychographics}
  //           formFields={psychographicFormData}
  //           control={control}
  //           formTitle={Parameters.Psychographics}
  //           updateAudienceGenericFormFIelds={(data) => {
  //             setBloc({ ...bloc, psychographics: data });
  //           }}
  //           updateField={(index, value) => {
  //             currentBloc.fields[index].metaData.value = value;
  //             // currentBloc.fields[index].description = value;
  //             updateBloc(currentBloc);
  //           }}
  //         />
  //       );
  //     case Parameters.Behavior:
  //       return (
  //         <AudienceGenericFormFIeldsForm<IBehavioral>
  //           data={bloc?.behavioral}
  //           formFields={behavioralFormData}
  //           control={control}
  //           formTitle={Parameters.Behavior}
  //           updateAudienceGenericFormFIelds={(data) => {
  //             setBloc({ ...bloc, behavioral: data });
  //           }}
  //           updateField={(index, value) => {
  //             currentBloc.fields[index].metaData.value = value;
  //             // currentBloc.fields[index].description = value;
  //             updateBloc(currentBloc);
  //           }}
  //         />
  //       );
  //     case Parameters.WeatherAndClimate:
  //       return (
  //         <AudienceGenericFormFIeldsForm<WeatherAndClimateDto>
  //           data={bloc?.weatherAndClimate}
  //           formFields={weatherAndClimateFormData}
  //           control={control}
  //           formTitle={Parameters.WeatherAndClimate}
  //           updateAudienceGenericFormFIelds={(data) => {
  //             setBloc({ ...bloc, weatherAndClimate: data });
  //           }}
  //           updateField={(index, value) => {
  //             currentBloc.fields[index].metaData.value = value;
  //             // currentBloc.fields[index].description = value;
  //             updateBloc(currentBloc);
  //           }}
  //         />
  //       );
  //     case Parameters.TransactionalData:
  //       return (
  //         <AudienceGenericFormFIeldsForm<TransactionDataDto>
  //           control={control}
  //           data={bloc?.transactionalData}
  //           formFields={transactionFormData}
  //           formTitle={Parameters.TransactionalData}
  //           updateAudienceGenericFormFIelds={(data) => {
  //             setBloc({ ...bloc, transactionalData: data });
  //           }}
  //           updateField={(index, value) => {
  //             currentBloc.fields[index].metaData.value = value;
  //             // currentBloc.fields[index].description = value;
  //             updateBloc(currentBloc);
  //           }}
  //         />
  //       );

  //     case Parameters.Location:
  //       return (
  //         <div className="flex flex-col  item-center justify-center">
  //           <AudienceGLMap
  //             onLocationUpdate={(location) => {
  //               currentBloc.fields[0].metaData.value = location?.text;
  //               // currentBloc.fields[0].description = location?.place_name ?? '';
  //               updateBloc(currentBloc);
  //               setBloc({
  //                 ...bloc,
  //                 location: {
  //                   country: 'string',
  //                   region: 'string',
  //                   city: location?.text,
  //                   postalCode: 'string',
  //                   latitude: location?.coordinates.latitude,
  //                   longitude: location?.coordinates.longitude,
  //                   neighborhood: location?.place_name,
  //                   proximityToLandmark: 'string',
  //                   timeZone: 'string',
  //                 },
  //               });
  //             }}
  //           />
  //         </div>
  //       );

  //     default:
  //       break;
  //   }

  //   return (
  //     <div className="flex items-center justify-center h-[50vh]">
  //       No Form added yet!
  //     </div>
  //   );
};

export default GenerateEditForm;
