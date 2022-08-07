import {all,fork} from 'redux-saga/effects'
import Notification from './notificationSaga'
export default function* rootSaga() {
    yield all([
        Notification()
    ])
}