import React from 'react';

function experience() {
  const data = [
    {
      job: 'PT. Idar buana (textil)',
      years: '2',
    },
  ];
  return (
    <div className="card p-4">
      <h1 className="font-bold text-amber-900 uppercase">experience</h1>
      <ul>
        {data.map((cel, key) => {
          return (
            <li
              className="text-amber-700 hover:font-bold hover:text-amber-900"
              key={key}
            >
              {cel.job} ( {cel.years} Years)
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default experience;
