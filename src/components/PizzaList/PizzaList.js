import { useState } from 'react';
import PropTypes from 'prop-types';

import PizzaItem from './PizzaItem/PizzaItem';
import Order from '../Order/Order';
import Cart from './Cart/Cart';
import Statistics from '../Statistics/Statistics';


import styles from './PizzaList.module.css';

function PizzaList({ pizza }) {
  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState([]);

  const onAddToCart = name => {
    setCart(prevCart => [Object.values({ name }), ...prevCart]);
  };

  const onAddToOrder = () => {
    setOrder([cart, ...order]);
    setCart([]);
  };

  return (
    <>
      <ul className={styles.pizzaList}>
        {pizza.map(({ name, ingredients }) => (
          <li key={name} className={styles.pizzaListItem}>
            <PizzaItem
              name={name}
              ingredients={Object.keys(ingredients).join(', ')}
              onAddToCart={() => onAddToCart(name)}
            />
          </li>
        ))}
      </ul>
      <Cart pizza={cart} onAddToOrder={onAddToOrder} />
      <Order order={order} />
      <Statistics orders={order} pizza={pizza} />
    </>
  );
}
PizzaList.propTypes = {
  pizza: PropTypes.array.isRequired,
};

export default PizzaList;
