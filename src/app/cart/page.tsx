'use client'

import { useCart } from "@/context/CartContext"

// import { useCart } from '../contexts/CartContext'

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, clearCart, getCartTotal } = useCart()

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Savat</h2>
      {cart.map((item) => (
        <div key={item.id} className="mb-4 p-4 border rounded">
          <h3 className="text-xl font-semibold">{item.name}</h3>
          <p className="mb-2">Narxi: ${item.price}</p>
          <p className="mb-2">Miqdori: {item.quantity}</p>
          <div className="flex space-x-2">
            <button 
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              className="bg-gray-300 px-2 py-1 rounded"
            >
              -
            </button>
            <button 
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="bg-gray-300 px-2 py-1 rounded"
            >
              +
            </button>
            <button 
              onClick={() => removeFromCart(item.id)}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              O'chirish
            </button>
          </div>
        </div>
      ))}
      <p className="text-xl font-bold">Jami: ${getCartTotal()}</p>
      <button 
        onClick={clearCart}
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Savatni tozalash
      </button>
    </div>
  )
}

