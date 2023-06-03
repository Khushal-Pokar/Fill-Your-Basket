const cart = [];

const handleCart = (state = cart, action) => {
    const product = action.payload;
    switch (action.type) {
        case "ADD_ITEM":
            // Check if the item already exists in cart
            const exist1 = state.find((x) => x.id === product.id);
            if(exist1) {
                // Increase quantity
                return state.map((x) => x.id === product.id ? {...x, qty: x.qty + 1} : x);
            }
            else {
                const product = action.payload;
                return [
                    ...state,
                    {
                        ...product,
                        qty: 1,
                    }
                ]
            }

        case "DEL_ITEM":
            const exist2 = state.find((x) => x.id === product.id);
            if(exist2.qty === 1) {
                return state.filter((x) => x.id !== product.id);
            }
            else {
                return state.map((x) => x.id === product.id ? {...x, qty: x.qty - 1} : x);
            }
    
        default:
            return state;
    }
}

export default handleCart;