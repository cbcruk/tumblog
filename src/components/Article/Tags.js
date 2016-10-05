import React from 'react';

const Tags = ({ tags }) => {
  if (!tags.length) {
    return null;
  }

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
};

export default Tags;