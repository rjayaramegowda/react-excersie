import { combineReducers } from 'redux';
import productReducer from './components/Product/ProductReducer';
import categoryList from './components/Category/CategoryReducer'


export default combineReducers({
  productList: productReducer,
  categoryList: categoryList
})

