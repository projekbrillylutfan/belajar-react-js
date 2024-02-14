import Button from "../components/Elements/Button";
import CardProducts from "../components/Fragments/CardProducts";

const products = [
  {
    id: 1,
    title: "Sepatu Baru",
    price: 100000,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 2,
    title: "Sepatu Lama",
    price: 2000000,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 3,
    title: "Baju Polos",
    price: 50000,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  // Anda dapat terus menambahkan produk lainnya
];

const email = localStorage.getItem("email");

const Products = () => {
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  }
  return (
    <>
      <div className="flex items-center justify-end bg-sky-400 rounded-lg mb-5 p-3 text-black gap-2">
        <p>{email}</p>
        <Button classname="bg-red-500 hover:bg-red-700 text-white" onClick={handleLogout}>LogOut</Button>
      </div>
      <div className="flex justify-center">
        {products.map((product) => (
          <div className="" key={product.id}>
            <CardProducts>
              <CardProducts.Header src="/images/shoes.jpg" />
              <CardProducts.Body title={product.title}>
                {product.desc}
              </CardProducts.Body>
              <CardProducts.Footer price={product.price} />
            </CardProducts>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
