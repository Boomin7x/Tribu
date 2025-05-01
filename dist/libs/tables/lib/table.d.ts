import { TableColumn } from 'react-data-table-component';
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
export declare const AppTable: <T>({ tableData, fetchData, columns, loading, onView, onEdit, onDelete, onRowClicked, onRowMouseEnter, ...props }: AppTableProps<T>) => import("react/jsx-runtime").JSX.Element;
export default AppTable;
