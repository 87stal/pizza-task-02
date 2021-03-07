import React from "react";
import { v4 } from 'uuid';
import styles from "./Order.module.css";

function Orders({ order }) {
    return (
    <>
       <h2 className= {styles.title}>Your orders</h2>
       <ul className = {styles.ordersList}>
           {order.map((item) =>
            <li className={styles.orderListItem} key = { v4() }>{item.join(", ")}</li>
           )}
       </ul>
    </>
    )
}

export default Orders