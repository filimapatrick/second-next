import { ActionType } from "./ActionType";

export const getProducts = () => {
    return {
        type: ActionType.GET_PRODUCTS,
    };
    }
export const selectProduct = (product) => {
    return {
        type: ActionType.SELECT_PRODUCT,
        product: product,
    };
}
export const addToCart = (product) => {
    return {
        type: ActionType.ADD_TO_CART,
        product: product,
    };
}
export const removeFromCart = (product) => {

    return {
        type: ActionType.REMOVE_FROM_CART,
        product: product,
    };
}

