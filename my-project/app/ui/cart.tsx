import React from 'react';
import { useCart } from '../../app/lib/contexts/cartcontext';

const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity } = useCart();

    const handleQuantityChange = (productId:any, event: any) => {
        const quantity = parseInt(event.target.value);
        if (quantity > 0) {
            updateQuantity(productId, quantity);
        } else {
            removeFromCart(productId);
        }
    };

    return (
        <div>
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>No items in cart</p>
            ) : (
                cartItems.map((item: { id: React.Key | null | undefined; name: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; price: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; quantity: string | number | readonly string[] | undefined; }) => (
                    <div key={item.id}>
                        <h4>{item.name}</h4>
                        <p>{item.price}</p>
                        <input
                            type="number"
                            value={item.quantity}
                            onChange={(event) => handleQuantityChange(item.id, event)}
                        />
                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    </div>
                ))
            )}
        </div>
    );
};

export default Cart;
