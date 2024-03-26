import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import ShimmerEffect from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import useData from "../utils/useData";

const Body = () => {
  const { allRestaurants, filteredRestaurants, setFilteredRestaurants } =
    useData();

  const [searchInput, setSearchInput] = useState("");

  const online = useOnline();
  if (!online) {
    return <h1>Offline, Please check your Internet connection.</h1>;
  }

  return allRestaurants?.length == 0 ? (
    <>
      <ShimmerEffect />
      <ShimmerEffect />
      <ShimmerEffect />
    </>
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            //need to filter data
            const data = filterData(searchInput, allRestaurants);
            // update the state - restaurants
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <RestaurantCard {...restaurant.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
