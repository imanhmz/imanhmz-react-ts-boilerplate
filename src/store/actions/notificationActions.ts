import {NOTIFICATIONS_GET,NOTIFICATIONS_SET} from "./types";

export const setNotifications=(notifications)=>{
    return{
        type:NOTIFICATIONS_SET,
        payload:notifications
    }
}
export const getNotifications=()=>{
    return{
        type:NOTIFICATIONS_GET,
        payload:null
    }
}
