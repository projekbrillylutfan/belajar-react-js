import CardProducts from "../components/Fragments/CardProducts";
import { useEffect, useState } from "react";
import {getProducts} from "../services/product.service";
import { useLogin } from "../hooks/useLogin";
import TableCart from "../components/Fragments/TableCart";
import Navbar from "../components/Layouts/Navbar";

const Products = () => {
  // const [cart, setCart] = useState([]);
  
  // const [total, setTotal] = useState(0);
  const [products, setProducts] = useState([]);
  useLogin();

  // useEffect(() => {
  //   setCart(JSON.parse(localStorage.getItem("cart")) || []);
  // }, []);


  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);
  
  return (
    <>
    <Navbar />
      <div className="flex justify-center">
        <div className="flex w-4/6 flex-wrap">
          {products.length > 0 && products.map((product) => (
            <div className="" key={product.id}>
              <CardProducts>
                <CardProducts.Header src={product.image} id = {product.id} />
                <CardProducts.Body name={product.title}>
                  {product.description}
                </CardProducts.Body>
                <CardProducts.Footer
                  id={product.id}
                  price={product.price}
                />
              </CardProducts>
            </div>
          ))}
        </div>
        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-blue-600">Cart</h1>

          <TableCart products={products} />
        </div>
      </div>
    </>
  );
};

export default Products;
