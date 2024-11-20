import { useState, useEffect } from 'react';
import { Context } from './Context';

function Provider({ children }) {
    const [user, setUser] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [cart, setCart] = useState([]);

    const addToCart = (product, quantity) => {
        setCart((prevCart) => {
            const index = prevCart.findIndex((i) => i.id === product.id);

            if (index !== -1) {
                const updateCart = [...prevCart];
                updateCart[index].quantity += quantity;
                return updateCart;
            } else {
                return [...prevCart, { ...product, quantity }];
            }
        });
    };

    useEffect(() => {
        // Retrieve the user info from localStorage when the component mounts
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser)); // Parse the stored user data and set it
        }
    }, []);

    return (
        <Context.Provider value={{ user, setUser, selectedProduct, setSelectedProduct, cart, setCart, addToCart }}>
            {children}
        </Context.Provider>
    );
}

export default Provider;
