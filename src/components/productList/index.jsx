import { connect } from "react-redux";
import { addToCart } from "../../redux/actions";
import styles from "./styles.module.css";

function ProductList({ products, dispatch }) {
  return (
    <div className={styles.container}>
      <h2>Products</h2>

      {products.map((product) => (
        <div key={product.id} className={styles.product}>
          <p>{product.name}</p>
          <p>${product.price}</p>

          <button onClick={() => dispatch(addToCart(product.id))}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps)(ProductList);
