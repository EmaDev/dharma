export interface itemCart {
    prodId: string;
    name: string;
    quantity: number;
    price: number;
    img?: string;
}
export interface CartState {
    cart: itemCart[];
    //date: Date;
    //client: {name: string; address:string};
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
                    cart: state.cart.map( item => 
                    item.prodId === action.payload.prodId
                    ? {...item,quantity: item.quantity + action.payload.quantity}    
                    : item
                    )
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
                cart: state.cart.map( item => item.prodId === action.payload.itemId
                ? {...item, quantity: action.payload.quant} : item    
                )
            }
            : 
            {...state};
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

const filterState = (cart: itemCart[], payload: itemCart) => {

    let isInclude = false;

    const newCart = cart.forEach(item => {
        if (item.prodId === payload.prodId) {
            isInclude = true;
            item.quantity = item.quantity + payload.quantity;
        }
    })

    if (!isInclude) {
        //newCart.push(payload);
    }

    console.log(newCart);

}