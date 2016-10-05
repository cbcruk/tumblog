import React from 'react';

import Article from '../components/Article';

const Page = ({ posts }) => {
  const { entities, result } = posts;

  return (
    <div id="page" className="Page Page--index">
      {
        result.map(id => <Article key={id} attrs={entities.posts[id]} />)
      }
    </div>
  );
};

export default Page;
