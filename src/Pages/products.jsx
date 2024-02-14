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


const Products = () => {
  return (
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
  );
};

export default Products;
