import React from 'react';
import { MdOutlineCancel } from "react-icons/md";
import { useCart } from '../lib/contexts/cartcontext'
import { Card, CardFooter } from "./components/ui/card"
import EmptyCart from './emptycart';
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
        return acc + item.price * item.quantity;
    }, 0);
    return (
        <div>
             {isEmpty ? (
                   <EmptyCart />
                ) : (
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
                                        <p className="font-bold">${ }</p>
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
            )}        
        </div>
    );
};

export default Cart;
