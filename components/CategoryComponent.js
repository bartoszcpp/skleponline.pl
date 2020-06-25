import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Link from "next/link";
import { useContext } from "react";
import { AppContext } from "./contex/AppContex";

const POSTS_QUERY = gql`
  query MyQuery($data: String!) {
    products(where: { category: $data }, first: 12) {
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

const CategoryComponent = (props) => {
  const {
    cart,
    toggleCart,
    price,
    togglePrice,
    count,
    toggleCount,
  } = useContext(AppContext);
  //console.log(props.cat);
  const { loading, error, data } = useQuery(POSTS_QUERY, {
    variables: {
      data: props.cat,
    },
  });
  if (loading) return <p>Loading Posts...</p>;
  const products = data.products.nodes;
  let totalCount = 0;
  let totalPrice = 0;

  const handleAddToCard = (slug, product, floatValue, zmienna) => {
    let existProduct = localStorage.getItem("item"); //sprawdza czy jest jakis produkt
    let totalLocalPrice = parseInt(price);
    let totalLocalCount = parseInt(count);
    console.log(product);
    product = JSON.stringify(product);
    // jesli produkt juz jakis jest
    if (existProduct) {
      let allStorageProduct = cart;
      console.log(allStorageProduct);

      //sprawdza czy produkt juz jest
      const first = allStorageProduct.findIndex(
        (product) => product["product"].slug === slug
      );

      //jezeli produkt juz istnieje, zaaktualizuj cene oraz ilosc
      if (first > -1) {
        let totalProductCount =
          allStorageProduct[first]["product"].totalProductCount + 1;
        let totalProductPrice =
          allStorageProduct[first]["product"].totalProductPrice + floatValue;

        product = JSON.parse(product);

        product["totalProductCount"] = totalProductCount;
        product["totalProductPrice"] = totalProductPrice;

        allStorageProduct[first] = { product: product };
        console.log(typeof product);

        totalLocalPrice = totalLocalPrice + floatValue;
        togglePrice(totalLocalPrice);

        totalLocalCount = totalLocalCount + 1;
        toggleCount(totalLocalCount);
        console.log(allStorageProduct);
        toggleCart(allStorageProduct);
        console.log("haga");
      } else {
        product = JSON.parse(product);
        product["totalProductCount"] = 1;
        product["totalProductPrice"] = floatValue;
        allStorageProduct.push({ product: product });

        totalLocalPrice = totalLocalPrice + floatValue;
        console.log(totalLocalPrice);
        togglePrice(totalLocalPrice);

        totalLocalCount = totalLocalCount + 1;
        toggleCount(totalLocalCount);

        toggleCart(allStorageProduct);
      }

      //jesli nie ma, dodaje pierwszą sztuke
    } else {
      totalPrice = totalPrice + floatValue;
      togglePrice(totalPrice);

      totalCount = totalCount + 1;
      toggleCount(totalCount);

      toggleCart(zmienna);
    }

    //localStorage.clear();
  };

  const allProducts = products.map((product) => {
    let floatValue = parseInt(product.price.match(/[+-]?\d+(\.\d+)?/g)[0]);
    let thisPrice = product.price.replace(/&nbsp;/i, " ");
    product["totalProductCount"] = 1;
    product["totalProductPrice"] = floatValue;
    let zmienna = [{ product: product }];
    return (
      <div
        key={product.productId}
        className="col-lg-4 col-sm-6 oneOfProduct-border"
      >
        <Link href="/[cat]/[id]" as={`/${props.cat}/${product.slug}`}>
          <div className="card">
            <img
              className="card-img-top"
              src={product.image.sourceUrl}
              alt={product.image.slug}
            />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <h6>{thisPrice}</h6>
            </div>
          </div>
        </Link>
        <button
          className="addToCard"
          onClick={() =>
            handleAddToCard(product.slug, product, floatValue, zmienna)
          }
        >
          DO KOSZYKA
        </button>
      </div>
    );
  });

  return (
    <div className="container containerProdukty">
      <div className="row containerProducts-border">{allProducts}</div>
    </div>
  );
};

export default CategoryComponent;
