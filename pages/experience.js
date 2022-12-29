import React from 'react';

function experience() {
  const data = [
    {
      job: 'PT. Idar buana (textil)',
      date: '2015-2017',
      years: '2 Years',
    },
    {
      job: 'Rastekid (Kerja Praktek)',
      date: '2021-2021',
      years: '3 Month',
    },
  ];
  return (
    <div className="card p-4">
      <h1 className="font-bold text-amber-900 uppercase">experience</h1>
      <ul>
        {data.map((cel, key) => {
          return (
            <li className="text-amber-700 hover:text-amber-900" key={key}>
              {cel.job} | {cel.date} ( {cel.years})
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default experience;
