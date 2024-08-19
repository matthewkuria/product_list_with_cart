import React from 'react';
import { MdOutlineCancel } from "react-icons/md";
import { useCart } from '../lib/contexts/cartcontext'
import { Card, CardFooter } from "./components/ui/card"
const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity } = useCart();

    const handleQuantityChange = (productId:any, event:any) => {
        const quantity = parseInt(event.target.value);
        if (quantity > 0) {
            updateQuantity(productId, quantity);
        } else {
            removeFromCart(productId);
        }
    };
  // Calculate the cart subtotal
    const subtotal = cartItems.reduce((acc: number, item: { price: number; quantity: number; }) => {
        return acc + item.price * item.quantity;
    }, 0);
      // Calculate the total item count
    const itemCount = cartItems.reduce((acc: any, item: { quantity: any; }) => {
        return acc + item.quantity;
    }, 0);
    return (
        <div>
            <Card className="w-[280px] h-[300px] bg-white border-none">
            <p className="text-red text-[16px] font-bold p-4">Your Cart <span>({ cartItems.length})</span></p>
                {cartItems.length === 0 ? (
                    <p>No items in cart</p>
                ) : (
                    <ul>
                        {cartItems.map((item: { id: React.Key | null | undefined; name: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; price: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; quantity: string | number | readonly string[] | undefined; }) => (
                            <div  key={item.id} className='flex flex-row text-sm justify-between p-5 '>
                                <div className="flex flex-col">
                                    <h4>{item.name}</h4>
                                    <div className="flex justify-around text-rose-300 ">
                                        <p className='text-red font-bold'>x{ itemCount}</p>
                                        <p>@${item.price}</p>
                                        <p className="font-bold">${subtotal.toFixed(2) }</p>
                                    </div>
                                </div>
                                <button className=' flex ' onClick={() => removeFromCart(item.id)}> <MdOutlineCancel /></button>
                            </div>
                        ))}                            
                        </ul>
                        
                )}
            <CardFooter>
                    <div className="text-rose-500 flex flex-row justify-around">
                        <p>Order Total</p>
                        <p className='font-bold pl-10'>${ subtotal}</p>
                    </div>
            </CardFooter>
            </Card>           
        </div>
    );
};

export default Cart;
