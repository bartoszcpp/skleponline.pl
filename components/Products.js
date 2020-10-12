import Link from "next/link";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import FirstThree from "./FirstThree";
import ImgProductCat from "./ImgProductCat";

const POSTS_QUERY = gql`
  {
    productCategories {
      nodes {
        image {
          sourceUrl
        }
        databaseId
        name
        slug
      }
    }
  }
`;

const Products = (props) => {
  const { count1, count2, number } = props;
  const { loading, error, data } = useQuery(POSTS_QUERY);
  let count = 1;
  if (loading)
    return (
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  if (error) return <p>Something wrong happened!</p>;
  const categories = data.productCategories.nodes;

  const allCategories = categories.map((category) => {
    if (category.name === "Bez kategorii") {
      return null;
    } else {
      count = count + 1;
      if (count === count1) {
        return (
          <>
            <div key={category.databaseId} className="row products">
              <Link href="/[cat]" as={category.slug}>
                <div className="col-6 colFlex product-left">
                  <ImgProductCat
                    src={category.image.sourceUrl}
                    name={category.name}
                  />
                </div>
              </Link>
              <div className="col-6 colFlex FirstThree">
                <FirstThree
                  cat={category.name}
                  counter={count1}
                  number={number}
                />
              </div>
            </div>
            <Link href="/[cat]" as={category.slug}>
              <div
                className={count1 === 4 ? "imgMore imgMoreClose" : "imgMore"}
              >
                <img className="img-fluid" src="/more.png" alt="more" />
              </div>
            </Link>
          </>
        );
      } else if (count === count2) {
        return (
          <>
            <div key={category.databaseId} className="row products">
              <div className="col-6 colFlex FirstThree">
                <FirstThree
                  cat={category.name}
                  counter={count2}
                  number={number}
                />
              </div>
              <Link href="/[cat]" as={category.slug}>
                <div className="col-6 colFlex product-right">
                  <ImgProductCat
                    src={category.image.sourceUrl}
                    name={category.name}
                  />
                </div>
              </Link>
            </div>
            <Link href="/[cat]" as={category.slug}>
              <div
                className={
                  count1 === 4
                    ? "imgMore imgMoreCloseLeft"
                    : "imgMore imgMoreLeft"
                }
              >
                <img className="img-fluid" src="/more.png" alt="more" />
              </div>
            </Link>
          </>
        );
      }
    }
  });

  return <>{allCategories}</>;
};

export default Products;
