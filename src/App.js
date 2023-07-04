import { createContext, useState } from "react";
import Images from "./components/Images";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import useAxios from "./hooks/useAxios";

export const ImageContext = createContext();

function App() {
  const [searchImage, setSearchImage] = useState("Green");

  const apiKey = `qn2LsI-bJTEnx44LucSPsyHE_O2k0Ry54OkdsHZEtNE`;
  const { response, isLoading, error, fetchData } = useAxios(
    `search/photos?page=1&query=${searchImage}&client_id=${apiKey}`
  );

  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage,
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
