type action =
  | Loaded(TumblrData.posts)
  | Navigate(string);

type state = {
  page: string,
  total_posts: int,
  items: array(TumblrData.post),
};

[@react.component]
let make = () => {
  let (state, dispatch) =
    React.useReducer(
      (state, action) =>
        switch (action) {
        | Loaded({total_posts, items}) => {...state, total_posts, items}
        | Navigate(page) => {...state, page}
        },
      {total_posts: 0, page: "1", items: [||]},
    );

  let url = ReasonReactRouter.useUrl();
  React.useEffect1(
    () => {
      switch (url.path) {
      | ["page", page] =>
        TumblrData.fetchPosts(
          page,
          posts => {
            dispatch(Navigate(page));
            dispatch(Loaded(posts));
          },
        )
      | _ => TumblrData.fetchPosts("1", posts => dispatch(Loaded(posts)))
      };

      Webapi.Dom.(Window.scrollTo(0.0, 0.0, window));

      Some(() => ());
    },
    [|url.path|],
  );

  let {items, page, total_posts} = state;
  let page = int_of_string(page);
  let prev = string_of_int(page - 1);
  let next = string_of_int(page + 1);
  let last = total_posts / 5;

  <> <Header /> <Posts items /> <Nav prev next last /> </>;
};