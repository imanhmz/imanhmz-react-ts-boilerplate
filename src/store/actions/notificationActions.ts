import {NotificationTypes} from "./types";
import {INotifications} from "../../interfaces";

export const setNotifications = (notifications: INotifications[]) => {
    return {
        type: NotificationTypes.NOTIFICATIONS_SET,
        payload: notifications
    }
}
export const getNotifications = () => ({type: NotificationTypes.NOTIFICATIONS_GET})
