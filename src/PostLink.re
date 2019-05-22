module Styles = {
  open Css;

  let container =
    style([padding(px(16)), backgroundColor(hex("484848"))]);

  let link =
    style([display(block), textDecoration(none), color(hex("fff"))]);

  let title =
    style([
      backgroundColor(transparent),
      transition(~duration=500, "all"),
      selector("&::after", [contentRule(" >")]),
      selector(
        "&:hover",
        [backgroundColor(hex("fce4ec")), color(hex("484848"))],
      ),
    ]);

  let publisher = style([fontSize(px(12)), opacity(0.8)]);

  let excerpt = style([marginTop(px(12)), color(hex("fff"))]);
};

[@react.component]
let make = (~link) =>
  switch (link) {
  | (Some(url), Some(title), Some(publisher), Some(excerpt)) =>
    <div className=Styles.container>
      <a className=Styles.link href=url target="_blank">
        <div className=Styles.title> {React.string(title)} </div>
        <div className=Styles.publisher> {React.string(publisher)} </div>
      </a>
      <div className=Styles.excerpt> {React.string(excerpt)} </div>
    </div>
  | _ => React.null
  };