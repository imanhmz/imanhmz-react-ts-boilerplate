import axios from "axios";
import {INotifications} from "../interfaces/notifications";
import {get} from "../lib/api";

export async function fetchNotifications() {
    return await get(`https://jsonplaceholder.typicode.com/posts`);
}