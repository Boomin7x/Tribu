import {
  Avatar,
  Box,
  Button,
  Divider,
  List,
  Stack,
  Typography,
} from '@mui/material';
import { FiPlus } from 'react-icons/fi';

import { ColorLens, People, TuneRounded } from '@mui/icons-material';
import colors from '../../utils/styles/colors.module.scss';
import avatarImage from '../../assets/images/avatar.png';
import { AppSelect, AppTextArea } from '@tribu/forms';
import { AudienceController, Bloc, Parameters } from '@tribu/audience';
import { RouteNames, useApi } from '@tribu/utils';
import { useEffect, useState } from 'react';
import { AppButton, ErrorCard } from '@tribu/ui';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, updateFormAudienceId } from '../../data';

export const SettingsTab = () => {
  return (
    <Box paddingX={2} paddingY={2}>
      <Audience />
      <ThemeData />
      <TermsAndConditions />
    </Box>
  );
};
export const TermsAndConditions = () => {
  return (
    <Box
      border={'1px solid'}
      borderColor={colors.gray}
      py={1}
      borderRadius={2}
      mb={2}
    >
      <Button
        variant="text"
        sx={{ color: '#000', textTransform: 'capitalize', ml: 2, fontSize: 16 }}
        startIcon={
          <Avatar sx={{ bgcolor: colors.gray }} variant="square">
            <TuneRounded sx={{ color: '#000' }} />
          </Avatar>
        }
      >
        Terms and Conditions
      </Button>
      <Divider sx={{ borderColor: colors.gray, marginY: 1 }} />

      <AppTextArea
        placeholder={'Terms and conditions'}
        id={'terms'}
        hasBorder={false}
        maxLength={500}
        onChange={(e: any) => {
          console.log(e);
        }}
      />
    </Box>
  );
};
export const ThemeData = () => {
  const themeColors: { name: string; code: string }[] = [
    {
      name: 'Main Color',
      code: '#0CAF60',
    },
    {
      name: 'Background Color',
      code: '#1A73E8',
    },
    {
      name: 'Font Color',
      code: '#13191E',
    },
  ];
  return (
    <Box
      border={'1px solid'}
      borderColor={colors.gray}
      paddingY={1}
      borderRadius={2}
      mb={2}
    >
      <Button
        variant="text"
        sx={{ color: '#000', textTransform: 'capitalize', ml: 2, fontSize: 16 }}
        startIcon={
          <Avatar sx={{ bgcolor: colors.gray }} variant="square">
            <ColorLens sx={{ color: '#000' }} />
          </Avatar>
        }
      >
        Theme
      </Button>

      <Divider sx={{ borderColor: colors.gray, marginY: 1 }} />

      {themeColors.map((item, index) => {
        return (
          <Stack
            direction={'row'}
            key={index}
            justifyContent={'start'}
            alignItems={'center'}
            mb={1}
            py={1}
          >
            <Box width={'40%'}>
              <Typography textAlign={'end'}>{item.name}</Typography>
            </Box>
            <Box width={30} height={30} bgcolor={item.code} mx={2} />
            <Typography>{item.code}</Typography>
          </Stack>
        );
      })}
      <Box mt={2}>
        <Divider sx={{ borderColor: colors.gray, marginY: 1 }} />
        <Stack
          mx={2}
          direction={'row'}
          justifyContent={'end'}
          alignItems={'center'}
          py={2}
        >
          <Typography mr={2}>Font Family</Typography>
          <AppSelect
            hasBorder={true}
            id={'Times New Romans'}
            onChange={(event, child) => {
              console.log(event, child);
            }}
            items={['Times New Romans']}
            value={'Times New Romans'}
            width="60%"
          />
        </Stack>
      </Box>
    </Box>
  );
};
export const Audience = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { data, isLoading, isError, error, isSuccess, refetch } = useApi.get({
    queryKey: [],
    callBack: () => {
      return AudienceController.getAudience();
    },
  });

  const demographics = data?.map((bloc) => {
    return {
      audienceId: bloc['_id'],
      bloc: bloc.blocs.find((item) => item.key == Parameters.Demographics),
    };
  });

  const getValue: any = (bloc: Bloc | undefined, name: string) => {
    const value = bloc?.fields.find((item) => item.name == name);
    return value?.metaData.value;
  };

  const formItem = useSelector((state: RootState) => state.form.audienceIds);

  const [selectedBloc, setSelectedBloc] = useState<Bloc | undefined>();

  useEffect(() => {
    console.log('demographics', demographics);
    if (demographics) {
    }
  }, [isSuccess]);

  return (
    <Box
      border={'1px solid'}
      borderColor={colors.gray}
      paddingY={1}
      borderRadius={2}
      mb={2}
    >
      <Stack justifyContent={'space-between'} direction={'row'} paddingX={2}>
        <div className="flex items-center gap-2">
          <Avatar sx={{ bgcolor: colors.gray }} variant="square">
            <People sx={{ color: '#000' }} />
          </Avatar>
          <h2>Audience</h2>
        </div>

        <AppButton
          label="New"
          className="py-2"
          icon={<FiPlus />}
          onClick={() =>
            navigate(`/${RouteNames.dashboard}/${RouteNames.add_audience}`)
          }
        />
      </Stack>
      <Divider sx={{ borderColor: colors.gray, marginY: 1, mb: 2 }} />
      <Box paddingX={2}>
        <AppSelect
          hasBorder={true}
          id={'High school girls'}
          onChange={(event, child) => {
            const selected = demographics?.find((item) => {
              const value = event.target.value;
              return getValue(item.bloc, 'title') == value;
            });

            setSelectedBloc(selected?.bloc);
            dispatch(updateFormAudienceId([selected?.audienceId]));
          }}
          items={
            demographics?.map((item) => {
              return getValue(item.bloc, 'title');
            }) ?? []
          }
          value={getValue(selectedBloc, 'title')}
          fullWidth={true}
          width="100%"
        />

        {isLoading && (
          <div className="w-full mt-2">
            {[1].map((index) => {
              return (
                <div
                  className="flex items-center w-full rounded-sm animate-pulse border border-gray-100 p-4"
                  key={`sk-${index}-${index}`}
                >
                  <div className="w-20 h-20 object-cover rounded-full bg-gray-300"></div>
                  <div className="ml-10 grow flex flex-col gap-2">
                    <p className="w-full h-3 rounded-sm bg-gray-300"></p>
                    <p className="w-full h-3 rounded-sm bg-gray-300"></p>
                    <p className="w-full h-3 rounded-sm bg-gray-300"></p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {isError && (
          <ErrorCard
            title="Failed to load audience!"
            message={error.message}
            className="!h-auto py-5 mt-2"
            callback={refetch}
          />
        )}
        <Box mt={2}>
          {selectedBloc && (
            <UserCard
              name={getValue(selectedBloc, 'title')}
              age={getValue(selectedBloc, 'age')}
              interest={getValue(selectedBloc, 'title')}
              ethnicity={getValue(selectedBloc, 'ethnicity')}
            />
          )}
          {!selectedBloc && (
            <p className="py-10 bg-primary-50 text-center">
              No demographic profile selected
            </p>
          )}
        </Box>
      </Box>
    </Box>
  );
};
export type UserCardProps = {
  name: string;
  age: string;
  interest: string;
  ethnicity: string;
};
export const UserCard = ({ name, age, interest, ethnicity }: UserCardProps) => {
  const items: { title: string; desc: string }[] = [
    { title: 'Name', desc: name },
    { title: 'Age', desc: age },
    { title: 'Location', desc: interest },
    { title: 'Interest', desc: ethnicity },
  ];
  return (
    <Box
      paddingX={1}
      paddingY={1}
      border={'2px solid'}
      borderColor={colors.gray}
      borderRadius={1}
    >
      <Stack direction={'row'} justifyContent={'start'} alignItems={'center'}>
        <img src={avatarImage} width={80} />
        <Box marginLeft={1}>
          <List dense>
            {items.map((item, index) => (
              <Stack
                direction={'row'}
                alignItems={'center'}
                key={index}
                marginBottom={1}
              >
                <Typography
                  width={50}
                  textAlign={'left'}
                  fontSize={12}
                  marginRight={2}
                >
                  {item.title}
                </Typography>
                <Typography textAlign={'left'} fontSize={14} fontWeight={500}>
                  {item.desc}
                </Typography>
              </Stack>
            ))}
          </List>
        </Box>
      </Stack>
    </Box>
  );
};

export default SettingsTab;
