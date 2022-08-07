import {call, takeLatest, put} from 'redux-saga/effects'
import {NotificationTypes} from "../actions/types";
import {fetchNotifications} from "../../services";
import {setNotifications} from "../actions";
console.log('wathasdasddced')

function* fetchNotificationsData<async>(): any {
    const {data} = yield call(fetchNotifications);
    console.log(data
    )
    yield put(setNotifications(data));
}

function* notificationWatcher() {
    console.log('wathced')
    yield takeLatest(NotificationTypes.NOTIFICATIONS_GET, fetchNotificationsData)
}

export default notificationWatcher
