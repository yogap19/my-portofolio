import React, { useMemo, useState } from 'react';
import data from './db/data';

export default function scoreList() {
  const array = ['1', '2', '3', '4', '5'];
  console.log(data);
  return (
    <div className="flex justify-evenly">
      <table className="w-[40rem]">
        <thead className="bg-amber-800">
          <tr>
            <th>No</th>
            <th>Subject</th>
            <th>SKS</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {data.listOne.map((val, key) => {
            return (
              <tr
                key={key}
                className={
                  val.id % 2 == 0
                    ? 'bg-amber-300 hover:bg-gray-400'
                    : 'bg-amber-200 hover:bg-gray-400'
                }
              >
                <td>{val.id}</td>
                <td className="text-left">{val.subject}</td>
                <td>{val.sks}</td>
                <td>{val.grade}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <table className="w-[40rem]">
        <thead className="bg-amber-800">
          <tr>
            <th>No</th>
            <th>Subject</th>
            <th>SKS</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {data.listTwo.map((val, key) => {
            return (
              <tr
                key={key}
                className={
                  val.id % 2 == 0
                    ? 'bg-amber-300 hover:bg-gray-400'
                    : 'bg-amber-200 hover:bg-gray-400'
                }
              >
                <td>{val.id}</td>
                <td className="text-left">{val.subject}</td>
                <td>{val.sks}</td>
                <td>{val.grade}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
