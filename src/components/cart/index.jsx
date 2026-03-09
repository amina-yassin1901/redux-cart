import { connect } from "react-redux";
import CartItem from "../cartItem/index";
import styles from "./style.module.css";

function Cart({ cart }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className={styles.container}>
      <h2>Cart</h2>

      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}

      <h3>Total: ${total}</h3>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Cart);
