module Styles = {
  open Css;

  let container =
    style([
      display(flexBox),
      justifyContent(spaceBetween),
      padding(px(16)),
    ]);

  let button =
    style([
      display(flexBox),
      alignItems(center),
      height(px(36)),
      padding2(~v=zero, ~h=px(16)),
      boxShadows([
        Post.Styles.shadow(3, 1, -2, rgba(0, 0, 0, 0.2)),
        Post.Styles.shadow(2, 2, 0, rgba(0, 0, 0, 0.14)),
        Post.Styles.shadow(1, 5, 0, rgba(0, 0, 0, 0.12)),
      ]),
      textDecoration(none),
      fontSize(px(12)),
      color(hex("212121")),
      transition(
        ~duration=280,
        ~timingFunction=cubicBesier(0.4, 0.0, 0.2, 1.0),
        "box-shadow",
      ),
      selector(
        "&:hover, &:active",
        [
          Post.Styles.shadow(5, 5, -3, rgba(0, 0, 0, 0.2)),
          Post.Styles.shadow(8, 10, 1, rgba(0, 0, 0, 0.14)),
          Post.Styles.shadow(3, 14, 2, rgba(0, 0, 0, 0.12)),
        ],
      ),
    ]);

  let buttonNext =
    Css.merge([
      button,
      style([
        backgroundColor(hex("212121")),
        color(hex("fff")),
        selector("&::after", [contentRule(">"), marginLeft(em(1.0))]),
      ]),
    ]);

  let buttonPrev =
    Css.merge([
      button,
      style([
        selector("&::before", [contentRule("<"), marginRight(em(1.0))]),
      ]),
    ]);
};

[@react.component]
let make = (~prev, ~next, ~last) => {
  <div className=Styles.container>
    {switch (prev) {
     | "0" => React.null
     | _ =>
       <Link href={j|/page/$prev|j} className=Styles.buttonPrev>
         {React.string({j|이전|j})}
       </Link>
     }}
    {switch (int_of_string(next) >= last) {
     | false =>
       <Link href={j|/page/$next|j} className=Styles.buttonNext>
         {React.string({j|다음|j})}
       </Link>
     | true => React.null
     }}
  </div>;
};