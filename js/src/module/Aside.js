import React from 'react';

class Aside extends React.Component {
  static defaultProps = {
    types: ['Text', 'Photo', 'Quote', 'Link', 'Chat', 'Audio', 'Video', 'Answer']
  }
  static propTypes = {
    types: React.PropTypes.array.isRequired
  }
  handleChange = (e) => {
    this.props.onUserInput(
      this.refs.filterTextInput.getDOMNode().value
    );

    e.preventDefault();
  }
  render = () => {
    return (
      <aside id="aside" className="aside">
        <div className="blog">
          <h1 className="blog__title"><a href="/">{this.props.data.title}</a></h1>
          <p className="blog__desc">{this.props.data.description}</p>
        </div>

        <ul className="category">
          <li className="category__item"><a href="/about">About</a></li>
          <li className="category__item"><a href="/ask">Ask</a></li>
          <li className="category__item"><a href="/archive">Archive</a></li>
        </ul>

        <div className="search">
          <input type="search" placeholder="Search Post Type" value={this.props.filterText} ref="filterTextInput" onChange={this.handleChange} list="postType" className="search__input" />
          <datalist id="postType">
            {
              this.props.types.map(v => {
                return (
                  <option value={v.toLowerCase()}>{v}</option>
                );
              })
            }
          </datalist>
        </div>

        <p className="copyright">2010–2015</p>
      </aside>
    );
  }
}

export default Aside;
