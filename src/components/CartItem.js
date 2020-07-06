import React, { useContext, useState } from "react";
import { Context } from "../Context";
function CartItem({ item }) {
  const { removeFromCart } = useContext(Context);
  const [hovered, setHovered] = useState(false);

  const iconName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line";
  return (
    <div className="cart-item">
      <i
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={iconName}
        onClick={() => removeFromCart(item.id)}
      />
      <img alt={item.url} src={item.url} width="130px" />
      <p>$5.99</p>
    </div>
  );
}

export default CartItem;
