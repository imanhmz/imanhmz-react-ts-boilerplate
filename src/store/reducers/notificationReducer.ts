import { NOTIFICATIONS_SET,NOTIFICATIONS_GET,NOTIFICATIONS_PENDING } from '../actions/types';

const initialState = {
    notifications:[],
    pending:false
};

export function notification(state = initialState, action) {
    switch (action.type) {
        case NOTIFICATIONS_SET:
            return {
                ...state,
                pending:false,
                notifications: action.payload
            };
            case NOTIFICATIONS_PENDING:
            return {
                ...state,
                pending:true,
            };
        default:
            return state;
    }
}