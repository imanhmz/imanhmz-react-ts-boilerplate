import {combineReducers} from 'redux';
import {notification} from "./notificationReducer";

export default combineReducers({
    notification: notification,
});