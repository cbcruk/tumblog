var React = require('react');
var ReactRouter = require('react-router');
var RouteHandler = ReactRouter.RouteHandler;
var _ = require('lodash');

var Permal = React.createClass({
  render: function() {
    var _id = this.props.params.id;
    var _item = _.find(this.props.data, function(item) {
      return item.id == _id;
    });

    return (
      <div id="page" className="page page--permal">
        <RouteHandler attrs={_item} />
      </div>
    );
  }
});

module.exports = Permal;