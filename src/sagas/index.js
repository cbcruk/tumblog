import { all, fork } from 'redux-saga/effects'
import watchFetchPosts from './watchFetchPosts'

export default function* rootSaga() {
  yield all([fork(watchFetchPosts)])
}
