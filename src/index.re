Css.insertRule(
  "
    *,
    *::before,
    *::after {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }

    body {
      font-family: sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      background-color: #eee;
    }

    a {
      text-decoration: none;
      color: inherit;

      &:hover,
      &:foucs {
        text-decoration: underline;
      }
    }

    img {
      vertical-align: top;
    }
  ",
);

ReactDOMRe.renderToElementWithId(<App />, "app");
ReasonReact.Router.push("");