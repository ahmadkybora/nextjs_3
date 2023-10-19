import {
    flexRender,
    useReactTable,
    getCoreRowModel,
    getPaginationRowModel
} from '@tanstack/react-table';
import { useMemo } from 'react';

const Table = ({data, columns}) => {

    const finalData = useMemo(() => data, []);
    const finalColumnDef = useMemo(() => columns, [])
    const tableInstance = useReactTable({
        columns: finalColumnDef,
        data: finalData,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    });
    return(
        <>
            <div className="relative overflow-x-auto shadow-lg sm:rounded-lg m-2">
                <table className="w-full text-center text-sm text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        {tableInstance.getHeaderGroups().map((headerEl) => {
                            return(
                                <tr key={headerEl.id}>
                                    {headerEl.headers.map((columnEl) => {
                                        return(
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                                key={columnEl.id}
                                                colSpan={columnEl.colSpan}
                                                >
                                                    <>
                                                    {flexRender(
                                                        columnEl.column.columnDef.header,
                                                        columnEl.getContext()
                                                    )}
                                                    </>
                                            </th>
                                        )
                                    })}
                                </tr>
                            )
                        })}
                    </thead>
                    <tbody>
                            {tableInstance.getRowModel().rows.map((rowEl) => {
                                return (
                                    <tr className="border-b border-gray-200 dark:border-gray-700" key={rowEl.id}>
                                        {rowEl.getVisibleCells().map((cellEl) => {
                                            return (
                                                <td className="border-solid border-1 p-1 text-center bg-white" key={cellEl.id}>
                                                    {flexRender(
                                                        cellEl.column.columnDef.cell,
                                                        cellEl.getContext(),
                                                    )}
                                                </td>
                                            );
                                        })}
                                    </tr>
                                );
                            })}
                    </tbody>
                    <tfoot className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-900 dark:text-gray-400">
                        {tableInstance.getHeaderGroups().map((headerEl) => {
                            return (
                                <tr key={headerEl.id}>
                                    {headerEl.headers.map((columnEl) => {
                                        return (
                                            <th key={columnEl.id} colSpan={columnEl.colSpan}>
                                                {flexRender(
                                                    columnEl.column.columnDef.header,
                                                    columnEl.getContext()
                                                )}
                                            </th>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </tfoot>
                </table>
                <hr />
                <div className="inline-flex mt-2 xs:mt-0">
                    <button
                        onClick={() => tableInstance.previousPage()}
                        disabled={!tableInstance.getCanPreviousPage()}
                        className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        Prev
                    </button>
                    <button
                        onClick={() => tableInstance.nextPage()}
                        disabled={!tableInstance.getCanNextPage()}
                        className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        Next
                    </button>
                    <select
                        className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        value={tableInstance.options.state.pagination?.pageSize}
                        onChange={(e) => tableInstance.setPageSize(e.target.value)}>
                            {[10, 25, 50].map((pageSizeEl) => {
                                return (
                                    <option
                                        key={pageSizeEl}
                                        value={pageSizeEl}>
                                            {pageSizeEl}
                                    </option>
                                    )
                            })}
                    </select>
                    Page {tableInstance.options.state.pagination?.pageIndex + 1} of {tableInstance.getPageCount()}
                </div>
            </div>
        </>
    );
};

export default Table;
