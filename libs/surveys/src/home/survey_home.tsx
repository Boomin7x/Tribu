import { AppButton, AppModalDialog, AppUIInput, ErrorCard } from '@tribu/ui';
import { IoMdAdd } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import { AppTable, TableColumn } from '@tribu/tables';
import { RouteNames, useApi } from '@tribu/utils';
import SurveyController from '../controllers/survey_controller';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { GlobalTab } from '@tribu/forms';
import { resetState, setSelectedTab } from '../survery_builder/data';
import { Survey } from '../data/interfaces/create_survey';

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
  const dispatch = useDispatch();

  const [action, setAction] = useState<{ status: boolean; id?: string }>({
    status: false,
  });

  const { data, refetch, isLoading, isError, error } = useApi.query({
    queryKey: ['surveys'],
    callBack: () => {
      return SurveyController.getSurvey();
    },
    onSuccess: (data) => {},
  });

  const {
    mutate: deleteSurvey,
    isPending,
    isError: isErrorDeleting,
    error: deleteError,
  } = useApi.mutate({
    queryKey: ['delete-survey'],
    callBack: (id: string) => {
      return SurveyController.deleteSurvey(id);
    },
    onSuccess: (data) => {
      refetch();
      setAction({ status: false });
    },
  });
  const [tableData, setTableData] = useState<Survey[]>([]);

  useEffect(() => {
    const tableD = data?.map((item) => item.form);
    if (data) setTableData(data);
  }, [data]);

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
            placeholder="Search"
          />
        </div>
        <AppButton
          onClick={() => {
            dispatch(resetState({}));
            navigate('/surveys/templates');
          }}
          label="New Survey"
          icon={<IoMdAdd />}
          className="rounded-sm"
        />
      </div>

      {isError && (
        <ErrorCard title="Fetching Surveys Failed!" message={error.message} />
      )}
      <AppTable<Survey>
        loading={isLoading}
        tableData={tableData}
        className="mt-10"
        onRowClicked={(row) => {
          console.log(row);
        }}
        onEdit={(row) => {
          dispatch(setSelectedTab(GlobalTab.CREATE));
          navigate(
            `/${RouteNames.dashboard}/${RouteNames.edit_survey}/${row._id}`
          );
        }}
        onView={(row) => {
          dispatch(setSelectedTab(GlobalTab.PREVIEW));
          navigate(
            `/${RouteNames.dashboard}/${RouteNames.edit_survey}/${row._id}`
          );
        }}
        onDelete={(row) => {
          setAction({ status: true, id: row._id });
        }}
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
              selector: (row) => (row.form.isTemplate ? 'true' : 'false'),
            },
            {
              name: 'Questions Count',
              selector: (row) => row.form.blocs.length,
            },
          ] as TableColumn<Survey>[]
        }
        totalRows={0}
        perPage={0}
        fetchData={(page) => {}}
      />
      <AppModalDialog
        isOpen={action.status}
        onClose={() => {
          setAction({ status: !action.status });
        }}
        title="Delete Survey"
      >
        <h2>Are you sure you want to delete this survey?</h2>
        <div className="flex justify-end mt-4">
          <AppButton
            label="Cancel"
            onClick={() => {
              setAction({ status: false });
            }}
            className="mr-2"
          />
          <AppButton
            label="Delete"
            isLoading={isPending}
            onClick={() => {
              deleteSurvey(action.id);
            }}
          />
        </div>
      </AppModalDialog>
    </div>
  );
};

export default SurveyHome;
