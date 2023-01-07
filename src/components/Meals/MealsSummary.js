import classes from "./MealsSummary.module.css";

const MealsSummary = (props) => {
  return (
    <section className={classes.summary}>
      <h2>Amazing Burgers, Delivered to You</h2>
      <p>
        Choose your favorite Burger from our broad selection of available
        Burgers and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our Burgers are made with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </section>
  );
};

export default MealsSummary;
