import React from "react";
import { v4 } from "uuid";
import styles from "./Order.module.css";
import PropTypes from "prop-types";
import Notification from '../PizzaList/Notification/Notification';

function Order({ order }) {
  return (
    <>
      <h2 className={styles.title}>Your orders</h2>
      {order.length > 0 ? (
        <>
          <ul className={styles.orderList}>
            {order.map((item) => (
              <li className={styles.orderListItem} key={v4()}>
                {item.join(", ")}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <Notification message="You have not orders yet" />
      )}
    </>
  );
}
Order.propTypes = {
  order: PropTypes.array.isRequired,
};
export default Order;
