import { useState, useEffect } from 'react';
import DataTable, {
  TableColumn,
  TableStyles,
} from 'react-data-table-component';
import TableLoader from './table_loader';
import { GoTrash } from 'react-icons/go';
import { VscEye } from 'react-icons/vsc';
import { BiSolidEdit } from 'react-icons/bi';

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
      backgroundColor: '#FAF5FF',
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
  onRowClicked?: (row: T) => void;
  onEdit?: (row: T) => void;
  onDelete?: (row: T) => void;
  onView?: (row: T) => void;
  fetchData?: (page: number) => void;
  onRowMouseEnter?: ((row: T, e: React.MouseEvent) => void) | undefined;
}
export const AppTable = <T,>({
  tableData,
  fetchData,
  columns,
  loading,
  onView,
  onEdit,
  onDelete,
  onRowClicked,
  onRowMouseEnter,
  ...props
}: AppTableProps<T>) => {
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
        columns={[
          {
            name: 'Index',
            selector: (_, index) => `${index ?? 0 + 1}`,
          },
          ...columns,
          {
            name: 'Actions',
            cell: (row) => (
              <div className="flex gap-1 ">
                <VscEye
                  onClick={() => onView && onView(row)}
                  size={35}
                  className="hover:text-secondary-500 hover:bg-secondary-50 rounded-full p-2 cursor-pointer"
                />
                <BiSolidEdit
                  onClick={() => onEdit && onEdit(row)}
                  size={35}
                  className="hover:text-red-500 hover:bg-red-50 rounded-full p-2 cursor-pointer"
                />
                <GoTrash
                  onClick={() => onDelete && onDelete(row)}
                  size={35}
                  className="hover:text-red-500 hover:bg-red-50 rounded-full p-2 cursor-pointer"
                />
              </div>
            ),
          },
        ]}
        data={tableData ?? []}
        progressPending={loading}
        pagination
        onRowClicked={onRowClicked}
        onRowMouseEnter={onRowMouseEnter}
        paginationServer
        paginationTotalRows={totalRows}
        onChangeRowsPerPage={handlePerRowsChange}
        onChangePage={handlePageChange}
        progressComponent={<TableLoader />}
        customStyles={customStyles}
        paginationComponentOptions={{
          rowsPerPageText: 'Rows per page',
          rangeSeparatorText: 'of',
          selectAllRowsItem: true,
          selectAllRowsItemText: 'All',
        }}
        noDataComponent={
          <div className="flex justify-center items-center h-[40vh] w-full bg-secondary-50 rounded-sm">
            <p>No data to display</p>
          </div>
        }
      />
    </div>
  );
};

export default AppTable;
