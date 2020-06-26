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
  if (loading) return <p>Loading Posts...</p>;
  const product = data.product;
  return (
    <div className="container">
      <img src={product.image.sourceUrl} alt="" /> <br />
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
  );
};

export default IdComponents;
