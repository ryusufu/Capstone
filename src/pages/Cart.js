import React, { useState, useContext } from "react";
import { Context } from "../Context";
import CartItem from "../components/CartItem";

function Cart() {
  const [buttonText, setButtonText] = useState("Place Order");
  const [order, setOrder] = useState();
  const { cartItems, emptyCart } = useContext(Context);
  const total = 5.99 * cartItems.length;
  const totalCostDisplay = total.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });

  const cartItemElements = cartItems.map(item => (
    <CartItem key={item.id} item={item} />
  ));

  function placeOrder() {
    setButtonText("Placing Order...");
    setTimeout(() => {
      console.log("Order Placed");
      setButtonText("Place Order");
      setOrder("Order Placed. You'll be notified when it shipped!");
      emptyCart();
    }, 3000);
  }

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemElements}
      <p className="total-cost">Total: {totalCostDisplay} </p>
      {cartItems.length > 0 ? (
        <div className="order-button">
          <button onClick={placeOrder}>{buttonText}</button>
        </div>
      ) : (
        <div>
          <p className="order-success">{order}</p>
          <p>You have no items in your cart!</p>
        </div>
      )}
    </main>
  );
}

export default Cart;
