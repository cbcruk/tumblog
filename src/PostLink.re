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

let component = ReasonReact.statelessComponent("PostLink");

let make = (~link, _children) => {
  ...component,
  render: _self => {
    switch (link) {
    | (Some(url), Some(title), Some(publisher), Some(excerpt)) =>
      <div className=Styles.container>
        <a className=Styles.link href=url target="_blank">
          <div className=Styles.title> {ReasonReact.string(title)} </div>
          <div className=Styles.publisher>
            {ReasonReact.string(publisher)}
          </div>
        </a>
        <div className=Styles.excerpt> {ReasonReact.string(excerpt)} </div>
      </div>
    | _ => ReasonReact.null
    };
  },
};