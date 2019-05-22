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

[@react.component]
let make = () => <div className=Styles.container />;