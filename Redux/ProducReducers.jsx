import { ActionType } from "./ActionType";

const intialState = {
    products: [],
  };

export const getProducts = (state = intialState, { type, payload }) => {
   switch (type) {
    case ActionType.GET_PRODUCTS:
        return {
            ...state,
            products: payload,
        };
    default:
        return state;
    }
}

export const selectProduct = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionType.SELECT_PRODUCT:
            return {
                ...state,
                selectedProduct: payload,
            };
        default:
            return state;
    }
}


export const addToCart = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionType.ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, payload],
            };
        default:
            return state;
    }
}

export const removeFromCart = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionType.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(product => product.id !== payload.id),
            };
        default:
            return state;
    }
}