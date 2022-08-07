import {call,takeLatest,put} from 'redux-saga/effects'
import {NOTIFICATIONS_PENDING, NOTIFICATIONS_SET} from "../actions/types";

const allUsers=()=>{
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))

}
function* notificationWatcher(){
    yield takeLatest(NOTIFICATIONS_PENDING,fetchNotification)
}
function* fetchNotification(){
    try {
     const notifications = yield call(allUsers)
        yield put({
            type:NOTIFICATIONS_SET , notifications :notifications
        })
    }catch (e) {
        console.log('fail fetching notifications')
    }
}

export {notificationWatcher,allUsers}