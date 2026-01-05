import React from "react";
import { Plus, Minus, X } from "lucide-react";

const Cart = ({ cartItems, onClose, updateQuantity }) => {
  const itemPrice = 280;
  const deliveryFee = 25;
  const gst = 36.3;

  const itemTotal = cartItems.reduce(
    (sum, item) => sum + item.quantity * itemPrice,
    0
  );
  const total = itemTotal + deliveryFee + gst;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden animate-fade-in">
        
        {/* Header */}
        <div className="flex justify-between items-center px-5 py-4 border-b">
          <h2 className="text-lg font-bold text-gray-800">
            🛒 Your Cart
          </h2>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-5">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500 py-10">
              Your cart is empty 🍽️
            </p>
          ) : (
            <>
              {/* Items */}
              <div className="space-y-4 max-h-64 overflow-y-auto pr-1">
                {cartItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-gray-50 rounded-xl p-3"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 rounded-lg object-cover"
                    />

                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-800">
                        {item.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        ₹{itemPrice} × {item.quantity}
                      </p>

                      {/* Quantity */}
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() =>
                            updateQuantity(item.name, item.quantity - 1)
                          }
                          className="p-1 bg-white rounded-md border hover:bg-gray-100"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="text-sm font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.name, item.quantity + 1)
                          }
                          className="p-1 bg-white rounded-md border hover:bg-gray-100"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>

                    <p className="text-sm font-semibold text-gray-800">
                      ₹{itemPrice * item.quantity}
                    </p>
                  </div>
                ))}
              </div>

              {/* Bill Details */}
              <div className="mt-5 bg-gray-50 rounded-xl p-4 text-sm space-y-2">
                <div className="flex justify-between">
                  <span>Item Total</span>
                  <span>₹{itemTotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Fee</span>
                  <span>₹{deliveryFee}</span>
                </div>
                <div className="flex justify-between">
                  <span>GST</span>
                  <span>₹{gst}</span>
                </div>
                <hr />
                <div className="flex justify-between font-bold text-base">
                  <span>Total</span>
                  <span>₹{total.toFixed(2)}</span>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="px-5 pb-5">
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
