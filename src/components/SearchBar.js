import React, { useContext, useState } from "react";
import { ImageContext } from "../App";

const SearchBar = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  const { fetchData, setSearchImage } = useContext(ImageContext);

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };
  const handleButtonSearch = () => {
    fetchData(
      `search/photos?page=1&query=${searchValue}&client_id=${process.env.REACT_APP_ACCESS_KEY}`
    );
    setSearchValue("");
    setSearchImage(searchValue);
  };
  const handleEnterSearch = (e) => {
    if (e.key === "Enter") {
      fetchData(
        `search/photos?page=1&query=${searchValue}&client_id=${process.env.REACT_APP_ACCESS_KEY}`
      );
      setSearchValue("");
      setSearchImage(searchValue);
    }
  };

  return (
    <div className="flex">
      <input
        className="w-full p-2.5 mr-3 outline-none text-sm"
        type="search"
        placeholder="Search Anything..."
        value={searchValue}
        onChange={handleInputChange}
        onKeyDown={handleEnterSearch}
      />
      <button
        className="px-3 cursor-pointer"
        onClick={handleButtonSearch}
        disabled={!searchValue}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
