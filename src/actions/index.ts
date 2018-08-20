import { ActionCreator } from 'redux'
import { IFetchRequestAction, IFetchSuccessAction } from './types'

export const fetchRequestPosts: ActionCreator<
  IFetchRequestAction
> = payload => ({
  type: 'POSTS_FETCH_REQUESTED',
  payload
})

export const fetchSuccessPosts: ActionCreator<
  IFetchSuccessAction
> = response => ({
  type: 'POSTS_FETCH_SUCCEEDED',
  ...response
})
