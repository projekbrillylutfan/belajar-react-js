import { useSelector } from "react-redux";
import { useLogin } from "../../hooks/useLogin";
import Button from "../Elements/Button";
import { useEffect, useState } from "react";

const Navbar = () => {
  const username = useLogin();
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart.data);

  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
    setTotalCart(sum);
  }, [cart]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div>
      <div className="flex items-center justify-end bg-sky-400 rounded-lg mb-5 p-3 text-black gap-2">
        <p>{username}</p>
        <Button
          classname="bg-red-500 hover:bg-red-700 text-white"
          onClick={handleLogout}
        >
          LogOut
        </Button>

        <div className="flex items-center bg-white p-2 rounded-md ml-5">
          {totalCart}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
