import React from 'react';
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
                                        <p className='text-red font-bold'>x{ item.quantity}</p>
                                        <p>@${item.price}</p>
                                        <p className="font-bold">${item.price }</p>
                                    </div>
                                </div>
                                <button className='font-bold' onClick={() => removeFromCart(item.id)}>X</button>
                            </div>
                        ))}
                    </ul>
                )}
            <CardFooter>
                <p className="text-rose-500 mx-auto">Order Total</p>
            </CardFooter>
            </Card>           
        </div>
    );
};

export default Cart;
