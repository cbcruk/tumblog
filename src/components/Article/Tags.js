import React from 'react';
import styled from 'styled-components';

const StyledTags = styled.p`
  display: flex;
`;

const Item = styled.span`
  text-decoration: underline;
`;

const Tags = ({ tags }) => {
  if (!tags.length) {
    return null;
  }

  return (
    <StyledTags>
      {
        tags.map(tag => <Item>#{tag}</Item>)
      }
    </StyledTags>
  );
};

export default Tags;
