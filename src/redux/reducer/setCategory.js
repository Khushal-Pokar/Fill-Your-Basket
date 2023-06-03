
const setCategory = (state = '', action) => {
    const category = action.payload;
    switch (action.type) {
        case "SET_CAT":
            return `https://dummyjson.com/products/category/${category}`;
    
        default:
            return state;
    }
}