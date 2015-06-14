var React = require('react');
var ReactRouter = require('react-router');

var Link = ReactRouter.Link;

var Aside = React.createClass({
  handleChange: function() {
    this.props.onUserInput(
      this.refs.filterTextInput.getDOMNode().value
    );
  },
  render: function() {
    function covertYear(time) {
      var date = new Date(1970, 0, 0, 0, 0, time);
      return date.getFullYear();
    }

    var type = ['Text', 'Photo', 'Quote', 'Link', 'Chat', 'Audio', 'Video', 'Answer'];
    var typeNodes = type.map(function(item) {
      return (
        <option value={item.toLowerCase()}>{item}</option>
      );
    });

    return (
      <aside id="aside" className="aside">
        <div className="blog">
          <h1 className="blog__title"><Link to="/">{this.props.data.title}</Link></h1>
          <p className="blog__desc">{this.props.data.description}</p>
        </div>

        <ul className="category">
          <li className="category__item"><Link to="about">About</Link></li>
          <li className="category__item"><a href="/ask">Ask</a></li>
          <li className="category__item"><a href="/archive">Archive</a></li>
        </ul>

        <form>
          <div className="search">
            <input type="search" value="" placeholder="Search Post Type" value={this.props.filterText} ref="filterTextInput" onChange={this.handleChange} list="postType" className="search__input" />
            <datalist id="postType">
              {typeNodes}
            </datalist>
          </div>
        </form>

        <p className="copyright">2010–{covertYear(this.props.data.updated)}</p>
      </aside>
    );
  }
});

module.exports = Aside;