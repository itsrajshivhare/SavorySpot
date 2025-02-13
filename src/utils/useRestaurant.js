import React, { useEffect, useState } from "react";
import { FETCH_MENU_URL } from "../config";

const useRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU_URL + id);
    const json = await data.json();
    // console.log(json);
    setRestaurant(json.data);
  }

  // return restaurant data
  return restaurant;
};

export default useRestaurant;
