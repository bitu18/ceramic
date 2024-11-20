import { useContext } from 'react';
import { Context } from './Context';

export const useProduct = () => {
    const { selectedProduct, setSelectedProduct } = useContext(Context);

    return {
        selectedProduct,
        setSelectedProduct,
    };
};

export const useCart = () => {
    const { cart, setCart, addToCart } = useContext(Context);

    return {
        cart,
        setCart,
        addToCart,
    };
};
export const useUserInfor = () => {
    const { user, setUser } = useContext(Context);

    return {
        user,
        setUser,
    };
};
