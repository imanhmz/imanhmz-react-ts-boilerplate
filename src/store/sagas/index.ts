import {all,fork} from 'redux-saga/effects'
import {notificationSaga,allUsers} from './notificationSaga'

export default function* rootSaga(){
    yield fork(allUsers)
    yield fork(allUsers)
}
// export default function* rootSaga() {
//     yield all([
//         helloSaga(),
//         watchIncrementAsync()
//     ])
// }