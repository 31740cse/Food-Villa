import { useState, useEffect } from "react";
import { SWIGGY_RESTAURANT_CDN_URL } from "../config";
import { restaurantList } from "../config";

const useRestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [actualData, setActualData] = useState([]);
  const [crouselCards, setCrouselCards] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  async function getRestaurants() {
    setIsLoaded(false);
    try {
      // const data = await fetch(SWIGGY_RESTAURANT_CDN_URL);
      // const json = await data.json();
      console.log("from useRest : ", restaurantList);
      setIsLoaded(false);
      setRestaurants(restaurantList);
      setIsLoaded(true);
      setCrouselCards(json?.data?.cards[0]?.data?.data?.cards);
      // setIsLoaded(true);
      setActualData(json?.data?.cards[2]?.data?.data?.cards);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getRestaurants();
  }, []);

  return [restaurants, actualData, crouselCards, isLoaded, setRestaurants];
};
export default useRestaurantList;
