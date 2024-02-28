import CardProducts from "../components/Fragments/CardProducts";
import { useEffect, useState, useContext, Fragment } from "react";
import { getProducts } from "../services/product.service";
import { useLogin } from "../hooks/useLogin";
import TableCart from "../components/Fragments/TableCart";
import Navbar from "../components/Layouts/Navbar";
import { DarkMode } from "../context/DarkMode";

const Products = () => {
  const [products, setProducts] = useState([]);
  const { isDark } = useContext(DarkMode);
  useLogin();

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <Fragment>
    <Navbar />
      <div className={`flex justify-center py-5 ${isDark && "bg-slate-900"}`}>
        <div className="flex w-4/6 flex-wrap">
          {products.length > 0 &&
            products.map((product) => (
              <div className="" key={product.id}>
                <CardProducts>
                  <CardProducts.Header src={product.image} id={product.id} />
                  <CardProducts.Body name={product.title}>
                    {product.description}
                  </CardProducts.Body>
                  <CardProducts.Footer id={product.id} price={product.price} />
                </CardProducts>
              </div>
            ))}
        </div>
        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-blue-600">Cart</h1>

          <TableCart products={products} />
        </div>
      </div>
    </Fragment>
  );
};

export default Products;
