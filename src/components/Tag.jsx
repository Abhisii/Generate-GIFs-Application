import React, { useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const Tag = () => {
  const [tag, setTag] = useState("Doremon");
  const { loading, gif, fetchData } = useGif(tag);

  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-blue-700 to-blue-900 shadow-lg md:w-1/2 w-11/12 rounded-lg border border-blue-700 gap-y-6 mt-5 mx-auto p-6 transform transition-all hover:scale-105">
      <h2 className="uppercase font-extrabold text-3xl text-white underline tracking-wide">
        Random {tag} Gif
      </h2>
      {loading ? (
        <Spinner />
      ) : (
        <img
          src={gif}
          alt={`${tag} gif`}
          className="w-[450px] h-auto rounded-md shadow-md"
        />
      )}

      <div className="flex flex-col items-center gap-y-4 w-full">
        <input
          type="text"
          value={tag}
          onChange={(event) => setTag(event.target.value)}
          className="uppercase bg-white focus:bg-gray-100 w-9/12 rounded-lg font-medium py-2 px-3 text-lg text-center shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
          placeholder="Enter a tag"
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              fetchData(tag);
            }
          }}
        />

        <button
          onClick={() => fetchData(tag)}
          className="uppercase bg-white hover:bg-gray-200 text-blue-900 font-semibold w-10/12 py-3 rounded-lg shadow-lg text-lg tracking-wide transition-all hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Generate
        </button>
      </div>
    </div>
  );
};

export default Tag;
