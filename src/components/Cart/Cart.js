import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);

  let cartContent;

  if (cartItems.length === 0) {
    cartContent = (
      <p className={classes.emptyCart}>
        There are no items in your cart. Get yourself a hot beverage!
      </p>
    );
  } else {
    cartContent = (
      <ul>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            title={item.title}
            quantity={item.quantity}
            price={item.price}
            total={item.totalPrice}
          />
        ))}
      </ul>
    );
  }

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {cartContent}
    </Card>
  );
};

export default Cart;
