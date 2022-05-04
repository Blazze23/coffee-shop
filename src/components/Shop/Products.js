import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import coffee from "../../assets/products/coffee.png";
import americano from "../../assets/products/americano.jpg";
import esspresso from "../../assets/products/espresso.jpg";
import cappuccino from "../../assets/products/cappuccino.jpg";

const DUMMY_DATA = [
  {
    id: "c1",
    title: "Coffee",
    description: 'Locally roasted using "Brazilian Santos" beans - 35ml',
    price: 1.75,
    image: coffee,
  },
  {
    id: "c2",
    title: "Americano",
    description: "Espresso Shot, Hot Water - 35ml",
    price: 2.25,
    image: americano,
  },
  {
    id: "c3",
    title: "Espresso",
    description:
      "Short & Long Shot Espressos made with rich Italian Moak roast straight from Italy",
    price: 1.0,
    image: esspresso,
  },
  {
    id: "c4",
    title: "Cappuccino",
    description: "Espresso w/ Smoothead Layer of Froth - 35ml",
    price: 2.75,
    image: cappuccino,
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Choose your favourite brew</h2>
      <ul>
        {DUMMY_DATA.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            image={product.image}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
