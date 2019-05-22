open Belt;

module Styles = {
  open Css;

  let container =
    style([
      padding(px(16)),
      maxWidth(px(540)),
      margin2(~v=px(0), ~h=auto),
    ]);
};

[@react.component]
let make = (~items: array(TumblrData.post)) => {
  <div className=Styles.container>
    {switch (items) {
     | [||] => React.null
     | _ =>
       Array.map(items, item => <Post key={string_of_int(item.id)} item />)
       |> React.array
     }}
  </div>;
};