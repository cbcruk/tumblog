var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Posts = require('./Post.js');


var Article = React.createClass({
  render: function() {
    var content;
    var tagNodes;
    var _props;

    if (this.props.attrs.type === 'photo') {
      _props = {
         photos: this.props.attrs.photos[0].alt_sizes[0].url,
         caption: this.props.attrs.caption
      };
      content = <Posts.photo {..._props} />;
    } else if (this.props.attrs.type === 'link') {
      _props = {
         url: this.props.attrs.url,
         publisher: this.props.attrs.publisher,
         title: this.props.attrs.title
      };
      content = <Posts.links {..._props} />;
    }

    if (this.props.attrs.tags.length) {
      tagNodes = this.props.attrs.tags.map(function(tag) {
        return (
          <span className="tags__item">#{tag}</span>
        );
      });
    }

    return (
      <article id={this.props.attrs.id} className="article">
        <div className="article__content">
          {content}
        </div>
        <footer className="article__meta">
          {
            this.props.attrs.source_url &&
            <p className="article__meta__item article__meta__item--source">
              <i className="fa fa-link"></i>
              <q cite={this.props.attrs.source_url}>
                출처: <a href="{this.props.attrs.source_url}">{this.props.attrs.source_url}</a>
              </q>
            </p>
          }
          {
            tagNodes &&
            <p className="article__meta__item article__meta__item--tags">
              <i className="fa fa-tags"></i>
              태그: {tagNodes}
            </p>
          }
          <p className="article__meta__item article__meta__item--date">
            <i className="fa fa-clock-o"></i>
            <time><Link to="post" params={this.props.attrs}>{this.props.attrs.date}</Link></time>
          </p>
        </footer>
      </article>
    );
  }
});

module.exports = Article;