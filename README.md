# 은수리의 기묘한 모험

망할 Tumblr가 너무 느려서 API를 활용한 방법으로 코드를 변경함.

## API

- [Tumblr API](https://www.tumblr.com/docs/en/api/v2)
- [JSONP](http://blog.garstasio.com/you-dont-need-jquery/ajax/#jsonp)

### [`/posts`](https://www.tumblr.com/docs/en/api/v2#posts)

JSONP + Promise
Promise를 리턴시켜서 thunk 함수로 동작하게 만든다.

Parameter | Value | Description
--- | --- | ---
limit | 3 | 포스트 갯수
offset | 0 (+3) | 포스트 오프셋
type | `[text, quote, link, answer, video, audio, photo, chat]` | 포스트 타입

### [normalizr](https://github.com/paularmstrong/normalizr)

```js
export const post = new Schema('posts');
export const arrayOfPosts = arrayOf(post);
```

## React

### [Create React App](https://github.com/facebookincubator/create-react-app)

Create React App 전반적인 모든 것을 구성. eject하면 돌아갈 수 없으므로 잠시 보류.

#### 장점
- 유지보수

#### 단점
- 소소한 커스터마이징 불가능

### Router

`localhost:3000/search/(:search)` 구조가 필요하므로 react-router로 해당 부분 적용.

### [Redux](http://redux.js.org/)

Redux로 상태를 관리. React 컴포넌트는 Stateless Functional Components로 대부분 구성.

#### redux-thunk

API호출 과정을 때문에 간단하게 thunk를 사용해서 비동기식으로 구현.

#### redux-logger

상태변화를 logger를 사용해서 log로 확인.
