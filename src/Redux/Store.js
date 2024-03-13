import { combineReducers, configureStore } from '@reduxjs/toolkit'
import MyProductReducer from '../Redux/Product'
import MyCartReducer from '../Redux/Mycart';
import  storage  from 'redux-persist/lib/storage';
import  persistReducer  from 'redux-persist/es/persistReducer';


let persistConfig={

  key:'root',
  storage
};

let rootReducer=combineReducers({
  product: MyProductReducer,
  cart:MyCartReducer
});
let persistedReducer=persistReducer(persistConfig,rootReducer);

export const mystore = configureStore({
  reducer:persistedReducer
});
