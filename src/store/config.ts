import { AnyAction, combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk, { ThunkDispatch } from "redux-thunk";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import productReducer from "./reducer/productReducer";
const rootReducer = combineReducers({
    productReducer:productReducer,
})

export const store = configureStore({
    reducer: persistReducer({key:"roots",storage: storage},rootReducer),
    devTools:true,
    middleware:[thunk],
})

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch & ThunkDispatch<RootState,any,AnyAction>;