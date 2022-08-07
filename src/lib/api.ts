import axios from "axios";
import {INotifications} from "../interfaces";

export const get=async (url:string) : Promise<INotifications[]> =>{
    return await axios.get(`https://jsonplaceholder.typicode.com/posts`)
}