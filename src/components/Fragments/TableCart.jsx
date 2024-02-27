import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const TableCart = (props) => {
  const { products } = props;
  const cart = useSelector((state) => state.cart.data);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const total = () => {
      if (products.length > 0 && cart.length > 0) {
        const sum = cart.reduce((acc, item) => {
          const product = products.find((product) => product.id === item.id);
          if (product) { // Pengecekan keamanan
            return acc + product.price * item.qty;
        } else {
            console.error(`Product with id ${item.id} not found.`);
            return acc;
        }
        }, 0);
        setTotal(sum);
        localStorage.setItem("cart", JSON.stringify(cart));
      }
    };
    total();
  }, [cart, products]);

  return (
    <div>
      <table className="text-left table-auto border-separate border-spacing-x-2">
        <thead>
          <tr>
            <th>No</th>
            <th>product</th>
            <th>price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 &&
            cart.map((item, index) => {
              const product = products.find(
                (product) => product.id === item.id
              );
              if (!product) {
                return null; // Mengabaikan item jika produk tidak ditemukan
              }
              return (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{product.title.substring(0, 20)}</td>
                  <td>
                    {product.price.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </td>
                  <td>{item.qty}</td>
                  <td>
                    {(item.qty * product.price).toLocaleString("id-ID", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </td>
                </tr>
              );
            })}
          <tr>
            <td colSpan={4} className="font-bold">
              Price Total
            </td>
            <td className="font-bold">
              {total.toLocaleString("id-ID", {
                style: "currency",
                currency: "USD",
              })}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableCart;
