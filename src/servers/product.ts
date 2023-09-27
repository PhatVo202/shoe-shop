import axios, { AxiosPromise } from "axios"
import { HttpResponse } from "../interfaces/api";
import { Products } from "../store/reducer/productReducer";

export const fecthProductApi = ():AxiosPromise<HttpResponse<Products[]>> =>{
    return axios({
        url:"https://shop.cyberlearn.vn/api/Product",
        method:"GET"
    });
}

export const fetchKeyProductApi= (keyword:string):AxiosPromise<HttpResponse<Products[]>>=>{
    return axios({
        url:`https://shop.cyberlearn.vn/api/Product?keyword=${keyword}`,
        method:"GET"
    })
}

