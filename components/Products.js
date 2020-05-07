const Products = () => {
  return (
    <>
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
      </div>
    </>
  );
};

export default Products;
