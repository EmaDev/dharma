import { createContext, useReducer } from "react";
import { cartReducer, CartState } from "./cartReducer";

interface ItemCart {
    prodId: string;
    name: string;
    quantity: number;
    price: number;
}
type CartContextProps = {
    cart: ItemCart[];
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

    const addItemToCart = (item: ItemCart) => {
        dispatch({ type: 'addItem', payload: item });
    }
    const removeItemToCart = (id: string) => {
        dispatch({type: 'removeItem', payload: id});
    }
    const updateItem = (id: string, quant: number) => {
        dispatch({ type: 'updateItem', payload: { itemId: id, quant } })
    }
    const deleteCart = () => { }

    return (
        <CartContext.Provider value={{
            cart: cartState.cart,
            addItemToCart,
            removeItemToCart,
            deleteCart,
            updateItem
        }}>
            {children}
        </CartContext.Provider>
    )
};



