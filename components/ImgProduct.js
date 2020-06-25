import React, { useState } from "react";
import Link from "next/link";

const ImgProduct = (props) => {
  const [isShown, setIsShown] = useState(false);
  const { image, slug, price, name, cat, slugProduct } = props;
  return (
    <div
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      {isShown === true ? (
        <div>
          <img className="card-img-top  img-fluid" src={image} alt={slug} />
          <div className="cardHoverInfo">
            <h5>{name}</h5>
            <div className="borderH5"></div>
            <h6>{price}</h6>
            <button className="addToCardWhite">DO KOSZYKA</button>
            <Link href="/[cat]/[id]" as={`/${cat}/${slugProduct}`}>
              <button className="addToCardWhite">ZOBACZ</button>
            </Link>
          </div>
        </div>
      ) : (
        <img className="card-img-top img-fluid" src={image} alt={slug} />
      )}
    </div>
  );
};

export default ImgProduct;
