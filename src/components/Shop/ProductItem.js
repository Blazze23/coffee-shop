import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const { id, title, price, description, image } = props;

  const addToCartHandler = () => {
    dispatch(
      cartActions.addToCart({
        id,
        title,
        price,
      })
    );
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes["item-info"]}>
          <div className={classes.image}>
            <img src={image} alt={title} />
          </div>
          <div className={classes["item-body"]}>
            <header>
              <h3>{title}</h3>
              <div className={classes.price}>{price.toFixed(2)}$</div>
            </header>
            <p>{description}</p>
          </div>
        </div>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
