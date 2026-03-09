import { connect } from "react-redux";
import { removeFromCart, updateCartQuantity } from "../../redux/actions/index";

import styles from "./styles.module.css";

function CartItem({ item, removeFromCart, updateCartQuantity }) {
  const handleChange = (e) => {
    updateCartQuantity(item.id, Number(e.target.value));
  };

  return (
    <div className={styles.item}>
      <p>{item.name}</p>

      <input type="number" value={item.quantity} onChange={handleChange} />

      <button onClick={() => removeFromCart(item.id)}>Remove</button>
    </div>
  );
}

export default connect(null, {
  removeFromCart,
  updateCartQuantity,
})(CartItem);
