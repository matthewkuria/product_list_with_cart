import React from 'react';
import { MdOutlineCancel } from "react-icons/md";
import { useCart } from '../lib/contexts/cartcontext'
import { Card, CardFooter } from "./components/ui/card"
const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity } = useCart();

 // Function to handle increasing the quantity
    const handleIncreaseQuantity = (productId: any) => {
        const product = cartItems.find((item: { id: any; }) => item.id === productId);
        if (product) {
            updateQuantity(productId, product.quantity + 1);
        }
    };

    // Function to handle decreasing the quantity
    const handleDecreaseQuantity = (productId: any) => {
        const product = cartItems.find((item: { id: any; }) => item.id === productId);
        if (product) {
            if (product.quantity > 1) {
                updateQuantity(productId, product.quantity - 1);
            } else {
                removeFromCart(productId); // Remove item if quantity goes below 1
            }
        }
    };
  // Calculate the cart subtotal
    const subTotal = cartItems.reduce((acc: number, item: { price: number; quantity: number; }) => {
        return acc + item.price * item.quantity;
    }, 0);
      // Calculate the total item count
    const itemSubtotal = cartItems.reduce((acc: any, item: { price:number, quantity: any; }) => {
        return acc + item.price * item.quantity;
    }, 0);
    return (
        <div>
            <Card className="w-[280px] h-auto bg-white border-none">
            <p className="text-red text-[16px] font-bold p-4">Your Cart <span>({ cartItems.length})</span></p>
                {cartItems.length === 0 ? (
                    <p>No items in cart</p>
                ) : (
                    <ul>
                        {cartItems.map((item: { id: React.Key | null | undefined; name: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; price: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; quantity: string | number | undefined; }) => (
                            <div  key={item.id} className='flex flex-row text-sm justify-between p-5 '>
                                <div className="flex flex-col">
                                    <h4>{item.name}</h4>
                                    <div className="flex justify-around text-rose-300 ">
                                        <p className='text-red font-bold'>x{ item.quantity}</p>
                                        <p>@${item.price}</p>
                                        <p className="font-bold">${itemSubtotal.toFixed(2) }</p>
                                    </div>
                                </div>
                                <button className=' flex ' onClick={() => removeFromCart(item.id)}> <MdOutlineCancel /></button>
                            </div>
                        ))}                            
                        </ul>
                        
                )}
           
                    <div className="text-rose-500 flex justify-between p-2 mt-auto">
                        <div>Order Total</div>
                        <div className='font-bold  text-rose-900'>${ subTotal.toFixed(2)}</div>
                    </div>
          
            </Card>           
        </div>
    );
};

export default Cart;
