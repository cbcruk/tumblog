import React, { Component } from 'react';

import Posts from './Post.jsx';

class Tags extends Component {
  render() {
    let { tags } = this.props;

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

class Source extends Component {
  render() {
    let { source } = this.props;

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

class Title extends Component {
  render() {
    let { props } = this;

    if (props.title && props.type === 'text') {
      return (
        <h3 className="article__title">{props.title}</h3>
      )
    } else {
      return false;
    }
  }
}

class Content extends Component {
  render() {
    let { attrs } = this.props;

    let title;
    let content;
    let props;

    switch (attrs.type) {
      case 'photo':
        props = {
          photos: attrs.photos[0].alt_sizes[0],
          caption: attrs.caption
        };
        content = <Posts.photo {...props} />;
        break;

      case 'link':
        props = {
          url: attrs.url,
          publisher: attrs.publisher,
          title: attrs.title,
          photos: attrs.photos,
          excerpt: attrs.excerpt
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

class Article extends Component {
  render() {
    let { attrs } = this.props;

    return (
      <article id={attrs.id} className="article">
        <Title title={attrs.title} type={attrs.type} />
        <Content attrs={attrs} />
        <footer className="article__meta">
          <Source source={attrs.source_url} />
        </footer>
      </article>
    );
  }
}

export default Article;
