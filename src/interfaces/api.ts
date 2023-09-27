import { Products } from "../store/reducer/productReducer";

export interface HttpResponse<C> {
    statusCode:number;
    message:string;
    content:C;
    dataTime:string;
}