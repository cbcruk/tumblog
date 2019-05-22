module Styles = {
  open Css;

  let container = style([]);

  let image = style([width(pct(100.0)), maxWidth(pct(100.0))]);

  let summary = style([padding(px(20))]);
};

[@react.component]
let make = (~photo) => {
  let (src, summary) = photo;

  <div className=Styles.container>
    <img src alt="" className=Styles.image />
    <div className=Styles.summary> {React.string(summary)} </div>
  </div>;
};