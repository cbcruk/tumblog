import { combineReducers, Reducer } from 'redux'
import { IPostsState } from '../actions/types'
import posts from './posts'

export interface IApplicationState {
  posts: IPostsState
}

const rootReducer: Reducer<IApplicationState> = combineReducers<
  IApplicationState
>({
  posts
})

export default rootReducer
