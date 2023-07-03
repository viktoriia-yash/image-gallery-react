import { createContext } from "react";
import useAxios from "./hooks/useAxios";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Images from "./components/Images";

export const ImageContext = createContext();

function App() {
  const { response, isLoading, error, fetchData } = useAxios(
    `search/photos?page=1&query=cats&client_id=${process.env.REACT_APP_ACCESS_KEY}`
  );
  console.log(response);

  const value = {
    response,
    isLoading,
    error,
    fetchData,
  };

  return (
    <ImageContext.Provider value={value}>
      <Header>
        <SearchBar />
      </Header>
      <Images />
    </ImageContext.Provider>
  );
}

export default App;
