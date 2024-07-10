import { useEffect, useState } from "react";

export default function Cart() {
  const [cartItems, setCartItems] = useState({ cart: [] });
  const [cartLoading, setCartLoading] = useState(false);
  const [cartItemLoading, setCartItemLoading] = useState(false);

  async function loadData() {
    setCartLoading(true);
    const res = await fetch("/api/cart");
    const data = await res.json();
    setCartItems(data);
    setCartLoading(false);
  }

  useEffect(() => {
    loadData();
  }, []);

  async function removeFromCart(id) {
    const res = await fetch(`/api/cart/${id}`, { method: "DELETE" });
    await loadData();
    alert(`Item with id ${id} removed from cart`);
  }

  async function updateCartItem(id, quantity) {
    setCartItemLoading(true);
    const res = await fetch(`/api/cart/${id}`, {
      method: "PUT",
      body: JSON.stringify({ quantity }),
      headers: { "Content-Type": "application/json" },
    });
    setCartItemLoading(false);
    await loadData();
  }

  async function checkout() {
    const res = await fetch("/api/order", {
      method: "POST",
    });
    const data = await res.json();
    alert(`Order created with id ${data.id}`);
  }

  const totalPrice = cartItems.cart.reduce((acc, item) => {
    return acc + item.menuItem.price * item.quantity;
  }, 0);

  return (
    <>
      <h1>Cart</h1>
      <h4>Here is our cart:</h4>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          padding: "10px",
        }}
      >
        {cartLoading ? (
          <h1>Loading...</h1>
        ) : (
          cartItems.cart.map((item) => {
            return (
              <div
                key={item.id}
                style={{
                  width: "300px",
                  border: "1px solid black",
                  borderRadius: "10px",
                  margin: "10px",
                  padding: "10px",
                }}
              >
                <h3>{item.menuItem.name}</h3>
                <p>{item.quantity}</p>
                <button
                  disabled={cartItemLoading}
                  onClick={() =>
                    updateCartItem(item.menuItemId, item.quantity + 1)
                  }
                >
                  Increment
                </button>
                <button onClick={() => removeFromCart(item.menuItemId)}>
                  Remove
                </button>
              </div>
            );
          })
        )}
      </div>
      <div>Total Price: {totalPrice}</div>
      <button onClick={checkout}>Checkout Now</button>
      {/* TODO #4 add form here for submitting the order */}
    </>
  );
}
