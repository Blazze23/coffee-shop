import coverImg from "../../assets/coffee-bg.jpg";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={classes.hero}>
      <img src={coverImg} alt="coffee cup on coffee beans" />
      <div className={classes.intro}>
        <h1>It's the simple pleasures in life</h1>
        <button>Buy Now</button>
      </div>
    </div>
  );
};

export default Hero;
