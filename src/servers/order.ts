import axios from "axios"

export const getOrderShoe=(data:{})=>{
    return axios({
        url:"https://shop.cyberlearn.vn/api/Users/order",
        method:"POST",
        data:data
    })
}