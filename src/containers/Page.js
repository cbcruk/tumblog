import React from 'react';
import styled from 'styled-components';

import Article from '../components/Article';

const StyledPage = styled.div`
  margin-top: ${16/16}rem;

  &:focus { outline: 0; }
`;

const Page = ({ posts }) => {
  const { entities, result } = posts;

  return (
    <StyledPage id="page">
      {
        result.map(id => (
          <Article
            key={id}
            attrs={entities.posts[id]}
          />
        ))
      }
    </StyledPage>
  );
};

export default Page;
