import {combineReducers} from 'redux';
import { getProducts } from './ProductAction';

const reducers = combineReducers({
    products: getProducts
});
export default reducers;