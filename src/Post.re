module Styles = {
  open Css;

  let shadow = (y, b, s, c) =>
    boxShadow(~y=px(y), ~blur=px(b), ~spread=px(s), c);

  let container =
    style([
      backgroundColor(hex("fff")),
      borderRadius(px(3)),
      boxShadows([
        shadow(3, 1, -2, rgba(0, 0, 0, 0.2)),
        shadow(2, 2, 0, rgba(0, 0, 0, 0.14)),
        shadow(1, 5, 0, rgba(0, 0, 0, 0.12)),
      ]),
      fontSize(px(14)),
      color(hex("444")),
      selector("& + &", [marginTop(px(20))]),
    ]);
};

[@react.component]
let make = (~item: TumblrData.post) => {
  let photo = (item.photos[0], item.summary);
  let link = (item.url, item.title, item.publisher, item.excerpt);
  let footer = (item.source_title, item.source_url, item.tags);

  <div className=Styles.container>
    {switch (item._type) {
     | "photo" => <PostPhoto photo />
     | "link" => <PostLink link />
     | _ => React.null
     }}
    <PostFooter footer />
  </div>;
};