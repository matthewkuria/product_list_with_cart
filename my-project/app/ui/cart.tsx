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
         
          <CardFooter>
            <p className="text-rose-500 mx-auto">Order Total</p>
          </CardFooter>
        </Card>
            <h2></h2>
            {cartItems.length === 0 ? (
                <p>No items in cart</p>
            ) : (
                <ul>
                    {cartItems.map((item: { id: React.Key | null | undefined; name: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; price: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; quantity: string | number | readonly string[] | undefined; }) => (
                        <li key={item.id}>
                            <h4>{item.name}</h4>
                            <p>Price: {item.price}</p>
                            <p>Quantity: 
                                <input
                                    type="number"
                                    value={item.quantity}
                                    onChange={(event) => handleQuantityChange(item.id, event)}
                                    min="1"
                                />
                            </p>
                            <button onClick={() => removeFromCart(item.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;
