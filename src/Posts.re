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

let component = ReasonReact.statelessComponent("Posts");

let make = (~items: array(TumblrData.post), _children) => {
  ...component,
  render: _self =>
    <div className=Styles.container>
      {switch (items) {
       | [||] => ReasonReact.null
       | _ =>
         Array.map(items, item => <Post key={string_of_int(item.id)} item />)
         |> ReasonReact.array
       }}
    </div>,
};