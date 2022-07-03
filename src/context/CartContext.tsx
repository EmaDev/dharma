import { createContext, useEffect, useReducer, useState } from "react";
import { getExtrasPrice } from "../firebase/dbQueries";
import { cartReducer, CartState, itemCart } from "./cartReducer";

interface ItemCart {
    prodId: string;
    name: string;
    quantity: number;
    price: number;
    extras?: {
        chedar: number;
        meat: number;
    } | null;
}
type CartContextProps = {
    cart: ItemCart[];
    extras: { chedar: number; carne: number};
    phone: string;
    addItemToCart: (item: ItemCart) => void;
    removeItemToCart: (id: string) => void;
    deleteCart: () => void;
    updateItem: (id: string, quant: number) => void;
}

export const CartContext = createContext({} as CartContextProps);

const initialState: CartState = {
    cart: []
}
export const CartProvider = ({ children }: any) => {
    const [cartState, dispatch] = useReducer(cartReducer, initialState);
    const [extras, setExtras] = useState({ chedar: 0, carne: 0});
    const [phone, setPhone] = useState<string>('');
     useEffect( () => {
        const funct = async() => {
            const resp = await getExtrasPrice();
            setPhone(resp?.phone);
            setExtras(resp?.extras); 
        }
        funct();
    },[]);
    const addItemToCart = (item: itemCart) => {
        dispatch({ type: 'addItem', payload: item });
    }
    const removeItemToCart = (id: string) => {
        dispatch({ type: 'removeItem', payload: id });
    }
    const updateItem = (id: string, quant: number) => {
        dispatch({ type: 'updateItem', payload: { itemId: id, quant } })
    }
    const deleteCart = () => { }

    return (
        <CartContext.Provider value={{
            cart: cartState.cart,
            extras,
            phone,
            addItemToCart,
            removeItemToCart,
            deleteCart,
            updateItem
        }}>
            {children}
        </CartContext.Provider>
    )
};



