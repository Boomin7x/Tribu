import { useState, useEffect, FC } from 'react';
import DataTable, {
  TableColumn,
  TableStyles,
} from 'react-data-table-component';
import TableLoader from './table_loader';

const customStyles: TableStyles = {
  table: {
    style: {
      borderLeft: '0.2px solid #F3F4F6 !important',
      borderRight: '0.2px solid #F3F4F6 !important',
      borderTop: '0.2px solid #F3F4F6 !important',
      borderBottom: '0px solid #F3F4F6 !important',
    },
  },
  rows: {
    style: {
      minHeight: '60px',
      borderBottom: '0.2px solid #F3F4F6 !important',
    },
  },
  headCells: {
    style: {
      padding: '0 30px',
      backgroundColor: '#effef5',
    },
  },
  cells: {
    style: {
      padding: '0 30px',
    },
  },
};
export interface AppTableProps<T> extends React.HTMLAttributes<HTMLDivElement> {
  columns: TableColumn<T>[];
  tableData?: T[];
  loading: boolean;
  totalRows: number;
  perPage: number;
  fetchData?: (page: number) => void;
}
export const AppTable = <T,>({
  tableData,
  fetchData,
  columns,
  loading,
  ...props
}: AppTableProps<T>) => {
  const [data, setData] = useState(tableData);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(3);

  const handlePageChange = (page: number) => {
    if (fetchData) fetchData(page);
  };
  const handlePerRowsChange = async (newPerPage: number, page: number) => {
    if (fetchData) fetchData(page);
    setPerPage(newPerPage);
  };

  useEffect(() => {
    if (fetchData) fetchData(1); // fetch page 1 of users
  }, []);

  return (
    <div {...props}>
      <DataTable
        title=""
        columns={columns}
        data={data ?? []}
        progressPending={loading}
        pagination
        paginationServer
        paginationTotalRows={totalRows}
        onChangeRowsPerPage={handlePerRowsChange}
        onChangePage={handlePageChange}
        progressComponent={<TableLoader />}
        customStyles={customStyles}
        noDataComponent={
          <div className="flex justify-center items-center h-[40vh] w-full bg-secondary-50 rounded-sm">
            <p>No content to display</p>
          </div>
        }
      />
    </div>
  );
};

export default AppTable;
