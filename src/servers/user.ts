import axios, { AxiosPromise } from "axios"
import { HttpResponse } from "../interfaces/api";

interface SignIn{
    email:string;
    password:string
}

interface Users{
    email: string;
    accessToken: string
}

export interface Profile {
    image:string,
    avatar:string,
    deleted:boolean,
    facebookId:string,
    phone:string,
    gender:string,
    password:string,
    name:string,
    email:string,
    ordersHistory:[]
}

export interface Register{
    email:string,
    password:string,
    name:string,
    gender:boolean,
    phone:string
}


//dang nhap
export const signInApi = (data:SignIn):AxiosPromise<HttpResponse<Users[]>>=>{
    return axios({
        url:"https://shop.cyberlearn.vn/api/Users/signin",
        method:"POST",
        data:data,
    })
}

//dang ky
export const registerApi = (data:Register):AxiosPromise<HttpResponse<Register[]>>=>{
    return axios({
        url:"https://shop.cyberlearn.vn/api/Users/signup",
        method:"POST",
        data:data
    })
}

export const fetchProfileApi = (accessToken:string):AxiosPromise<HttpResponse<Profile[]>>=>{
    return axios({
        url:"https://shop.cyberlearn.vn/api/Users/getProfile",
        method:"POST",
        headers:{
            "Authorization": `Bearer ${accessToken}`
        }
    })
}
