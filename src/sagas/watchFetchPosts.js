import { call, put, takeLatest } from 'redux-saga/effects'
import { GET } from '../api'

function* fetchPosts(action) {
  const {
    data: { response }
  } = yield call(GET, action.payload)

  yield put({
    type: 'POSTS_FETCH_SUCCEEDED',
    ...response
  })
}

export default function* watchFetchPosts() {
  yield takeLatest('POSTS_FETCH_REQUESTED', fetchPosts)
}
