import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Link from "next/link";

const POSTS_QUERY = gql`
  query MyQuery($data: String!) {
    products(where: { category: $data }) {
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
    totalCount = totalCount + 1;
    localStorage.setItem("totalCount", totalCount);
    let existProduct = localStorage.getItem("item"); //sprawdza czy jest jakis produkt
    let totalLocalPrice = parseInt(localStorage.getItem("totalPrice"));

    let allStorageProduct = JSON.parse(existProduct);

    // jesli produkt juz jakis jest
    if (existProduct) {
      console.log(allStorageProduct);

      //sprawdza czy produkt juz jest
      const first = allStorageProduct.findIndex(
        (product) => typeof product[slug] !== "undefined"
      );

      //jezeli produkt juz istnieje, zaaktualizuj cene oraz ilosc
      if (first > -1) {
        let totalProductCount =
          allStorageProduct[first][slug].totalProductCount + 1;
        let totalProductPrice =
          allStorageProduct[first][slug].totalProductPrice + floatValue;

        product["totalProductCount"] = totalProductCount;
        product["totalProductPrice"] = totalProductPrice;

        allStorageProduct[first] = { [slug]: product };

        totalLocalPrice = totalLocalPrice + floatValue;
        localStorage.setItem("totalPrice", totalLocalPrice);

        localStorage.setItem("item", JSON.stringify(allStorageProduct));
      } else {
        product["totalProductCount"] = 1;
        product["totalProductPrice"] = floatValue;
        allStorageProduct.push({ [slug]: product });

        totalLocalPrice = totalLocalPrice + floatValue;
        localStorage.setItem("totalPrice", totalLocalPrice);

        localStorage.setItem("item", JSON.stringify(allStorageProduct));
      }

      //jesli nie ma, dodaje pierwszą sztuke
    } else {
      totalPrice = totalPrice + floatValue;
      localStorage.setItem("totalPrice", totalPrice);

      localStorage.setItem("item", JSON.stringify(zmienna));
    }

    //localStorage.clear();
  };

  const allProducts = products.map((product) => {
    let floatValue = parseInt(product.price.match(/[+-]?\d+(\.\d+)?/g)[0]);
    product["totalProductCount"] = 1;
    product["totalProductPrice"] = floatValue;
    let zmienna = [{ [product.slug]: product }];
    return (
      <div key={product.productId} className="col4 oneOfProduct">
        <Link href="/[cat]/[id]" as={`/${props.cat}/${product.slug}`}>
          <div className="card">
            <img
              className="card-img-top"
              src={product.image.sourceUrl}
              alt={product.image.slug}
            />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p
                className="card-text"
                dangerouslySetInnerHTML={{ __html: product.shortDescription }}
              />
            </div>
          </div>
        </Link>
        <button
          onClick={() =>
            handleAddToCard(product.slug, product, floatValue, zmienna)
          }
        >
          Dodaj
        </button>
      </div>
    );
  });

  return (
    <div className="container containerProdukty">
      <div className="row containerProducts">{allProducts}</div>
    </div>
  );
};

export default CategoryComponent;
