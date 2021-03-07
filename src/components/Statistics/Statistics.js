import PropTypes from "prop-types";
import styles from "./Statistics.module.css";
import Notification from "../PizzaList/Notification/Notification";

function Statistics({ orders, pizza }) {
  //Get list all pizza in orders
  const popularList = orders.flat().reduce((acc, el) => {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, {});

  //Sorting pizza by popularity
  const sortingPizza = Object.keys(popularList).sort((a, b) => {
    return popularList[b] - popularList[a];
  });
  //Get list of 5 most popular pizza
  const popularPizza = sortingPizza.reduce((listPizza, pizza) => {
    if (listPizza.length < 5) {
      listPizza.push(pizza);
    }
    return listPizza;
  }, []);

  //Get list all ingredients for popular pizza
  const allIngredients = pizza.reduce((ingredients, pizzaItem) => {
    const ingredient = Object.entries(pizzaItem.ingredients);

    if (popularPizza.includes(pizzaItem.name)) {
      ingredients.push(...ingredient);
    }
    return ingredients;
  }, []);

  //Get list ingridient by amount
  const listPopularIngredients = allIngredients.reduce((tally, ingredient) => {
    tally[ingredient[0]] = (tally[ingredient[0]] || 0) + ingredient[1];
    return tally;
  }, {});

  //Get list of sorted ingredients
  const ingredients = Object.entries(listPopularIngredients)
    .sort((a, b) => a[1] - b[1])
    .map((ingredient) => ingredient[0]);

  return (
    <>
      <h3 className={styles.titleStatistics}>Popular pizza</h3>
      {orders.length > 0 ? (
        <>
          <ol className={styles.listPizza}>
            {popularPizza.map((pizza) => (
              <li className={styles.listPizzaItem}>{pizza}</li>
            ))}
          </ol>
          <h3>Ingredients for popular pizza</h3>
          <div>{ingredients.join(", ")} </div>
        </>
      ) : (
        <Notification
          message="
We have no statistics"
        />
      )}
    </>
  );
}
Statistics.propTypes = {
  orders: PropTypes.array.isRequired,
  pizza: PropTypes.array.isRequired,
};
export default Statistics;
