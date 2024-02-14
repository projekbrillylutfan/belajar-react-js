import Button from "../Elements/Button";
const CardProducts = (props) => {
  const { children } = props;
  return (
    <div className="w-full max-w-sm bg-sky-500 border border-gray-200 rounded-lg shadow mx-2 flex flex-col justify-between">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { src } = props;
  return (
    <a href="#">
      <img
        src={src}
        alt="product"
        className="p-8 rounded-t-lg hover:z-10 hover:scale-105 duration-300"
      />
    </a>
  );
};

const Body = (props) => {
  const { children, title } = props;
  return (
    <div className="px-7 pb-5 h-full">
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-white">
          {title}
        </h5>
        <p className="text-m text-white text-justify">{children}</p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const { price } = props;
  return (
    <div className="flex items-center justify-between px-7 pb-5">
      <span className="text-xl font-bold text-white">Rp. {price}</span>
      <Button classname="bg-green-500 hover:bg-green-700">Add To Cart</Button>
    </div>
  );
};

CardProducts.Header = Header;
CardProducts.Body = Body;
CardProducts.Footer = Footer;

export default CardProducts;
