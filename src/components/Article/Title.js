import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h3`
  margin: 0;
  margin-bottom: ${10/16}rem;
  font-size: ${16/16}rem;
  color: #404040;
`;

const Title = ({ title }) => (
  <StyledTitle>{title}</StyledTitle>
);

export default Title;
