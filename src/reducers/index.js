import { combineReducers } from 'redux';
import productReducer from './productReducer';
import categoryList from './categoryReducer'
import menu from "../data.json";

// productList
export const productList = Object.values(menu);

export default combineReducers({
  productList: productReducer,
  categoryList: categoryList
})

