import React, { useContext } from "react";
import MyContext from "../../context/data/MyContext";

function Filter() {
  const context = useContext(MyContext);
  const {
    mode,
    searchkey,
    setSearchkey,
    filterType,
    setFilterType,
    filterPrice,
    setFilterPrice,
    product,
  } = context;
  return (
    <div className="container mx-auto px-4 py-4">
      <div
        className="m-4 p-5 bg-gray-100 rounded-lg drop-shadow-xl"
        style={{
          backgroundColor: mode === "dark" ? "#282c34" : "",
          color: mode === "dark" ? "white" : "",
        }}>
        <div className="relative m-2">
          <div className="absolute flex items-center ml-2 h-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>

          <input
            type="text"
            name="searchkey"
            value={searchkey}
            onChange={(e) => setSearchkey(e.target.value)}
            id="searchkey"
            className="px-8 py-4 w-full rounded-md bg-violet-100 border-transparent outline-0 text-sm"
            style={{
              backgroundColor: mode === "dark" ? "rgb(64 66 70)" : "",
              color: mode === "dark" ? "white" : "",
            }}
            placeholder="Search here"></input>
        </div>

        {/*  */}

        <div className="flex items-center justify-between mt-4">
          <p className="font-medium">Filters</p>
          <button
            className="px-4 py-2 bg-gray-50 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md"
            style={{
              backgroundColor: mode === "dark" ? "rgb(64 66 70)" : "",
              color: mode === "dark" ? "white" : "",
            }}>
            Reset Filter
          </button>
        </div>

        {/*  */}

        <div>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
            <select
              className="px-4 py-3 w-full rounded-md bg-gray-50 border-transparent outline-0 focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              style={{
                backgroundColor: mode === "dark" ? "rgb(64 66 70)" : "",
                color: mode === "dark" ? "white" : "",
              }}>
              {product.map((item, index) => {
                return <option value={item.category}>{item.category}</option>;
              })}
            </select>
            <select
              className="px-4 py-3 w-full rounded-md bg-gray-50 border-transparent outline-0  focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
              value={filterPrice}
              onChange={(e) => setFilterPrice(e.target.value)}
              style={{
                backgroundColor: mode === "dark" ? "rgb(64 66 70)" : "",
                color: mode === "dark" ? "white" : "",
              }}>
              {product.map((item, index) => {
                return <option value={item.price}>{item.price}</option>;
              })}
            </select>
          </div>
        </div>

        {/*  */}
      </div>
    </div>
  );
}

export default Filter;
