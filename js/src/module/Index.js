var React = require('react');
var ReactRouter = require('react-router');
var RouteHandler = ReactRouter.RouteHandler;
var Link = ReactRouter.Link;

var Article = require('./Article.js');

var Index = React.createClass({
  render: function() {
    var articleNodes = this.props.data.map(function(post, index) {
      var _props = {
        key: index,
        attrs: post
      };
      if (post.type.indexOf(this.props.filterText) === -1) {
        return;
      }
      return (
        <Article {..._props} />
      );
    }.bind(this));

    return (
      <div id="page" className="page page--index">
        {articleNodes}
      </div>
    );
  }
});

module.exports = Index;