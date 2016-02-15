import React, { Component, PropTypes } from 'react';

class Aside extends Component {
  handleChange(e) {
    this.props.onUserInput(
      this.refs.filterTextInput.getDOMNode().value
    );

    e.preventDefault();
  }

  render() {
    let { blog, filterText, types } = this.props;

    return (
      <aside id="aside" className="aside">
        <div className="blog">
          <h1 className="blog__title"><a href="/">{blog.title}</a></h1>
          <p className="blog__desc">{blog.description}</p>
        </div>

        <ul className="category">
          <li className="category__item"><a href="/about">About</a></li>
          <li className="category__item"><a href="/ask">Ask</a></li>
          <li className="category__item"><a href="/archive">Archive</a></li>
        </ul>

        <div className="search">
          <label htmlFor="search" className="sr-only">
            Search
            <input type="search" id="search" placeholder="Search Post Type" value={filterText} ref="filterTextInput" onChange={this.handleChange} list="postType" className="awesomplete search__input" />
            <datalist id="postType">
              {
                types.map((v) => {
                  return (
                    <option value={v.toLowerCase()}>{v}</option>
                  );
                })
              }
            </datalist>
          </label>
        </div>

        <p className="copyright">2010–2015</p>
      </aside>
    );
  }
}
Aside.propTypes = {
  types: PropTypes.array.isRequired
};
Aside.defaultProps = {
  types: ['Text', 'Photo', 'Quote', 'Link', 'Chat', 'Audio', 'Video', 'Answer']
};

export default Aside;
