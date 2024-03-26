import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ShimmerEffect = () => {
  return (
    <>
      <div className="restaurant-list">
        <div className="card">
          <Skeleton width={200} height={140} />
          <h3>
            <Skeleton />
          </h3>
          <h4>
            <Skeleton />
          </h4>
          <h4>
            <Skeleton />
          </h4>
        </div>
        <div className="card">
          <Skeleton width={200} height={140} />
          <h3>
            <Skeleton />
          </h3>
          <h4>
            <Skeleton />
          </h4>
          <h4>
            <Skeleton />
          </h4>
        </div>
        <div className="card">
          <Skeleton width={200} height={140} />
          <h3>
            <Skeleton />
          </h3>
          <h4>
            <Skeleton />
          </h4>
          <h4>
            <Skeleton />
          </h4>
        </div>
        <div className="card">
          <Skeleton width={200} height={140} />
          <h3>
            <Skeleton />
          </h3>
          <h4>
            <Skeleton />
          </h4>
          <h4>
            <Skeleton />
          </h4>
        </div>
      </div>
    </>
  );
};

export default ShimmerEffect;
