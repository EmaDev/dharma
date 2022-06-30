const MAX_PROD = 20;

export interface itemCart {
    prodId: string;
    name: string;
    quantity: number;
    price: number;
    extras?: {
        chedar: number;
        meat: number;
    } | null;
    img?: string;
}
export interface CartState {
    cart: itemCart[];
}

export type CartAction =
    | { type: 'addItem', payload: itemCart }
    | { type: 'searchItem', payload: string }
    | { type: 'removeItem', payload: string }
    | { type: 'updateItem', payload: { itemId: string, quant: number } }
    | { type: 'clearCart' };

export const cartReducer = (state: CartState, action: CartAction): CartState => {
    switch (action.type) {
        case 'addItem':
            const prevItem = state.cart.find(item => item.prodId === action.payload.prodId);
            return prevItem ?
                {
                    ...state,
                    cart: state.cart.map(item => (
                        item.prodId === action.payload.prodId && item.quantity + action.payload.quantity <= MAX_PROD
                            ? { ...item, quantity: item.quantity + action.payload.quantity }
                            : item
                    ))
                }
                :
                {
                    ...state,
                    cart: [...state.cart, action.payload]
                }
        case 'updateItem':
            const itemSearched = state.cart.find(item => item.prodId === action.payload.itemId);

            return itemSearched ?
                {
                    ...state,
                    cart: state.cart.map(item => item.prodId === action.payload.itemId
                        ? { ...item, quantity: action.payload.quant } : item
                    )
                }
                :
                { ...state };
        case 'removeItem':
            return {
                ...state,
                cart: state.cart.filter(item => item.prodId !== action.payload)
            };
        case 'clearCart':
            return {
                ...state,
                cart: []
            };
        default:
            return state;
    }
}