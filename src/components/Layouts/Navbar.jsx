import { useSelector } from "react-redux";
import { useLogin } from "../../hooks/useLogin";
import Button from "../Elements/Button";
import { useEffect, useState, useContext } from "react";
import { DarkMode } from "../../context/DarkMode";

const Navbar = () => {
  const username = useLogin();
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart.data);
  const { isDark, setIsDark } = useContext(DarkMode);

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
      <div className="flex items-center justify-end bg-sky-400 rounded-sm pb-5 p-3 text-black gap-2">
        <p>{username}</p>
        <Button
          classname="bg-red-500 hover:bg-red-700 text-white"
          onClick={handleLogout}
        >
          LogOut
        </Button>

        <Button
          className="bg-black px-10 m-5 text-white rounded-sm"
          onClick={() => setIsDark(!isDark)}
        >
          {isDark ? "Light" : "Dark"}
        </Button>

        <div className="flex items-center bg-white p-2 rounded-md ml-5">
          {totalCart}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
