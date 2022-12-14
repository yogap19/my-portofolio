import Link from 'next/link';
import React, { useEffect, useRef } from 'react';

export default function Header() {
  return (
    <header className="bg-amber-800 shadow-md shadow-amber-500 flex justify-between">
      <ul className="flex bg-amber-800 px-2 sm:px-6 lg:px-8 py-2">
        <li>
          <Link href="/">Profile</Link>
        </li>
        <li>
          <Link href="/">Score List</Link>
        </li>
        <li>
          <Link href="/">Address</Link>
        </li>
      </ul>
      <h3 className="px-2 sm:px-6 lg:px-8 py-2 text-white font-bold">icon</h3>
    </header>
  );
}
