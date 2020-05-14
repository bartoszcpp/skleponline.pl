import Link from "next/link";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

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

const Products = () => {
  const { loading, error, data } = useQuery(POSTS_QUERY);
  let count = 1;
  if (loading) return <p>Loading Posts...</p>;
  if (error) return <p>Something wrong happened!</p>;
  const categories = data.productCategories.nodes;
  console.log(data.productCategories.nodes);
  const allCategories = categories.map((category) => {
    if (category.name === "Bez kategorii") {
      return null;
    } else {
      count = count + 1;
      if (count % 2 === 0) {
        return (
          <div key={category.databaseId} className="row products">
            <Link href="/[cat]" as={category.slug}>
              <div className="col-9 product-left">
                <div className="border-right-bottom">
                  <img
                    className="imgProduct img-fluid"
                    src={category.image.sourceUrl}
                    alt="produkt1"
                  />
                </div>
                <h2 className="nameProduct">#{category.name}</h2>
              </div>
            </Link>
            <div className="col-3">
              <img className="imgIcon img-fluid" src="/coffie.jpg" alt="" />
            </div>
          </div>
        );
      } else {
        return (
          <div key={category.databaseId} className="row products">
            <div className="col-3">
              <img className="imgIcon img-fluid" src="/coffie.jpg" alt="" />
            </div>
            <Link href="/[cat]" as={category.slug}>
              <div className="col-9 product-right">
                <h2 className="nameProduct">#{category.name}</h2>
                <div className="border-left-top">
                  <img
                    className="imgProduct img-fluid"
                    src={category.image.sourceUrl}
                    alt="produkt1"
                  />
                </div>
              </div>
            </Link>
          </div>
        );
      }
    }
  });

  return (
    <>
      <div>{allCategories}</div>
      {/* <div className="row products">
        <Link href="/[cat]" as="/ssg-ssr">
          <div className="col-9 product-left">
            <div className="border-right-bottom">
              <img
                className="imgProduct img-fluid"
                src="/kawa.jpg"
                alt="produkt1"
              />
            </div>
            <h2 className="nameProduct">#kawa</h2>
          </div>
        </Link>
        <div className="col-3">
          <img className="imgIcon img-fluid" src="/coffie.jpg" alt="" />
        </div>
      </div>
      <div className="row products">
        <div className="col-3">
          <img className="imgIcon img-fluid" src="/coffie.jpg" alt="" />
        </div>
        <div className="col-9 product-right">
          <h2 className="nameProduct">#kawa</h2>
          <div className="border-left-top">
            <img
              className="imgProduct img-fluid"
              src="/kawa.jpg"
              alt="produkt1"
            />
          </div>
        </div>
      </div>
      <div className="row products">
        <div className="col-9 product-left">
          <div className="border-right-bottom">
            <img
              className="imgProduct img-fluid"
              src="/kawa.jpg"
              alt="produkt1"
            />
          </div>
          <h2 className="nameProduct">#kawa</h2>
        </div>
        <div className="col-3">
          <img className="imgIcon img-fluid" src="/coffie.jpg" alt="" />
        </div>
      </div>
      <div className="row products">
        <div className="col-3">
          <img className="imgIcon img-fluid" src="/coffie.jpg" alt="" />
        </div>
        <div className="col-9 product-right">
          <h2 className="nameProduct">#kawa</h2>
          <div className="border-left-top">
            <img
              className="imgProduct img-fluid"
              src="/kawa.jpg"
              alt="produkt1"
            />
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Products;
