import { useEffect, useMemo, useRef, useState } from "react";
import {
    useReactTable,
    getCoreRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    getFilteredRowModel,
    flexRender,
} from '@tanstack/react-table';
import "./table.css";
import moment from "moment";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { IconContext } from "react-icons";
import { BsTrash } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";

const DebouncedInput = ({
    value: initialValue,
    onChange,
    debounce = 500,
    ...props
}) => {
    const [value, setValue] = useState(initialValue);
    useEffect(() => {
        setValue(initialValue);
    }, [initialValue]);
    useEffect(() => {
        const timeout = setTimeout(() => {
            onChange(value);
        }, debounce);
        return () => clearTimeout(timeout);
    }, [value]);

    return(
        <input
            {...props}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            />
    )
};

const Filter = ({ column, table }) => {
    const firstValue = table.getPreFilteredRowModel().flatRows[0]?.getValue(column.id);
    const columnFilterValue = column.getFilterValue();
    const sortedUniqueValues = useMemo(
        () => typeof firstValue === "number"
        ? []
        : Array.from(column.getFacetedUniqueValues().keys()).sort(),
        [column.getFacetedUniqueValues()]
        );
    return typeof firstValue === "number" ? (
        <div>
            <div>
                <DebouncedInput 
                    type="number"
                    min={Number(column.getFacetedMinMaxValues()?.[0] ?? "")}
                    max={Number(column.getFacetedMinMaxValues()?.[1] ?? "")}
                    value={columnFilterValue?.[0] ?? ""}
                    onChange={(value) => {
                        column.setFilterValue((old) => [value, old?.[1]])
                    }}
                    placeholder="min"
                    />
                <DebouncedInput 
                    type="number"
                    min={Number(column.getFacetedMinMaxValues()?.[0] ?? "")}
                    max={Number(column.getFacetedMinMaxValues()?.[1] ?? "")}
                    value={columnFilterValue?.[1] ?? ""}
                    onChange={(value) => {
                        column.setFilterValue((old) => [old?.[0], value])
                    }}
                    placeholder="max"
                    />
            </div>
        </div>
    ) : (
        <>
            <datalist id={column.id + "list"}>
                {sortedUniqueValues.slice(0, 5000).map((value) => (
                    <option value={value} key={value} />
                ))}
            </datalist>
            <DebouncedInput
                type="text"
                value={columnFilterValue ?? ""}
                onChange={(value) => column.setFilterValue(value)}
                placeholder={`Search... `}
                list={column.id + "list"}
                />
        </>
    )
}

const IndeterminateCheckbox = ({ indeterminate, ...rest }) => {
    const ref = useRef(null);
    useEffect(() => {
        if(typeof indeterminate === "boolean") {
            ref.current.indeterminate = !rest.checked && indeterminate;
        }
    }, [ref, indeterminate]);
    return <input type="checkbox" ref={ref} {...rest} />;
}

