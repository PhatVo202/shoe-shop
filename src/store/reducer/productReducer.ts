import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fecthProductApi, fetchKeyProductApi } from '../../servers/product';

export interface Products{
    id:number;
    name:string;
    alias:string;
    price:number;
    description:string;
    size:number[];
    shortDescription:string;
    quantity:number;
    deleted:boolean;
    categories:[];
    relatedProducts:string;
    feature:boolean;
    image:string
}

interface ProductState{
    products: Products[]
} 

const initialState = {
 products:[],
} as ProductState

const productReducer = createSlice({
  name: "productReducer",
  initialState,
  reducers: {},
  extraReducers(builder) {
   builder.addCase(fetchProductAction.fulfilled,(state,action)=>{
    state.products = action.payload
   })
   builder.addCase(fetchKeyProductAction.fulfilled,(state,action)=>{
    state.products = action.payload
   })
  },
});

export const {} = productReducer.actions

export default productReducer.reducer

export const fetchProductAction = createAsyncThunk("product/fetchProducts",async()=>{
    const result = await fecthProductApi();
    return result.data.content;
})

export const fetchKeyProductAction = createAsyncThunk("product/fetchKeyProduct",async(keyword:string)=>{
    const result = await fetchKeyProductApi(keyword);
    return result.data.content;
})

