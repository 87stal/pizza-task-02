import React from 'react';
import PropTypes from 'prop-types';
import styles from './PizzaItem.module.css';

const PizzaItem = ({ name, ingredients, onAddToCart }) => (
  <div className={styles.pizzaCard} onClick={() => onAddToCart({ name })}>
    <div className={styles.pizzaName}>{name}</div>
    <div className={styles.pizzaIngredients}>{ingredients}</div>
  </div>
);
PizzaItem.propTypes = {
  name: PropTypes.string.isRequired,
  ingredients: PropTypes.string.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default PizzaItem;
