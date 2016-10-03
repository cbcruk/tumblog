import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTumblr } from '../actions';
import Aside from '../components/Aside';
import './App.css';

class App extends Component {
  componentDidMount() {
    const { dispatch, params } = this.props;

    dispatch(fetchTumblr(params.type));
  }

  render() {
    return (
      <div className="App">
        <Aside blog={this.props.blog} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  blog: state.blog
});

export default connect(
  mapStateToProps
)(App);
