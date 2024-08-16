"use client";
import Image from "next/image";
// Import the data in the data.json file
import data from "./lib/data.json"
import { Card,CardFooter,
} from "./ui/components/ui/card";
import CardItem from "./ui/card-item";
import { useState } from "react";
import Cart from "./ui/cart";
export default function Home() { 
  return (
    <main className="flex flex-col md:flex-row p-12 w-full bg-rose-100">
      <div className="flex flex-col">
        <h1 className="font-bold my-5 text-3xl">Desserts</h1>
        <div className="md:max-w-md lg:max-w-3xl flex flex-col md:flex md:flex-row lg:flex md:flex-wrap gap-10">
          {/* Map through the data from the JSON file and return a  card for each item */}
            {data.map((item) => {
              return (
                <CardItem key={item.name} item={item} />
            )
          })}
        </div>
      </div>
      <div className="md:ml-56">
        <Cart />
        <Card className="w-[280px] h-[300px] bg-white border-none">
          <p className="text-red text-[16px] font-bold p-4">Your Cart <span>(0)</span></p>
          <Image
            src="/assets/images/illustration-empty-cart.svg"
            height={150}
            width={150}
            alt="The image illustration for the empty cart"
            className="mx-auto"
          />
          <CardFooter>
            <p className="text-rose-500 mx-auto">Your items will appear here</p>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
