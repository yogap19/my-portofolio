import React, { useMemo } from 'react';
import { useTable } from 'react-table';
// import DATA from './db/data';
import SCORE from './db/DATA_BODY.json';
import { COLUMNS } from './db/column';

export default function table() {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => SCORE, []);

  const tableInstance = useTable({
    columns,
    data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;
  return (
    <table {...getTableProps()} className="container mx-auto">
      <thead className="bg-amber-900">
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
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
        <tr>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
}
