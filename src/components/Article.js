import React from 'react';
import { Title, Content, Source } from './Article/';

import './Article.css';

const Article = ({ attrs }) => {
  return (
    <article id={attrs.id} className="Article">
      {
        attrs.title
        ? <Title title={attrs.title} />
        : null
      }

      <Content attrs={attrs} />

      <footer className="Article-meta">
        {
          attrs.source_url
          ? <Source source={attrs.source_url} />
          : null
        }
      </footer>
    </article>
  )
};

export default Article;
