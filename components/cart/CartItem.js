import { useState } from "react";

const CartItem = (props) => {
  const {
    item,
    cart,
    toggleCart,
    price,
    togglePrice,
    count,
    toggleCount,
  } = props;

  const productPrice = parseInt(item.price.match(/[+-]?\d+(\.\d+)?/g)[0]);
  const [productCount, setProductCount] = useState(item.totalProductCount);

  const handleCountChange = (event) => {
    setProductCount(event.target.value);
    let allStorageProduct = cart; //objekt wszystkich produktów
    let totalLocalCount = count;
    let totalLocalPrice = price;

    const first = allStorageProduct.findIndex(
      (product) => product["product"].slug === event.target.name
    );

    //cena nacisnietego produktu
    let priceProduct = parseInt(
      allStorageProduct[first]["product"].price.match(/[+-]?\d+(\.\d+)?/g)[0]
    );

    if (first > -1) {
      let totalProductCount = event.target.value;
      let totalProductPrice = event.target.value * priceProduct;

      totalLocalCount = totalLocalCount - item["totalProductCount"];
      totalLocalPrice = totalLocalPrice - item["totalProductPrice"];
      totalLocalPrice = totalLocalPrice + totalProductPrice;

      item["totalProductCount"] = totalProductCount;
      item["totalProductPrice"] = totalProductPrice;

      if (totalProductCount !== "") {
        totalLocalCount = totalLocalCount + parseInt(totalProductCount);
      }

      toggleCount(totalLocalCount);
      // localStorage.setItem("totalPrice", totalLocalPrice);
      togglePrice(totalLocalPrice);

      allStorageProduct[first] = { product: item };
      localStorage.setItem("item", JSON.stringify(allStorageProduct));
      console.log(allStorageProduct);
    }
  };

  const handleRemoveProduct = (e, slug) => {
    //let existProduct = localStorage.getItem("item");
    let allStorageProduct = cart;
    let totalLocalCount = count;
    let totalLocalPrice = price;

    const first = allStorageProduct.findIndex(
      (product) => product["product"].slug === slug
    );

    if (first > -1) {
      let totalCount =
        totalLocalCount - allStorageProduct[first]["product"].totalProductCount;
      toggleCount(totalCount);

      let totalPrice =
        totalLocalPrice - allStorageProduct[first]["product"].totalProductPrice;
      togglePrice(totalPrice);

      allStorageProduct.splice(first, 1);
      toggleCart(allStorageProduct);
    }
  };

  return (
    <tr className="woo-next-cart-item">
      <th className="woo-next-cart-element woo-next-cart-el-close">
        {/* Remove item */}
        {/* <span className="woo-next-cart-close-icon"
				      onClick={ ( event ) => handleRemoveProductClick( event, item.cartKey, products ) }>
					<i className="fa fa-times-circle"/>
				</span> */}
        <span onClick={(e) => handleRemoveProduct(e, item.slug)}>x</span>
      </th>
      <td className="woo-next-cart-element">
        <img width="64" src={item.image.sourceUrl} alt={item.image.slug} />
      </td>
      <td className="woo-next-cart-element">{item.name}</td>
      <td className="woo-next-cart-element">{productPrice}</td>

      {/* Qty Input */}
      <td className="woo-next-cart-element woo-next-cart-qty">
        <input
          type="number"
          min="1"
          value={productCount}
          name={item.slug}
          className="woo-next-cart-qty-input form-control"
          onChange={(event) => handleCountChange(event)}
        />
      </td>
      <td className="woo-next-cart-element">{item.totalProductPrice}</td>
    </tr>
  );
};

export default CartItem;
