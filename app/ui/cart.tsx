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
import Link from 'next/link';
const Cart = () => {
    const { cartItems, removeFromCart } = useCart();
    console.log(cartItems)
        // Convert the cartItems object to an array of items
    const cartItemsArray = Object.values(cartItems);
     // Check if the cart is empty
    const isEmpty = Object.keys(cartItems).length === 0;

//   // Calculate the cart subtotal
    const totalCartPrice = cartItemsArray.reduce((acc:number, item:any) => {
        return acc + item.price * item.quantity;
    }, 0);
//       // Calculate the total item count
   
    return (
        <div>
             {isEmpty ? (
                   <EmptyCart />
            ) : (
            <div className='bg-white p-3'>
            <Card className=" h-auto bg-white border-none">
            <p className="text-red text-[16px] font-bold p-4">Your Cart <span>({ cartItemsArray.length})</span></p>               
                    <ul>
                        {cartItemsArray.map((item:any) => (
                            <div  key={item.id} className='flex flex-row text-sm items-center justify-between p-4 w-full'>
                                <div className="flex flex-col text-left">
                                    <h4>{item.name}</h4>
                                    <div className="flex gap-2 text-rose-300 ">
                                        <p className='text-red font-bold'>x{ item.quantity}</p>
                                        <p>@${item.price}</p>
                                        <p className="font-bold">${item.price * item.quantity!}</p>
                                    </div>
                                </div>
                                <button className=' flex ' onClick={() => removeFromCart(item.id)}> <MdOutlineCancel /></button>
                            </div>
                        ))}                            
                        </ul>              
           
                        <div className="text-rose-500 flex justify-between p-2 mt-auto">
                            <div>Order Total</div>
                            <div className='font-bold  text-rose-900'>${totalCartPrice.toFixed(2) }</div>
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
                        {/* The Modal component */}
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button  className='bg-red flex text-white mx-auto w-full text-center justify-center py-1 px-7 rounded-full mt-3' variant="outline">Confirm Order</Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader>
                                    <Image
                                        src="/assets/images/icon-order-confirmed.svg"
                                        alt='The order confirmed tick'
                                        height={30}
                                        width={30}
                                    />
                                <DialogTitle className='font-bold text-2xl py-1'>Order Confirmed</DialogTitle>
                                <DialogDescription className='text-rose-500 py-2'>
                                    We hope you enjoy your food! 
                                </DialogDescription>
                                </DialogHeader>
                                {cartItemsArray.map((item: any) => (
                                    <>
                                    <div key={item.id} className='flex flex-row text-xs justify-between items-center px-5 py-2 rounded-sm bg-rose-100 mt-0'>                                       
                                        <div className="flex">                                
                                            <Image
                                                src={item.image.thumbnail}
                                                alt="The image of {}"
                                                height={40}
                                                width={40}
                                                className='block mx-1'
                                            />
                                            <div className="flex flex-col justify-around font-bold text-xs mx-2">                                              
                                                <p>{item.name}</p>
                                                <div className="flex">
                                                    <p className='text-red '>x{ item.quantity}</p> 
                                                    <p className="text-rose-400 font-normal px-2">@${item.price }</p>
                                                </div>                                               
                                            </div>
                                        </div>
                                        <div className="">
                                            <p className="font-semibold ">${item.price * item.quantity!}</p>
                                        </div>
                                    </div>                                    
                                    </>                                               
                                ))}                                
                                <div className="text-rose-500 flex justify-between p-2 mt-auto">
                                    <div>Order Total</div>
                                    <div className='font-bold  text-rose-900'>${totalCartPrice.toFixed(2) }</div>
                                </div>
                                <DialogFooter className='py-4'>                                    
                                    <Button  className='bg-red flex text-white mx-auto w-full text-center justify-center py-1 px-7 rounded-full mt-3' variant="outline"><Link href="/">Start New Order</Link></Button>                                  
                                </DialogFooter>
                            </DialogContent>
                            </Dialog>
                </div>    
            )}        
        </div>
    );
};

export default Cart;
