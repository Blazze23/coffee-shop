import CartButton from "../Cart/CartButton";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <p className={classes.logo}>2GO Coffee</p>
      <nav>
        <ul>
          <li>
            <CartButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
