import React, { useMemo } from 'react';
import DATA from './db/data';

function cv() {
  const data = useMemo(() => DATA.listSchool);
  return (
    <div className="card p-4">
      <h1 className="font-bold text-amber-900 uppercase">education</h1>
      <ul>
        {data.map((cel, key) => {
          return (
            <li
              className="text-amber-700 hover:font-bold hover:text-amber-900"
              key={key}
            >
              {cel.school} ( {cel.years} )
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default cv;
