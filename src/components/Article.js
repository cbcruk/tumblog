import React from 'react';
import { Link } from 'react-router';
import { Title, Content, Source } from './Article/';

const Article = ({ attrs }) => {
  return (
    <article id={attrs.id} className="Article">
      <Link to={`/category/${attrs.type}/${attrs.id}`}>Permal Link</Link>
      {
        attrs.title
        ? <Title title={attrs.title} />
        : null
      }

      <Content attrs={attrs} />

      <footer className="article__meta">
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
