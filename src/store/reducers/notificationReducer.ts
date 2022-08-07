import {NotificationTypes} from '../actions/types';
import {IAction} from "../../interfaces";

const initialState = {
    notifications: [],
    pending: true
};

export function notification(state = initialState, action: IAction) {
    switch (action.type) {
        case NotificationTypes.NOTIFICATIONS_SET:
            return {
                ...state,
                pending: false,
                notifications: action.payload
            };
        default:
            return state;
    }
}