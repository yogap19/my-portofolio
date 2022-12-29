import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
function globalFilter({ filter, setFilter }) {
  return (
    <div className="flex content-center mb-1 justify-end">
      <div className="text-white font-semibold rounded-l uppercase flex content-center pt-2 px-4 bg-amber-700">
        Search :
      </div>
      <input
        className="bg-white uppercase text-amber-800 border border-amber-900 focus:outline-none focus:ring-0 focus:ring-amber-900 px-4 py-2 font-semibold"
        placeholder="Search"
        value={filter || ''}
        onChange={(e) => setFilter(e.target.value)}
      />
      <button
        type="submit"
        id="search"
        className="bg-amber-700 hover:bg-amber-800 active:bg-amber-900 rounded-r"
      >
        <AiOutlineSearch size={40} color="white" />
      </button>
    </div>
  );
}

export default globalFilter;
