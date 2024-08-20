"use client"
import Image from "next/image"
import { Card, CardFooter } from "./components/ui/card"
import { Button } from "./components/ui/button"
import { useState } from "react"
import { useCart } from "../lib/contexts/cartcontext"


const CardItem = ({ item }: any) => { 
  const { cartItems,addToCart, decreaseQuantity, increaseQuantity } = useCart();
  const [showControls, setShowControls] = useState(true);
 
 
  

    return (
        <Card className="drop-shadow-none border-none w-[320px] md:w-[120px] lg:w-[150px] md:h-[220px] lg:h-[290px] rounded-md basis-1 flex-auto ">
                {/* The image for the desktop design */}
                <Image
                  src={item.image.desktop}
                  alt={item.name}
                  width={180}
                  height={100}
                  className="rounded-lg flex-none hidden md:hidden lg:block mx-auto"
                /> 
                {/* The image for the tablet design */}
                <Image
                  src={item.image.tablet}
                  alt={item.name}
                  width={350}
                  height={150}
                  className="rounded-md flex-none hidden md:block lg:hidden"
                />
                {/* The image for the mobile design */}
                <Image
                  src={item.image.mobile}
                  alt={item.name}
                  width={350}
                  height={150}
                  className="rounded-md flex-none block md:hidden lg:hidden"
                />              
                <Button
                  onClick={() => addToCart(item)}
                  className="flex mx-auto border rounded-full border-red px-7 py-0 hover:bg-red hover:text-white font-bold ">
                  <Image
                    src="/assets/images/icon-add-to-cart.svg"
                    alt="The add to cart icon for the button"
                    width={20}
                    height={10}
                    className=""
                  />
                    {cartItems[item.id] ? (
                    <div className="controls">
                        <button onClick={()=>decreaseQuantity(item.id)} className="inner-btn">-</button>
                        <span className="quantity">{cartItems[item.id]?.quantity}</span>
                        <button onClick={()=>increaseQuantity(item.id)} className="inner-btn">+</button>
                    </div>
                ) : (
                  "Add to Cart"
                )}
                </Button>
                <CardFooter className="flex flex-col items-start text-left mt-2  px-1 font-bold ">
                  <p className="font-normal text-rose-400">{ item.category}</p>
                  <p className="text-[16px]">{ item.name}</p>
                  <p className=" text-red">${ item.price}</p>
                </CardFooter>
              </Card>
    )
}
export default CardItem