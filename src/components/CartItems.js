import { IMG_CDN } from "../config";

const CartItems = ({ name, cloudinaryImageId }) => {
  return (
    <div className="card">
      <img src={IMG_CDN + cloudinaryImageId} />
      <h3>{name}</h3>
    </div>
  );
};

export default CartItems;
