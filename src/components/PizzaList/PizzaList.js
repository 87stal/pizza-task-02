import { useState } from 'react';
import PizzaItem from './PizzaItem/PizzaItem';
import Orders from '../Order/Order';
import Cart from './Cart/Cart';
import PropTypes from 'prop-types';
import styles from './PizzaList.module.css';

function PizzaList({ pizza }) {
  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState([]);
  const onAddToCart = name => {
    setCart(prevCart => [Object.values({name}), ...prevCart]);
  };
  const onAddToOrder =() => {
    setOrder([cart, ...order])
    setCart([])
  }

  return (
    <>
      <ul className={styles.pizzaList}>
        {pizza.map(({ name, ingredients }) => (
          <li className={styles.pizzaListItem}>
            <PizzaItem
              name={name}
              ingredients={Object.keys(ingredients).join(', ')}
              onAddToCart={() => onAddToCart(name)}
            />
          </li>
        ))}
      </ul>
      <Cart pizza = {cart} onAddToOrder = {onAddToOrder} />
      <Orders order = {order}/>
    </>

  );
}
PizzaList.propTypes = {
  pizza: PropTypes.array.isRequired,
};

export default PizzaList;
