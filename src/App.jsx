import "./App.css";
import ProductList from "./components/productList";
import Cart from "./components/cart";

function App() {
  return (
    <div>
      <h1>Shopping Cart</h1>

      <ProductList />
      <Cart />
    </div>
  );
}

export default App;
