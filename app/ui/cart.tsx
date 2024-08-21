"use client";
import React from 'react';
import Image from 'next/image';
import { MdOutlineCancel } from "react-icons/md";
import { useCart } from '../lib/contexts/cartcontext'
import { Card, CardFooter } from "./components/ui/card"
import EmptyCart from './emptycart';
import {
    Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger, } from '@/app/ui/components/ui/dialog';
import { Button } from './components/ui/button';
import { Label } from './components/ui/label';
import { Input } from './components/ui/input';
const Cart = () => {
    const { cartItems, removeFromCart } = useCart();
    console.log(cartItems)
        // Convert the cartItems object to an array of items
    const cartItemsArray = Object.values(cartItems);
     // Check if the cart is empty
    const isEmpty = Object.keys(cartItems).length === 0;

//   // Calculate the cart subtotal
    const subTotal = cartItemsArray.reduce((acc:number, item:any) => {
        return acc + item.price * item.quantity;
    }, 0);
//       // Calculate the total item count
    const itemSubtotal = cartItemsArray.reduce((acc:number, item:any) => {
        return  item.price * item.quantity;
    }, 0);
    return (
        <div>
             {isEmpty ? (
                   <EmptyCart />
            ) : (
            <div className='bg-white p-3'>
            <Card className="w-[280px] h-auto bg-white border-none">
            <p className="text-red text-[16px] font-bold p-4">Your Cart <span>({ cartItemsArray.length})</span></p>
               
                    <ul>
                        {cartItemsArray.map((item:any) => (
                            <div  key={item.id} className='flex flex-row text-sm justify-between p-5 '>
                                <div className="flex flex-col">
                                    <h4>{item.name}</h4>
                                    <div className="flex justify-around text-rose-300 ">
                                        <p className='text-red font-bold'>x{ item.quantity}</p>
                                        <p>@${item.price}</p>
                                        <p className="font-bold">${itemSubtotal }</p>
                                    </div>
                                </div>
                                <button className=' flex ' onClick={() => removeFromCart(item.id)}> <MdOutlineCancel /></button>
                            </div>
                        ))}                            
                        </ul>              
           
                    <div className="text-rose-500 flex justify-between p-2 mt-auto">
                        <div>Order Total</div>
                        <div className='font-bold  text-rose-900'>${subTotal.toFixed(2) }</div>
                        </div>                        
                        </Card>
                        <div className=" flex justify-center items-center  p-2 bg-rose-100 mt-2 rounded-lg text-xs">
                            <Image
                                src="/assets/images/icon-carbon-neutral.svg"
                                alt='Carbon-neutral image'
                                width={20}
                                height={20}
                                className='mx-2'
                            />
                            <p className="">This is <span className="font-bold mx-1">carbon-neutral</span> delivery</p>
                        </div>
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button  className='bg-red flex text-white mx-auto w-full text-center justify-center py-1 px-7 rounded-full mt-3' variant="outline">Confirm Order</Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader>
                                <DialogTitle>Order Confirmed</DialogTitle>
                                <DialogDescription>
                                    We hope you enjoy your food! 
                                </DialogDescription>
                                </DialogHeader>
                              
                                <DialogFooter>
                                <Button  className='bg-red flex text-white mx-auto w-full text-center justify-center py-1 px-7 rounded-full mt-3' variant="outline">Start New Order</Button>
                                </DialogFooter>
                            </DialogContent>
                            </Dialog>
                </div>    
            )}        
        </div>
    );
};

export default Cart;
