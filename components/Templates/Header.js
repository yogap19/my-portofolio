import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <header className="bg-amber-800 shadow-md shadow-amber-500 flex justify-between">
      <ul className="flex bg-amber-800 px-2 sm:px-6 lg:px-8 py-2">
        <li>
          <button>Profile</button>
        </li>
        <li>
          <button>Score List</button>
        </li>
        <li>
          <button>Address</button>
        </li>
      </ul>
      <h3 className="px-2 sm:px-6 lg:px-8 py-2 text-white font-bold">icon</h3>
    </header>
  );
}
