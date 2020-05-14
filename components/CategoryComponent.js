import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const POSTS_QUERY = gql`
  query MyQuery($data: String!) {
    products(where: { category: $data }) {
      nodes {
        name
        slug
        description
        productId
      }
    }
  }
`;

const CategoryComponent = (props) => {
  console.log(props.cat);
  const { loading, error, data } = useQuery(POSTS_QUERY, {
    variables: {
      data: props.cat,
    },
  });
  if (loading) return <p>Loading Posts...</p>;
  const products = data.products.nodes;
  console.log(data);
  const allProducts = products.map((product) => (
    <p key={product.productId}>{product.name}</p>
  ));
  return <div>{allProducts}</div>;
};

export default CategoryComponent;
