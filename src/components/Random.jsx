import React from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const Random = () => {
  const { gif, loading, fetchData } = useGif();

  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-yellow-400 to-yellow-500 shadow-lg md:w-1/2 w-11/12 rounded-lg border border-gray-300 gap-y-6 mt-5 mx-auto p-6 transform transition-all hover:scale-105">
      <h2 className="uppercase font-extrabold text-3xl text-gray-800 underline tracking-wide">
        A Random Gif
      </h2>
      {loading ? (
        <Spinner />
      ) : (
        <img
          src={gif}
          alt="Random Gif"
          className="w-[450px] h-auto rounded-md shadow-md"
        />
      )}
      <button
        onClick={fetchData}
        className="uppercase bg-white hover:bg-gray-100 text-gray-800 font-medium w-10/12 py-3 rounded-lg shadow-sm text-lg tracking-wide transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
