import React from 'react';

const Source = ({ source }) => (
  <p className="article__meta__item article__meta__item--source">
    <q cite={source}>
      <a href="{source}">{source}</a>
    </q>
  </p>
);

export default Source;
