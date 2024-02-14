import CardProducts from "../components/Fragments/CardProducts";

const Products = () => {
  return (
    <div className="flex justify-center">
      <CardProducts>
        <CardProducts.Header src="/images/shoes.jpg" />
        <CardProducts.Body title="Sepatu Baru Uhuy">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          voluptatem dolores ab temporibus aliquid rerum, iusto numquam
          perspiciatis quia excepturi quidem officiis repudiandae, eos sunt
          possimus neque! Eveniet, harum nulla!
        </CardProducts.Body>
        <CardProducts.Footer price="100.000" />
      </CardProducts>
      <CardProducts>
        <CardProducts.Header src="/images/shoes.jpg" />
        <CardProducts.Body title="Sepatu Baru Uhuy">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          voluptatem dolores ab temporibus aliquid rerum, iusto numquam
          perspiciatis quia excepturi quidem officiis repudiandae, eos sunt
          possimus neque! Eveniet, harum nulla!
        </CardProducts.Body>
        <CardProducts.Footer price="100.000" />
      </CardProducts>
    </div>
  );
};

export default Products;
