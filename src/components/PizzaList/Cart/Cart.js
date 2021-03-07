import React from "react";
import styles from "./Cart.module.css";

function Cart({ pizza, onAddToOrder }) {
    return (
    <>
       <h2 className= {styles.title}>Your cart</h2>
       <ul className = {styles.cartList}>
           {pizza.map((item) =>
            <li className={styles.orderListItem}>{item.join(", ")}</li>
           )}
       </ul>
       <button className={styles.buttonOrder} onClick={()=> onAddToOrder() }>Order pizza</button>
    </>
    )
}

export default Cart