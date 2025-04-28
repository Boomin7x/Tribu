import { AppButton, AppUIInput } from '@tribu/ui';
import { IoMdAdd } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import { AppTable, TableColumn } from '@tribu/tables';
import { useApi } from '@tribu/utils';
import SurveyController from '../controllers/survery_controller';
import { Form, FormBloc } from '../survery_builder/data/interfaces/survey';
type counterItem = {
  id: number;
  title: string;
  description: string;
};

const counterItems: counterItem[] = [
  {
    id: 1,
    title: 'Active Sets',
    description: '2584',
  },
  {
    id: 2,
    title: 'Under Review',
    description: '02',
  },
  {
    id: 3,
    title: 'Live Sets',
    description: '306',
  },
  {
    id: 4,
    title: 'Completed',
    description: '14',
  },
  {
    id: 4,
    title: 'Paused',
    description: '01',
  },
];

export const SurveyHome = () => {
  let navigate = useNavigate();

  const { data, isLoading, isError, error } = useApi.get({
    queryKey: ['surveys'],
    callBack: () => {
      return SurveyController.getSurvey();
    },
  });

  return (
    <div className="mt-20 w-[85%] mx-auto">
      <div className="flex">
        {counterItems.map((item) => (
          <div className="border border-gray-100 w-[25%] py-8">
            <div className="flex justify-center">
              <div className="flex flex-col items-center">
                <div className="text mb-2">{item.title}</div>
                <div className="text-3xl">{item.description}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-10">
        <div className="w-1/3">
          <AppUIInput
            icon={
              <CiSearch className="absolute left-2 text-gray-400 scale-150" />
            }
            inputClasses="w-full pl-10"
            additionalClasses="w-[40%]"
            placeholder="Search"
          />
        </div>
        <AppButton
          onClick={() => {
            navigate('/surveys/templates');
          }}
          label="New Survey"
          icon={<IoMdAdd />}
          className="rounded-sm"
        />
      </div>
      <AppTable<Form>
        loading={isLoading}
        tableData={data?.map((item) => item.form)}
        className="mt-10"
        columns={
          [
            {
              name: 'Name',
              selector: (row) => row.name,
            },
            {
              name: 'Description',
              selector: (row) => row.description,
            },
            {
              name: 'Is Template',
              selector: (row) => (row.isTemplate ? 'true' : 'false'),
            },
            {
              name: 'Questions Count',
              selector: (row) => row.blocs.length,
            },
          ] as TableColumn<Form>[]
        }
        totalRows={0}
        perPage={0}
        fetchData={(page) => {}}
      />
    </div>
  );
};

export default SurveyHome;
