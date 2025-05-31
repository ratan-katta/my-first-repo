import Cart from "../components/Cartitem";

const CartPage = ({ cartItems, updateQuantity, removeItem }) => (
  <div>
    <Cart
      cartItems={cartItems}
      updateQuantity={updateQuantity}
      removeItem={removeItem}
    />
    <button>Proceed to Checkout</button>
  </div>
);
export default CartPage;