const Table = () => {
    const columns = [
        {
            id: "select",
            header: ({ table }) => (
                <IndeterminateCheckbox
                    {...{
                        checked: table.getIsAllRowsSelected(),
                        indeterminate: table.getIsSomeRowsSelected(),
                        onChange: table.getToggleAllRowsSelectedHandler()
                    }}
                    />
            ),
            cell: ({ row }) => (
                <IndeterminateCheckbox 
                    {...{
                        checked: row.getIsSelected(),
                        disabled: !row.getCanSelect(),
                        indeterminate: row.getIsSomeSelected(),
                        onChange: row.getToggleSelectedHandler()
                    }}
                    />
            )
        },
        {
            accessorKey: "id",
            header: "ID",
        },
        {
            accessorKey: "first_name",
            header: "First Name",
        },
        {
            accessorKey: "last_name",
            header: "Last Name",
        },
        {
            accessorKey: "email",
            header: "Email",
        },
        {
            accessorKey: "date",
            header: "Date",
            cell: ({ getValue }) => moment(new Date(getValue())).format("MMM Do YY")
        },
    ];
    const data = [
        {
            "id": 1,
            "first_name": "Terry",
            "last_name": "Medhurst",
            "email": "atuny0@sohu.com",
            "date": "01/03/2023"
        },
        {
            "id": 2,
            "first_name": "Sheldon",
            "last_name": "Quigley",
            "email": "hbingley1@plala.or.jp",
            "date": "01/03/2023"
        },
        {
            "id": 3,
            "first_name": "Terrill",
            "last_name": "Hills",
            "email": "rshawe2@51.la",
            "date": "01/03/2023"
        },
        {
            "id": 4,
            "first_name": "Miles",
            "last_name": "Cummerata",
            "email": "yraigatt3@nature.com",
            "date": "01/03/2023"
        },
        {
            "id": 5,
            "first_name": "Mavis",
            "last_name": "Schultz",
            "email": "kmeus4@upenn.edu",
            "date": "01/03/2023"
        },
        {
            "id": 6,
            "first_name": "Alison",
            "last_name": "Reichert",
            "email": "jtreleven5@nhs.uk",
            "date": "01/03/2023"
        },
        {
            "id": 7,
            "first_name": "Oleta",
            "last_name": "Abbott",
            "email": "dpettegre6@columbia.edu",
            "date": "01/03/2023"
        },
        {
            "id": 8,
            "first_name": "Ewell",
            "last_name": "Mueller",
            "email": "ggude7@chron.com",
            "date": "01/03/2023"
        },
        {
            "id": 9,
            "first_name": "Demetrius",
            "last_name": "Corkery",
            "email": "nloiterton8@aol.com",
            "date": "01/03/2023"
        },
        {
            "id": 10,
            "first_name": "Eleanora",
            "last_name": "Price",
            "email": "umcgourty9@jalbum.net",
            "date": "01/03/2023"
        },
        {
            "id": 11,
            "first_name": "Terry",
            "last_name": "Medhurst",
            "email": "atuny0@sohu.com",
            "date": "01/03/2023"
        },
        {
            "id": 12,
            "first_name": "Sheldon",
            "last_name": "Quigley",
            "email": "hbingley1@plala.or.jp",
            "date": "01/03/2023"
        },
        {
            "id": 13,
            "first_name": "Terrill",
            "last_name": "Hills",
            "email": "rshawe2@51.la",
            "date": "01/03/2023"
        },
        {
            "id": 14,
            "first_name": "Miles",
            "last_name": "Cummerata",
            "email": "yraigatt3@nature.com",
            "date": "01/03/2023"
        },
        {
            "id": 15,
            "first_name": "Mavis",
            "last_name": "Schultz",
            "email": "kmeus4@upenn.edu",
            "date": "01/03/2023"
        },
        {
            "id": 16,
            "first_name": "Alison",
            "last_name": "Reichert",
            "email": "jtreleven5@nhs.uk",
            "date": "01/03/2023"
        },
        {
            "id": 17,
            "first_name": "Oleta",
            "last_name": "Abbott",
            "email": "dpettegre6@columbia.edu",
            "date": "01/03/2023"
        },
        {
            "id": 18,
            "first_name": "Ewell",
            "last_name": "Mueller",
            "email": "ggude7@chron.com",
            "date": "01/03/2023"
        },
        {
            "id": 19,
            "first_name": "Demetrius",
            "last_name": "Corkery",
            "email": "nloiterton8@aol.com",
            "date": "01/03/2023"
        },
        {
            "id": 20,
            "first_name": "Eleanora",
            "last_name": "Price",
            "email": "umcgourty9@jalbum.net",
            "date": "01/03/2023"
        },
        {
            "id": 21,
            "first_name": "Terry",
            "last_name": "Medhurst",
            "email": "atuny0@sohu.com",
            "date": "01/03/2023"
        },
        {
            "id": 22,
            "first_name": "Sheldon",
            "last_name": "Quigley",
            "email": "hbingley1@plala.or.jp",
            "date": "01/03/2023"
        },
        {
            "id": 23,
            "first_name": "Terrill",
            "last_name": "Hills",
            "email": "rshawe2@51.la",
            "date": "01/03/2023"
        },
        {
            "id": 24,
            "first_name": "Miles",
            "last_name": "Cummerata",
            "email": "yraigatt3@nature.com",
            "date": "01/03/2023"
        },
        {
            "id": 25,
            "first_name": "Mavis",
            "last_name": "Schultz",
            "email": "kmeus4@upenn.edu",
            "date": "01/03/2023"
        },
        {
            "id": 26,
            "first_name": "Alison",
            "last_name": "Reichert",
            "email": "jtreleven5@nhs.uk",
            "date": "01/03/2023"
        },
        {
            "id": 27,
            "first_name": "Oleta",
            "last_name": "Abbott",
            "email": "dpettegre6@columbia.edu",
            "date": "01/03/2023"
        },
        {
            "id": 28,
            "first_name": "Ewell",
            "last_name": "Mueller",
            "email": "ggude7@chron.com",
            "date": "01/03/2023"
        },
        {
            "id": 29,
            "first_name": "Demetrius",
            "last_name": "Corkery",
            "email": "nloiterton8@aol.com",
            "date": "01/03/2023"
        },
        {
            "id": 30,
            "first_name": "Eleanora",
            "last_name": "Price",
            "email": "umcgourty9@jalbum.net",
            "date": "01/03/2023"
        },
        {
            "id": 31,
            "first_name": "Terry",
            "last_name": "Medhurst",
            "email": "atuny0@sohu.com",
            "date": "01/03/2023"
        },
        {
            "id": 32,
            "first_name": "Sheldon",
            "last_name": "Quigley",
            "email": "hbingley1@plala.or.jp",
            "date": "01/03/2023"
        },
        {
            "id": 33,
            "first_name": "Terrill",
            "last_name": "Hills",
            "email": "rshawe2@51.la",
            "date": "01/03/2023"
        },
        {
            "id": 34,
            "first_name": "Miles",
            "last_name": "Cummerata",
            "email": "yraigatt3@nature.com",
            "date": "01/03/2023"
        },
        {
            "id": 35,
            "first_name": "Mavis",
            "last_name": "Schultz",
            "email": "kmeus4@upenn.edu",
            "date": "01/03/2023"
        },
        {
            "id": 36,
            "first_name": "Alison",
            "last_name": "Reichert",
            "email": "jtreleven5@nhs.uk",
            "date": "01/03/2023"
        },
        {
            "id": 37,
            "first_name": "Oleta",
            "last_name": "Abbott",
            "email": "dpettegre6@columbia.edu",
            "date": "01/03/2023"
        },
        {
            "id": 38,
            "first_name": "Ewell",
            "last_name": "Mueller",
            "email": "ggude7@chron.com",
            "date": "01/03/2023"
        },
        {
            "id": 39,
            "first_name": "Demetrius",
            "last_name": "Corkery",
            "email": "nloiterton8@aol.com",
            "date": "01/03/2023"
        },
        {
            "id": 40,
            "first_name": "Eleanora",
            "last_name": "Price",
            "email": "umcgourty9@jalbum.net",
            "date": "01/03/2023"
        },
    ];
    const [columnVisibility, setColumnVisibility] = useState({});
    const [rowSelection, setRowSelection] = useState({});
    const [sorting, setSorting] = useState();
    const [filtering, setFiltering] = useState();
    const [columnOrder, setColumnOrder] = useState([]);
    const [columnFilters, setColumnFilters] = useState([]);
    const finalData = useMemo(() => data, []);
    const finalColumnDef = useMemo(() => columns, [])
    const tableInstance = useReactTable({
        columns: finalColumnDef,
        data: finalData,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            rowSelection,
            columnFilters,
            columnOrder,
            columnVisibility,
            globalFilter: filtering,
            sorting
        },
        onGlobalFilterChange: setFiltering,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        onColumnOrderChange: setColumnOrder,
        onColumnVisibility: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        enableRowSelection: true,
    });

    return(
        <>
            {/* <div>
                <label>
                    <input 
                        {...{
                            type: "checkbox",
                            checked: tableInstance.getIsAllColumnsVisible(),
                            onChange: tableInstance.getToggleAllColumnsVisibilityHandler(),
                        }}
                        />
                        {" "}
                        Toggle All
                </label>
                <hr />
                {tableInstance.getAllLeafColumns().map((column) => {
                    return (
                        <div key={column.id}>
                            <label>
                                <input 
                                    {...{
                                        type: "checkbox",
                                        checked: column.getIsVisible(),
                                        onChange: column.getToggleVisibilityHandler(),
                                    }}
                                    />
                                    {" "}
                                    {column.id}
                            </label>
                        </div>
                    )
                })}
            </div> */}
            {/* <button onClick={() => {setColumnOrder(["date", "email"])}}>change order</button> */}
            {/* <hr /> */}
            <div>
            <button>
                <BsTrash />
            </button>
            <input
                style={{ width: "300px", float: "right", marginTop: "3px"}}
                type="text"
                value={filtering}
                onChange={ e => setFiltering(e.target.value)}
                placeholder="search ..."
                />
                <AiOutlineSearch />
            {/* <hr /> */}
            <table>
                <thead>
                    {tableInstance.getHeaderGroups().map((headerEl) => {
                        return (
                            <tr key={headerEl.id}>
                                {headerEl.headers.map((columnEl) => {
                                    return (
                                        <th
                                            key={columnEl.id}
                                            colSpan={columnEl.colSpan}
                                            onClick={columnEl.column.getToggleSortingHandler()}
                                            >
                                            <>
                                                {flexRender(
                                                    columnEl.column.columnDef.header,
                                                    columnEl.getContext()
                                                )}
                                                {columnEl.column.getCanFilter() ? (
                                                    <div>
                                                        <Filter
                                                            column={columnEl.column}
                                                            table={tableInstance}
                                                            />
                                                    </div>
                                                ) : null}
                                                {
                                                    { 
                                                        asc:
                                                            <IconContext.Provider value={{ style: { marginLeft: "50px"} }}>
                                                                <IoIosArrowUp />
                                                            </IconContext.Provider> 
                                                        ,
                                                        desc:
                                                            <IconContext.Provider value={{ style: { marginLeft: "50px"} }}>
                                                                <IoIosArrowDown />
                                                            </IconContext.Provider>
                                                        }[
                                                        columnEl.column.getIsSorted() ?? null
                                                    ]
                                                }
                                            </>
                                        </th>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </thead>
                <tbody>
                    {
                        tableInstance.getRowModel().rows.map((rowEl) => {
                            return (
                                <tr key={rowEl.id}>
                                    {rowEl.getVisibleCells().map((cellEl) => {
                                        return (
                                            <td key={cellEl.id}>
                                                {flexRender(
                                                    cellEl.column.columnDef.cell,
                                                    cellEl.getContext(),
                                                )}
                                            </td>
                                        );
                                    })}
                                </tr>
                            );
                        })
                    }
                </tbody>
                <tfoot>
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
            <div>
                <button
                    onClick={() => tableInstance.setPageIndex(0)}
                    disabled={!tableInstance.getCanPreviousPage()}>
                        {"<<"}
                </button>
                <button
                    onClick={() => tableInstance.previousPage()}
                    disabled={!tableInstance.getCanPreviousPage()}>
                    Previous Page
                </button>
                <button
                    onClick={() => tableInstance.nextPage()}
                    disabled={!tableInstance.getCanNextPage()}>
                        Next Page
                </button>
                <button
                    onClick={() => tableInstance.setPageIndex(tableInstance.getPageCount() - 1)}
                    disabled={!tableInstance.getCanNextPage()}>
                        {">>"}
                </button>
                <select
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
            <hr />
            {/* <ul>
                <li>
                    You are on page number: {" "}
                    {tableInstance.options.pageCount}
                </li>
                <li>Total pages: {tableInstance.getPageCount() - 1}</li>
            </ul>
            <hr /> */}
            {/* <input
                type="number"
                defaultValue={tableInstance.options.state.pagination?.pageIndex}
                onChange={ (e) => tableInstance.setPageIndex(e.target.value) }
                />
            <hr /> */}


            {/* <hr /> */}
            {/* <div>
                {tableInstance.getSelectedRowModel().flatRows.map((el) => {
                    return <li key={el.id}>{JSON.stringify(el.original)}</li>
                })}
            </div> */}
            </div>
        </>
    );
};

export default Table;
