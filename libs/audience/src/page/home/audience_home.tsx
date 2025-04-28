import { AppButton, AppUIInput, ErrorCard } from '@tribu/ui';
import { RouteNames, useApi, useDebounce } from '@tribu/utils';
import { CiSearch } from 'react-icons/ci';
import { IoMdAdd } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import AudienceController from '../../controllers/audience_controller';
import { Bloc } from '../../data/interfaces/create_audience';
import { Parameters } from '../../data/enums/form_enums';
import { useEffect, useState } from 'react';

export const AudienceHome = () => {
  const navigate = useNavigate();
  const [debounce, setDebouncedValue] = useDebounce('', 500);

  const { data, isLoading, isError, error } = useApi.get({
    queryKey: ['audience'],
    callBack: () => {
      return AudienceController.getAudience();
    },
  });

  const initialData = data?.map((bloc) => {
    return {
      id: bloc['_id'],
      bloc: bloc.blocs.find((item) => item.key == Parameters.Demographics),
    };
  });

  const [demographics, setDemographics] = useState(initialData);

  const getValue: any = (bloc: Bloc | undefined, name: string) => {
    const value = bloc?.fields.find((item) => item.name == name);
    return value?.metaData.value;
  };

  useEffect(() => {
    console.log('debounce', debounce);
    const filtered = initialData?.filter((item) => {
      const title = getValue(item.bloc, 'title');
      return title?.includes(debounce);
    });

    setDemographics(filtered);
  }, [debounce]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDebouncedValue(e.target.value);
  };

  // console.log('demographics', demographics);
  return (
    <div className="w-[85%] mx-auto mt-20">
      <div className="flex justify-between mt-10">
        <div className="w-1/3">
          <AppUIInput
            icon={
              <CiSearch className="absolute left-2 text-gray-400 scale-150" />
            }
            inputClasses="w-full pl-10"
            additionalClasses="w-[40%]"
            placeholder="Search personas"
            onChange={handleSearch}
          />
        </div>
        <AppButton
          onClick={() => {
            navigate('/dashboard/audience/groups/new');
          }}
          label="New Group"
          icon={<IoMdAdd />}
          className="rounded-sm"
        />
      </div>

      <div className="w-full flex flex-wrap gap-y-14 md:gap-x-[4%] lg:gap-x-[5%] mt-10">
        {isLoading &&
          [1, 2, 3, 4, 5, 6].map((index) => {
            return (
              <div
                className="flex items-center w-full md:w-[48%] lg:w-[30%] rounded-sm animate-pulse border border-gray-100 p-4"
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

        {isError && (
          <ErrorCard title="Failed to load audience!" message={error.message} />
        )}

        {demographics && demographics.length === 0 && (
          <div className="item-center w-full flex flex-col gap-y-2 justify-center bg-purple-50 h-[50vh] items-center">
            <p className="text-md">No audience added!</p>
            <AppButton
              onClick={() => {
                navigate('/dashboard/audience/groups/new');
              }}
              label="New Group"
              icon={<IoMdAdd />}
              className="!rounded-sm mt-5"
            />
          </div>
        )}

        {demographics &&
          demographics.map(({ bloc, id }, index) => {
            const age = getValue(bloc, 'age');
            const title = getValue(bloc, 'title');
            const ethnicity = getValue(bloc, 'ethnicity');
            const children = getValue(bloc, 'children');

            return (
              <div
                onClick={() => {
                  navigate(
                    `/${RouteNames.dashboard}/${RouteNames.edit_audience}/${id}`
                  );
                }}
                className="w-full md:w-[48%] lg:w-[30%] cursor-pointer hover:bg-secondary-50 rounded-lg"
                key={`pk-${index}-${index}`}
              >
                <div className="border flex items-center border-gray-100 rounded-lg p-4">
                  <img
                    src={`https://avatar.iran.liara.run/public/${index}`}
                    alt={'userDemographics'}
                    className="w-20 h-20 object-cover rounded-full"
                  />
                  <div className="flex ml-10">
                    <div className="">
                      <p className="text-xs mr-5">Name</p>

                      <p className="text-xs mr-5">Age</p>

                      <p className="text-xs mr-5">Location</p>

                      <p className="text-xs mr-5">Interest</p>
                    </div>
                    <div className="">
                      <p className="text-xs mr-5">{title}</p>
                      <p className="text-xs mr-5">{age ?? 'No Age'} </p>
                      <p className="text-xs mr-5">
                        {children ?? 'No Children'}
                      </p>
                      <p className="text-xs mr-5">{ethnicity}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default AudienceHome;
