import React from 'react';
import styles from './Cart.module.css';
import PropTypes from 'prop-types';
import Notification from '../../Notification/Notification';

function Cart({ pizza, onAddToOrder }) {
  return (
    <>
      <div className={styles.cart}>
        <h2 className={styles.title}>Your cart</h2>
        {pizza.length > 0 ? (
          <>
            <ul className={styles.cartList}>
              {pizza.map(item => (
                <li key={{ item }} className={styles.orderListItem}>
                  {item.join(', ')}
                </li>
              ))}
            </ul>
            <button
              className={styles.buttonOrder}
              onClick={() => onAddToOrder()}
            >
              Order pizza
            </button>
          </>
        ) : (
          <Notification message="You have not added pizza to your cart" />
        )}
      </div>
    </>
  );
}
Cart.propTypes = {
  pizza: PropTypes.array.isRequired,
  onAddToOrder: PropTypes.func.isRequired,
};
export default Cart;
