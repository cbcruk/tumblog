import React, { Component, PropTypes } from 'react';

import Aside from './Aside.jsx';
import Index from './Index.jsx';

class App extends Component {
  constructor() {
    super();

    this.state = {
      blog: {},
      posts: [],
      current: 1,
      filterText: '',
      total: 0
    };
  }

  loadCommentsFromServer() {
    $.ajax({
      type: "GET",
      url: this.props.url,
      dataType: 'jsonp',
      data: {
        api_key : "9XQHE6avIyXZBtaiQw8sIG7eNE4Ejzk41cgY2THef9YZr4TuG7",
        offset: 10
      },
      cache: true,
      success: (data) => {
        this.setState({
          blog: data.response.blog,
          posts: data.response.posts,
          total: data.response.total_posts
        });
      },
      error: (xhr, status, err) => {
        console.error(this.props.url, status, err.toString());
      }
    });
  }

  componentDidMount() {
    this.loadCommentsFromServer();
  }

  handleUserInput(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  render() {
    let { blog, filterText, posts } = this.state;

    let props = {
      aside: {
        blog: blog,
        filterText: filterText,
        onUserInput: this.handleUserInput
      },
      main: {
        posts: posts,
        filterText: filterText
      }
    };

    return (
      <div className="app">
        <Aside {...props.aside} />
        <main
          id="main"
          className="main"
          tabIndex="-1"
        >
          <Index {...props.main} />
        </main>
      </div>
    );
  }
}
App.propTypes = {
  url: PropTypes.string.isRequired
};
App.defaultProps = {
  url: 'http://api.tumblr.com/v2/blog/cbcruk.tumblr.com/posts',
};

export default App;
