import Button from "../components/Elements/Button";
import CardProducts from "../components/Fragments/CardProducts";
import { useEffect, useState } from "react";

const products = [
  {
    id: 1,
    name: "Sepatu Baru",
    price: 100000,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 2,
    name: "Sepatu Lama",
    price: 2000000,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 3,
    name: "Baju Polos",
    price: 50000,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  // Anda dapat terus menambahkan produk lainnya
];

const email = localStorage.getItem("email");

const Products = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    const total = () => {
      if (cart.length > 0) {
        const sum = cart.reduce((acc, item) => {
          const product = products.find((product) => product.id === item.id);
          return acc + product.price * item.qty;
        }, 0);
        setTotal(sum);
        localStorage.setItem("cart", JSON.stringify(cart));
      }
    };
    
    total();
  }, [cart]);
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { qty: 1, id }]);
    }
  };
  return (
    <>
      <div className="flex items-center justify-end bg-sky-400 rounded-lg mb-5 p-3 text-black gap-2">
        <p>{email}</p>
        <Button
          classname="bg-red-500 hover:bg-red-700 text-white"
          onClick={handleLogout}
        >
          LogOut
        </Button>
      </div>
      <div className="flex justify-center">
        <div className="flex w-4/6 flex-wrap">
          {products.map((product) => (
            <div className="" key={product.id}>
              <CardProducts>
                <CardProducts.Header src="/images/shoes.jpg" />
                <CardProducts.Body name={product.name}>
                  {product.desc}
                </CardProducts.Body>
                <CardProducts.Footer
                  id={product.id}
                  price={product.price}
                  handleAddToCart={handleAddToCart}
                />
              </CardProducts>
            </div>
          ))}
        </div>
        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-blue-600">Cart</h1>

          <table className="text-left table-auto border-separate border-spacing-x-2">
            <thead>
              <tr>
                <th>product</th>
                <th>price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = products.find(
                  (product) => product.id === item.id
                );
                if (!product) {
                  return null; // Mengabaikan item jika produk tidak ditemukan
                }
                return (
                  <tr key={item.id}>
                    <td>{product.name}</td>
                    <td>
                      {product.price.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </td>
                    <td>{item.qty}</td>
                    <td>
                      {(item.qty * product.price).toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td colSpan={3} className="font-bold">
                  Price Total
                </td>
                <td className="font-bold">
                  {total.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Products;
