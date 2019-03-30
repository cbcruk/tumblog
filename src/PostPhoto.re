module Styles = {
  open Css;

  let container = style([]);

  let image = style([width(pct(100.0)), maxWidth(pct(100.0))]);

  let summary = style([padding(px(20))]);
};

let component = ReasonReact.statelessComponent("PostPhoto");

let make = (~photo, _children) => {
  ...component,
  render: _self => {
    let (photo, summary) = photo;

    <div className=Styles.container>
      <img src=photo alt="" className=Styles.image />
      <div className=Styles.summary> {ReasonReact.string(summary)} </div>
    </div>;
  },
};