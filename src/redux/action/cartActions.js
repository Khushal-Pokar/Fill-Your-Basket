// Add Items to cart

export const addCart = (product) => {
    return {
        type: "ADD_ITEM",
        payload: product
    }
}

// Delete Items from cart

export const delCart = (product) => {
    return {
        type: "DEL_ITEM",
        payload: product
    }
}