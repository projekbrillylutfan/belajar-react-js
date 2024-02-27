import Button from "../Elements/Button";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";


const CardProducts = (props) => {
  const { children } = props;
  return (
    <div className="w-full max-w-xs min-h-full  bg-sky-500 border border-gray-200 rounded-lg shadow mx-2 my-2 flex flex-col justify-between">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { src, id } = props;
  return (
    <Link to={`/products/${id}`}>
      <img
        src={src}
        alt="product"
        className="p-8 rounded-t-lg hover:z-10 hover:scale-105 duration-300 h-60 w-full object-cover"
      />
    </Link>
  );
};

const Body = (props) => {
  const { children, name } = props;
  return (
    <div className="px-7 pb-5 h-full">
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-white">
          {name.substring(0, 20)}
        </h5>
        <p className="text-m text-white text-justify">
          {children.substring(0, 100)}
        </p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const { price, id } = props;
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between px-2 pb-5">
      <span className="text-xl font-bold text-white">
        {' '}
        {price.toLocaleString("id-ID", { style: "currency", currency: "USD" })}
      </span>
      <Button
        onClick={() => dispatch(addToCart({
          id,
          qty: 1,
        }))}
        classname="bg-green-500 hover:bg-green-700"
      >
        Add To Cart
      </Button>
    </div>
  );
};

CardProducts.Header = Header;
CardProducts.Body = Body;
CardProducts.Footer = Footer;

export default CardProducts;
