module Styles = {
  open Css;

  let container =
    style([
      display(flexBox),
      justifyContent(spaceBetween),
      alignItems(center),
      position(sticky),
      top(zero),
      padding(px(16)),
      backgroundColor(hex("212121")),
    ]);
};

let component = ReasonReact.statelessComponent("Header");

let make = _children => {
  ...component,
  render: _self => <div className=Styles.container />,
};