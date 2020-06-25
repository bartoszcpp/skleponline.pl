import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Link from "next/link";

import ImgProduct from "./ImgProduct";

const POSTS_QUERY = gql`
  query MyQuery($data: String!, $number: Int!) {
    products(where: { category: $data }, first: $number) {
      nodes {
        name
        slug
        shortDescription
        productId
        image {
          slug
          sourceUrl
        }
        ... on SimpleProduct {
          price
        }
      }
    }
  }
`;

const FirstThree = (props) => {
  const { cat, count, number } = props;
  const { loading, error, data } = useQuery(POSTS_QUERY, {
    variables: {
      data: cat,
      number,
    },
  });
  let countImg = 0;
  if (loading) return <p>Loading Posts...</p>;
  const products = data.products.nodes;
  const allProducts = products.map((product) => {
    let thisPrice = product.price.replace(/&nbsp;/i, " ");
    if (count === 2 || count === 3) {
      return (
        <div key={product.productId} className="col-6 oneOfProduct">
          {/* <Link href="/[cat]/[id]" as={`/${props.cat}/${product.slug}`}> */}
          <div className="card">
            <ImgProduct
              image={product.image.sourceUrl}
              slug={product.image.slug}
              price={thisPrice}
              name={product.name}
              cat={props.cat}
              slugProduct={product.slug}
            />
          </div>
          {/* </Link> */}
        </div>
      );
    } else {
      return (
        <div key={product.productId} className="oneOfProductTwo">
          {/* <Link href="/[cat]/[id]" as={`/${props.cat}/${product.slug}`}> */}
          <div className="card">
            <ImgProduct
              image={product.image.sourceUrl}
              slug={product.image.slug}
              price={thisPrice}
              name={product.name}
              cat={props.cat}
              slugProduct={product.slug}
            />
          </div>
          {/* </Link> */}
        </div>
      );
    }
  });
  return (
    <>
      <div className="row containerProducts">{allProducts}</div>
    </>
  );
};

export default FirstThree;
