import React, { useMemo } from 'react';
import { useTable, useSortBy } from 'react-table';
import DATA from './db/data';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsSortDownAlt, BsSortUpAlt } from 'react-icons/bs';
// import SCORE from './db/DATA_BODY.json';
// import { COLUMNS } from './db/column';

export default function table() {
  const columns = useMemo(() => DATA.headColumn, []);
  const data = useMemo(() => DATA.listOne, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy
  );
  return (
    <div className="container mx-auto">
      <div className="flex content-center mb-1 justify-end">
        <input
          className="bg-white text-gray-700 border border-solid border-gray-300 rounded-l px-4 py-2 font-semibold"
          placeholder="Search"
        />
        <button
          type="submit"
          className="bg-amber-700 hover:bg-amber-800 active:bg-amber-900 rounded-r"
        >
          <AiOutlineSearch size={40} color="white" />
        </button>
      </div>
      <table {...getTableProps()} className="container ">
        <thead className="bg-amber-900">
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
          {rows.map((row, key) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className={
                  key % 2 == 0
                    ? 'bg-amber-200 hover:bg-gray-300'
                    : 'bg-amber-100 hover:bg-gray-300'
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
        <tfoot className="bg-amber-900 text-white">
          {footerGroups.map((footerGroup) => (
            <tr {...footerGroup.getFooterGroupProps()}>
              {footerGroup.headers.map((column) => (
                <td {...column.getFooterProps()}>{column.render('Footer')}</td>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </div>
  );
}
