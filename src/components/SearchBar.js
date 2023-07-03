import React from "react";

const SearchBar = () => {
  return (
    <div className="flex">
      <label for="site-search">Search the site:</label>
      <input
        className="bg-gray-50 border border-gray-300 text-sm w-full indent-2 p-2.5 outline-none focus:border-blue-500 focus:ring-2 rounded-tl rounded-bl"
        type="search"
        placeholder="Search Anything..."
      />
      <button className="bg-blue-600 px-6 py-2.5 text-white rounded-tr rounded-br focus:ring-2 focus:ring-blue-300 disabled-bg-gray-400">
        Search
      </button>
    </div>
  );
};

export default SearchBar;