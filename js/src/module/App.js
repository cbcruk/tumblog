var React = require('react');
var $ = require('jquery');
var ReactRouter = require('react-router');
var RouteHandler = ReactRouter.RouteHandler;

var Aside = require('./Aside.js');

var App = React.createClass({
  getInitialState: function() {
    return {
      blog: {},
      posts: [],
      current: 1,
      filterText: '',
      total: 0
    }
  },
  getDefaultProps: function() {
    return {
       url: 'http://api.tumblr.com/v2/blog/cbcruk.tumblr.com/posts',
       offset: 20
    }
  },
  handleUserInput: function(filterText) {
    this.setState({
      filterText: filterText
    });
  },
  loadCommentsFromServer: function() {
    $.ajax({
      type: "GET",
      url: this.props.url,
      dataType: 'jsonp',
      data: {
        api_key : "9XQHE6avIyXZBtaiQw8sIG7eNE4Ejzk41cgY2THef9YZr4TuG7",
        offset: this.state.offset || 0
      },
      cache: true,
      success: function(data) {
        if (this.isMounted()) {
          this.setState({
            blog: data.response.blog,
            posts: data.response.posts,
            total: data.response.total_posts
          });
        }
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  componentDidMount: function() {
    this.loadCommentsFromServer();
  },
  render: function() {
    var _props = {
      aside: {
        data: this.state.blog,
        filterText: this.state.filterText,
        onUserInput: this.handleUserInput
      },
      main: {
        data: this.state.posts,
        filterText: this.state.filterText
      }
    };
    return (
      <div className="app">
        <a href="#main" className="sr-only">Skip to main content</a>

        <Aside {..._props.aside} />
        <main id="main" className="main" tabIndex="-1">
          <RouteHandler {..._props.main} />
        </main>
      </div>
    );
  }
});

module.exports = App;