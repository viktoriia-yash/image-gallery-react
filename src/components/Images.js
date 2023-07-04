import React, { useContext } from "react";
import { ImageContext } from "../App";
import Image from "./Image";
import Skeleton from "./Skeleton";

const Images = () => {
  const { response, isLoading, searchImage } = useContext(ImageContext);

  return (
    <>
      <h2 className="text-center text-md">
        Results for {searchImage || "Green"}
      </h2>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-10 px-3 pb-3">
        {isLoading ? (
          <Skeleton item={10} />
        ) : (
          response.map((data, key) => <Image key={key} data={data} />)
        )}
      </div>
    </>
  );
};

export default Images;
