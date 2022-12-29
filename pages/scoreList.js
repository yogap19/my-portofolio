import React, { useMemo, useRef } from 'react';
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  useFilters,
  usePagination,
} from 'react-table';
import DATA from './db/data';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsSortDownAlt, BsSortUpAlt } from 'react-icons/bs';
import GlobalFilter from './globalFilter';
// import SCORE from './db/DATA_BODY.json';
// import { COLUMNS } from './db/column';

export default function table() {
  const columns = useMemo(() => DATA.headColumn, []);
  const data = useMemo(() => DATA.listOne, []);

  const scoreRef = useRef();
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    prepareRow,
    gotoPage,
    pageCount,
    setPageSize,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );
  const { globalFilter, pageIndex, pageSize } = state;
  return (
    <div className="container mx-auto">
      {/* <div className="flex content-center mb-1 justify-end">
        <input
          className="bg-white text-amber-800 border border-amber-900 focus:outline-none focus:ring-0 focus:ring-amber-900 rounded-l px-4 py-2 font-semibold"
          placeholder="Search"
          id="search"
          onChange={(e) => setGlobalFilter(e.target.value)}
        />
        <button
          type="submit"
          id="search"
          className="bg-amber-700 hover:bg-amber-800 active:bg-amber-900 rounded-r"
        >
          <AiOutlineSearch size={40} color="white" />
        </button>
      </div> */}
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <table
        {...getTableProps()}
        className="container  border-amber-700 shadow-sm shadow-amber-400"
        ref={scoreRef}
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  <div className="flex justify-center px-2 py-1">
                    {column.render('Header')}
                    <span className="pt-1">
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <BsSortUpAlt className="mx-2" />
                        ) : (
                          <BsSortDownAlt className="mx-2" />
                        )
                      ) : (
                        ''
                      )}
                    </span>
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, key) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className={
                  key % 2 == 0
                    ? 'bg-amber-100 hover:bg-gray-300'
                    : 'bg-amber-50 hover:bg-gray-300'
                }
              >
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      className={
                        cell.column.Header == 'Subject' ? 'text-left' : ''
                      }
                    >
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
        {/* <tfoot className="bg-amber-900 text-white">
            {footerGroups.map((footerGroup) => (
              <tr {...footerGroup.getFooterGroupProps()}>
                {footerGroup.headers.map((column) => (
                  <td {...column.getFooterProps()}>{column.render('Footer')}</td>
                ))}
              </tr>
            ))}
          </tfoot> */}
      </table>
      <div className="flex justify-center mt-1 text-[14px]">
        <span className="mt-1 mr-2">
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>
        <span>
          | Go to page :{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const pageNumber = e.target.value
                ? Number(e.target.value) - 1
                : 0;
              gotoPage(pageNumber);
            }}
            min={1}
            max={pageCount}
            className="w-[50px] pl-1 mt-1 mr-1 rounded-sm outline outline-1 outline-amber-700 focus:outline-amber-400"
          />
        </span>
        <select
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
          className="rounded-sm outline outline-1 outline-amber-700 focus:outline-amber-400 mr-1 h-fit mt-1"
        >
          {[5, 10, 25, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
        <button
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
          className={
            canPreviousPage
              ? 'button-primary rounded-l'
              : 'button-disable rounded-l'
          }
        >
          {'<<'}
        </button>
        <button
          className={canPreviousPage ? 'button-primary' : 'button-disable'}
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          Prev
        </button>
        <button
          className={canNextPage ? 'button-primary' : 'button-disable'}
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          Next
        </button>
        <button
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
          className={
            canNextPage
              ? 'button-primary rounded-r'
              : 'button-disable rounded-r'
          }
        >
          {'>>'}
        </button>
      </div>
    </div>
  );
}
