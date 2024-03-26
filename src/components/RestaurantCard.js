import { IMG_CDN } from "../config";

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  avgRatingString,
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h5>Rating: {avgRatingString}</h5>
    </div>
  );
};

export default RestaurantCard;
