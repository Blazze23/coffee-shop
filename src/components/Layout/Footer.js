import classes from "./Footer.module.css";
import reactIcon from "../../assets/react-icon.svg";
import firebaseIcon from "../../assets/firebase-icon.svg";
import reduxIcon from "../../assets/redux-icon.svg";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <h2>Powered by</h2>
      <div className={classes.icons}>
        <img src={reactIcon} alt="react-icon" />
        <img src={reduxIcon} alt="redux-icon" />
        <img src={firebaseIcon} alt="firebase-icon" />
      </div>
    </footer>
  );
};

export default Footer;
