var React = require('react');
var ReactRouter = require('react-router');

var App     = require('./module/App.js'),
    Post    = require('./module/Post.js'),
    Index   = require('./module/Index.js'),
    Permal  = require('./module/Permal.js'),
    Article = require('./module/Article.js');

var DefaultRoute = ReactRouter.DefaultRoute;
var Route = ReactRouter.Route;

var routes = (
  <Route handler={App} path="/">
    <Route name="index" path="/" handler={Index}></Route>
    <Route name="permal" path="/post" handler={Permal}>
      <Route name="about" path="about" handler={Post.about} />
      <Route name="post" path=":id" handler={Article} />
    </Route>
    <Route name="page" path="/page/:current" handler={Index}></Route>
  </Route>
);

ReactRouter.run(routes, function(Handler) {
  React.render(<Handler />, document.body);
});