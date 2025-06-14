// Cart.jsx
import React from "react";

const Cart = ({ cartItems, onClose, updateQuantity }) => {
  const itemPrice = 280;
  const deliveryFee = 25;
  const gst = 36.3;
  const total = cartItems.reduce((sum, item) => sum + (item.quantity * itemPrice), 0) + deliveryFee + gst;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg max-w-md w-full shadow-lg">
        <h2 className="text-lg font-bold mb-4">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p className="text-gray-600">Cart is empty.</p>
        ) : (
          <ul className="space-y-4 max-h-60 overflow-y-auto">
            {cartItems.map((item, index) => (
              <li key={index} className="flex items-center gap-4 border-b pb-2">
                <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded" />
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-sm">{item.name}</span>
                    <span className="text-sm font-semibold">₹{itemPrice * item.quantity}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <button onClick={() => updateQuantity(item.name, item.quantity - 1)} className="px-2 border rounded">−</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.name, item.quantity + 1)} className="px-2 border rounded">+</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}

        {cartItems.length > 0 && (
          <div className="mt-4 border-t pt-4 text-sm">
            <div className="flex justify-between"><span>Item Total</span><span>₹{total - deliveryFee - gst}</span></div>
            <div className="flex justify-between"><span>Delivery Fee</span><span>₹{deliveryFee}</span></div>
            <div className="flex justify-between"><span>GST</span><span>₹{gst}</span></div>
            <hr className="my-2" />
            <div className="flex justify-between font-semibold text-lg"><span>Total</span><span>₹{total.toFixed(2)}</span></div>
          </div>
        )}
        <button onClick={onClose} className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-800">
          Close
        </button>
      </div>
    </div>
  );
};

export default Cart;
