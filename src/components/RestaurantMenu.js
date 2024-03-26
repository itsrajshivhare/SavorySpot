import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN } from "../config";
import ShimmerEffect from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantMenu = () => {
  const { id } = useParams();
  const restaurant = useRestaurant(id);

  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  return !restaurant ? (
    <ShimmerEffect />
  ) : (
    <>
      <div className="restaurant-info">
        <img
          src={
            IMG_CDN + restaurant?.cards[0]?.card?.card?.info?.cloudinaryImageId
          }
        />
        <h1>{restaurant?.cards[0]?.card?.card?.info?.name}</h1>
        <h3>{restaurant?.cards[0]?.card?.card?.info.areaName}</h3>
        <h3>{restaurant?.cards[0]?.card?.card?.info.city}</h3>
        <h3>{restaurant?.cards[0]?.card?.card?.info.costForTwoMessage}</h3>
        <span>{restaurant?.cards[0]?.card?.card?.info?.avgRating}⭐</span>
      </div>

      <div className="restaurant-menu">
        <h1>Menu</h1>
        <ul>
          {Object.values(
            restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
          ).map((Cards) => (
            <ul>
              {Cards?.card?.card?.itemCards?.map((itemCards) => (
                <li key={itemCards?.card?.info.id}>
                  <h3>
                    {itemCards?.card?.info.name} -{" "}
                    <button onClick={() => addFoodItem(itemCards?.card?.info)}>
                      Add
                    </button>
                  </h3>
                </li>
              ))}
            </ul>
          ))}
        </ul>
      </div>
    </>
  );
};

export default RestaurantMenu;
