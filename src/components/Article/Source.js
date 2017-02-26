import React from 'react';
import styled from 'styled-components';

const StyledSource = styled.p`
  word-break: break-all;
`;

const Source = ({ title, url }) => (
  <StyledSource>
    출처: <a href={url} target="_blank">{title}</a>
  </StyledSource>
);

export default Source;
