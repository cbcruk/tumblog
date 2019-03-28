open Belt;

module Styles = {
  open Css;

  let container =
    style([
      padding(px(20)),
      marginTop(px(15)),
      paddingTop(zero),
      fontSize(px(12)),
      color(rgba(0, 0, 0, 0.4)),
    ]);

  let source = style([]);

  let sourceLink = style([color(currentColor)]);

  let tags = style([marginTop(px(15))]);

  let tag = style([]);
};

let component = ReasonReact.statelessComponent("PostFooter");

let make = (~footer, _children) => {
  ...component,
  render: _self => {
    let (title, url, tags) = footer;

    <div className=Styles.container>
      {switch (title, url) {
       | (Some(title), url) =>
         <div className=Styles.source>
           {ReasonReact.string({j|출처: |j})}
           <a href=url target="_blank" className=Styles.sourceLink>
             {ReasonReact.string(title)}
           </a>
         </div>
       | _ => ReasonReact.null
       }}
      <div className=Styles.tags>
        {Array.map(tags, tag =>
           <div key=tag className=Styles.tag>
             {ReasonReact.string({j|#$tag|j})}
           </div>
         )
         |> ReasonReact.array}
      </div>
    </div>;
  },
};