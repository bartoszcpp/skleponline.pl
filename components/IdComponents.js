import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { useContext } from "react";
import { AppContext } from "./contex/AppContex";
import { handleAddToCard } from "../functions";

const POSTS_QUERY = gql`
  query MyQuery($data: ID!) {
    product(idType: SLUG, id: $data) {
      name
      productId
      slug
      image {
        slug
        sourceUrl
      }
      description
      ... on SimpleProduct {
        price
      }
    }
  }
`;

const IdComponents = (props) => {
  const {
    cart,
    toggleCart,
    price,
    togglePrice,
    count,
    toggleCount,
  } = useContext(AppContext);

  const { loading, error, data } = useQuery(POSTS_QUERY, {
    variables: {
      data: props.id,
    },
  });
  if (loading)
    return (
      <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  const product = data.product;

  let floatValue = parseInt(product.price.match(/[+-]?\d+(\.\d+)?/g)[0]);

  return (
    <div className="row products">
      <div className="col-md-7">
        <img
          className="img-fluid imgOfProduct"
          src={product.image.sourceUrl}
          alt=""
        />{" "}
      </div>
      <div className="col-md-5 infoProduct">
        <h3>{product.name}</h3>
        <h4>{floatValue} zł</h4>
        <button
          className="addToCard"
          onClick={() =>
            handleAddToCard(
              product.slug,
              product,
              price,
              count,
              cart,
              togglePrice,
              toggleCount,
              toggleCart
            )
          }
        >
          DO KOSZYKA
        </button>
      </div>
    </div>
  );
};

export default IdComponents;
