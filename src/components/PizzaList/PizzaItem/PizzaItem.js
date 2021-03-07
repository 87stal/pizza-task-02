import React from 'react';
import PropTypes from 'prop-types';
import styles from './PizzaItem.module.css';

const  PizzaItem = ({ name, ingredients, onAddToCart }) => (
  <>
    <span className={styles.pizzaCart} onClick={() => onAddToCart({name})}>
     <div class={styles.pizzaName}>{name}</div>
     <div class={styles.pizzaingredients}>{ingredients}</div>
    </span>
  </>
);
PizzaItem.propTypes = {
  name: PropTypes.string.isRequired,
  ingredients: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default PizzaItem;
