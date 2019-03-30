type actions =
  | Loaded(TumblrData.posts)
  | NavigateWithFetch(string);

type state = {
  page: string,
  total_posts: int,
  items: array(TumblrData.post),
};

let component = ReasonReact.reducerComponent("App");

let make = _children => {
  ...component,
  reducer: (action, state) =>
    switch (action) {
    | Loaded({total_posts, items}) =>
      ReasonReact.Update({...state, total_posts, items})
    | NavigateWithFetch(page) =>
      ReasonReact.UpdateWithSideEffects(
        {...state, page},
        self =>
          TumblrData.fetchPosts(
            page,
            posts => {
              self.send(Loaded(posts));
              %raw
              "window.scrollTo(0, 0)";
            },
          ),
      )
    },
  initialState: () => {total_posts: 0, page: "1", items: [||]},
  didMount: self => {
    let watchId =
      ReasonReact.Router.watchUrl(url =>
        switch (url.path) {
        | ["page", page] => self.send(NavigateWithFetch(page))
        | _ => self.send(NavigateWithFetch("1"))
        }
      );
    self.onUnmount(() => ReasonReact.Router.unwatchUrl(watchId));
  },
  render: ({state}) => {
    let {items, page, total_posts} = state;
    let page = int_of_string(page);
    let prev = string_of_int(page - 1);
    let next = string_of_int(page + 1);
    let last = total_posts / 5;

    <> <Header /> <Posts items /> <Nav prev next last /> </>;
  },
};