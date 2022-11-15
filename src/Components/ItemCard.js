import React, { useState } from "react";
import { Favorite, StarRounded, AddRounded } from "@mui/icons-material";

function ItemCard({ imgSrc, name, ratings, price, id }) {
  const [isFavourite, setFavourite] = useState(false);

  const [currentValue, setCurrentValue] = useState(Math.floor(ratings));

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  return (
    <div className="itemCard" id={id}>
      <div
        className={`isfavourite ${isFavourite ? "active" : ""}`}
        onClick={() => setFavourite(!isFavourite)}
      >
        <Favorite />
      </div>
      <div className="imgBox">
        <img src={imgSrc} alt="" className="itemImg" />
      </div>
      <div className="itemContent">
        <h3 className="itemName">{name}</h3>
        <div className="bottom">
          <div className="ratings">
            {Array.apply(null, { length: 5 }).map((e, idx) => (
              <i
                key={idx}
                className={`rating ${currentValue > idx ? "orange" : "gray"}`}
                onClick={() => handleClick(idx + 1)}
              >
                <StarRounded />
              </i>
            ))}
            <h3 className="price">
              <span>$ </span>
              {price}
            </h3>
          </div>
          <i className="addtoCart">
            <AddRounded />
          </i>
        </div>
      </div>
    </div>
  );
}
export default ItemCard;
