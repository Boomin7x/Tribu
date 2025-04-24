import { AppButton, AppUIInput, ErrorCard } from '@tribu/ui';
import { useApi } from '@tribu/utils';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SurveyTemplateController from '../controller/survey_template_controller';
export const SurveyTemplates = () => {
  let navigate = useNavigate();

  const { data, isLoading, isError, error, refetch } = useApi.get({
    queryKey: [],
    callBack: () => {
      return SurveyTemplateController.getTemplates();
    },
  });

  const [activeItem, setActiveItem] = useState<String>('');

  return (
    <div className="w-screen h-screen">
      <div className="flex w-full">
        <div className="lg:w-1/3 bg-secondary-100 h-screen"></div>
        <div className="h-screen w-full lg:w-2/3">
          <div className="w-[70%] ml-20 mt-20">
            <AppUIInput
              placeholder="Enter campaign Name"
              label="Enter campaign Name"
              additionalClasses="mt-20"
              inputClasses="w-full py-3"
            />
          </div>
          <div className="h-[60vh] overflow-y-scroll border-y-[1px] border-gray-200 mt-10 w-full">
            <div className="flex">
              <div
                className={`w-[30%] border-r-[1px] flex flex-col gap-5 ${
                  isError ? '' : 'pl-10 lg:pl-20 pt-10'
                }`}
              >
                {isLoading &&
                  Array.from({ length: 10 }, (_, index) => index + 1).map(
                    (index) => {
                      return (
                        <div
                          className="w-4/5 flex items-center animate-pulse"
                          key={`sk-${index}-${index} mt-5`}
                        >
                          <p className="w-full h-5 rounded-sm bg-gray-300"></p>
                        </div>
                      );
                    }
                  )}

                {isError && (
                  <ErrorCard
                    title="Could not fetch templates"
                    message={error.message}
                    className="h-full py-20 text-center px-5"
                    callback={() => refetch()}
                  />
                )}

                {data &&
                  [
                    'General',
                    'Market surveys',
                    'Community',
                    'School surveys',
                    'Product reviews',
                    'Price schedules',
                  ].map((item) => {
                    return (
                      <div
                        onClick={() => setActiveItem(item)}
                        className={`
                        cursor-pointer font-normal ${
                          activeItem === item && 'border-r-2 border-primary-500'
                        }
                        `}
                        key={`template-${item}`}
                      >
                        {item}
                      </div>
                    );
                  })}
              </div>
              <div className="w-[70%] h-[60vh]"></div>
            </div>
          </div>
          <div className="flex justify-end px-20">
            <AppButton
              label="Proceed"
              className="flex mt-10 justify-end rounded-sm bg-primary-600"
              onClick={() => navigate('/dashboard/surveys/new')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurveyTemplates;
