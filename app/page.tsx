"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const products = [
    {
      id: 1,
      name: "Pedigree Adult Dog Food",
      price: 850,
      image: "/dog1.jpg",
    },
    {
      id: 2,
      name: "Royal Canin Puppy Food",
      price: 1200,
      image: "/dog2.jpg",
    },
    {
      id: 3,
      name: "Aozi Beef Dog Food",
      price: 950,
      image: "/dog3.jpg",
    },
  ];

  const [cart, setCart] = useState<any[]>([]);

  const addToCart = (product: any) => {
    setCart([...cart, product]);
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="min-h-screen bg-yellow-50 p-10">
      <h1 className="text-4xl font-bold text-center mb-10">
        🐶 Dog Food Shop System
      </h1>

      {/* Product List */}
      <div className="grid md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-5 rounded-xl shadow-md text-center"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={200}
              height={200}
              className="mx-auto"
            />
            <h2 className="text-xl font-semibold mt-4">{product.name}</h2>
            <p className="text-lg text-green-600 font-bold">
              ₱{product.price}
            </p>
            <button
              onClick={() => addToCart(product)}
              className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart Section */}
      <div className="mt-16 bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-4">🛒 Shopping Cart</h2>

        {cart.length === 0 ? (
          <p>No items in cart.</p>
        ) : (
          <>
            <ul className="space-y-2">
              {cart.map((item, index) => (
                <li key={index} className="flex justify-between">
                  <span>{item.name}</span>
                  <span>₱{item.price}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 text-xl font-bold text-right">
              Total: ₱{totalPrice}
            </div>
          </>
        )}
      </div>
    </div>
  );
}