import Header from "../Header";
import BackgroundImage from "../BackgroungImage";
import CartItem from "./CartItem";
import { useContext } from "react";
import { AppContext } from "../contex/AppContex";

const CartContainer = () => {
  const {
    cart,
    toggleCart,
    price,
    togglePrice,
    count,
    toggleCount,
  } = useContext(AppContext);

  console.log(cart);
  console.log(price);
  return (
    <>
      <Header />
      <BackgroundImage />
      <div className="content-wrap-cart">
        {cart ? (
          <div className="woo-next-cart-wrapper container">
            <h1 className="woo-next-cart-heading mt-5">Koszyk</h1>
            <table className="table table-hover">
              <thead>
                <tr className="woo-next-cart-head-container">
                  <th className="woo-next-cart-heading-el" scope="col" />
                  <th className="woo-next-cart-heading-el" scope="col" />
                  <th className="woo-next-cart-heading-el" scope="col">
                    Produkt
                  </th>
                  <th className="woo-next-cart-heading-el" scope="col">
                    Cena
                  </th>
                  <th className="woo-next-cart-heading-el" scope="col">
                    Ilość
                  </th>
                  <th className="woo-next-cart-heading-el" scope="col">
                    Łącznie
                  </th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => {
                  if (item !== null)
                    return (
                      <CartItem
                        key={item["product"].productId}
                        item={item["product"]}
                        cart={cart}
                        price={price}
                        count={count}
                        togglePrice={togglePrice}
                        toggleCount={toggleCount}
                        toggleCart={toggleCart}
                      />
                    );
                })}
                {/* {cart.products.length &&
              cart.products.map((item) => (
                <CartItem
                  key={item.productId}
                  item={item}
                  updateCartProcessing={updateCartProcessing}
                  products={cart.products}
                  handleRemoveProductClick={handleRemoveProductClick}
                  updateCart={updateCart}
                />
              ))} */}
              </tbody>
            </table>
            <p>Łącznie: {price}</p>
          </div>
        ) : (
          <div>x</div>
        )}
      </div>
    </>
  );
};

export default CartContainer;
