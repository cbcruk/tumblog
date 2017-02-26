import React from 'react';
import styled from 'styled-components';
import { Title, Source, Content } from './Article/';

const StyledArticle = styled.article`
  font-size: ${11/16}rem;

  & + & { margin-top: ${20/16}rem; }
`;

const Footer = styled.footer`
  margin-top: ${8/16}rem;
  color: rgba(0, 0, 0, .4);
`;

const Article = ({ attrs }) => (
  <StyledArticle id={attrs.id}>
    {
      attrs.title
      ? <Title title={attrs.title} />
      : null
    }

    <Content attrs={attrs} />

    <Footer>
      {
        (attrs.source_title && attrs.source_url)
        ? <Source title={attrs.source_title} url={attrs.source_url} />
        : null
      }
    </Footer>
  </StyledArticle>
);

export default Article;
