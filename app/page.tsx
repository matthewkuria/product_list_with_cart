"use client";
import Image from "next/image";
// Import the data in the data.json file
import data from "./lib/data.json"
import { Card,CardFooter,
} from "./ui/components/ui/card";
import CardItem from "./ui/card-item";
import Cart from "./ui/cart";
import { useCart } from './lib/contexts/cartcontext'
export default function Home() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
    // Check if the cart is empty
    const isEmpty = Object.keys(cartItems).length === 0;

  return (
    <main className="grid grid-cols-1 md:grid-cols-2 p-10 w-full bg-rose-100">
      <div className="">
        <h1 className="font-bold my-5 text-3xl">Desserts</h1>
        <div className="md:max-w-md lg:max-w-3xl grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {/* Map through the data from the JSON file and return a  card for each item */}
            {data.map((item) => {
              return (
                <CardItem key={item.id} item={item} />
            )
          })}
        </div>
      </div>
      <div className="md:ml-56">      
          <Cart />        
      </div>
    </main>
  );
}
