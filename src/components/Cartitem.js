const Cart = ({ cartItems, updateQuantity, removeItem }) => (
  <div>
    {cartItems.map((item) => (
      <div key={item.id}>
        <h3>{item.name}</h3>
        <p>Price: ${item.price}</p>
        <input
          type="number"
          value={item.quantity}
          onChange={(e) => updateQuantity(item.id, e.target.value)}
        />
        <button onClick={() => removeItem(item.id)}>Remove</button>
      </div>
    ))}
  </div>
);
export default Cart;
