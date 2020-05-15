import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const POSTS_QUERY = gql`
  query MyQuery($data: ID!) {
    product(idType: SLUG, id: $data) {
      name
      image {
        slug
        sourceUrl
      }
      description
    }
  }
`;

const IdComponents = (props) => {
  const { loading, error, data } = useQuery(POSTS_QUERY, {
    variables: {
      data: props.id,
    },
  });
  if (loading) return <p>Loading Posts...</p>;
  const product = data.product;
  return (
    <div>
      <img src={product.image.sourceUrl} alt="" />
    </div>
  );
};

export default IdComponents;
