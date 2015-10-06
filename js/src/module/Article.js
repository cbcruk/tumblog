import React from 'react';
import Posts from './Post.js';

class Tags extends React.Component {
  render = () => {
    var { tags } = this.props;

    if (tags.length > 0) {
      return (
        <p className="article__meta__item article__meta__item--tags">
          {
            tags.map(tag => {
              return (
                <span className="tags__item">#{tag}</span>
              );
            })
          }
        </p>
      );
    } else {
      return false;
    }
  }
}

class Source extends React.Component {
  render = () => {
    var { source } = this.props;

    if (source) {
      return (
        <p className="article__meta__item article__meta__item--source">
          <q cite={source}>
            <a href="{source}">{source}</a>
          </q>
        </p>
      );
    } else {
      return false;
    }
  }
}

class Title extends React.Component {
  render = () => {
    var { props } = this;

    if (props.title && props.type === 'text') {
      return (
        <h3 className="article__title">{props.title}</h3>
      )
    } else {
      return false;
    }
  }
}

class Content extends React.Component {
  render = () => {
    var { attrs } = this.props;
    let title;
    let content;
    let props;

    switch (attrs.type) {
      case 'photo':
        props = {
           photos: attrs.photos[0].alt_sizes[0].url,
           caption: attrs.caption
        };
        content = <Posts.photo {...props} />;
        break;

      case 'link':
        props = {
           url: attrs.url,
           publisher: attrs.publisher,
           title: attrs.title
        };
        content = <Posts.links {...props} />;
        break;

      case 'text':
        props = {
           body: attrs.body,
           title: attrs.title
        };
        content = <Posts.text {...props} />;
        break;

      default:
    }

    return (
      <div className="article__content">
        {content}
      </div>
    );
  }
}

class Article extends React.Component {
  render = () => {
    var { attrs } = this.props;

    return (
      <article id={attrs.id} className="article">
        <Title title={attrs.title} type={attrs.type} />
        <Content attrs={attrs} />
        <footer className="article__meta">
          <Source source={attrs.source_url} />
          <p className="article__meta__item article__meta__item--date">
            <time>{attrs.date}</time>
          </p>
        </footer>
      </article>
    );
  }
}

export default Article;
