import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const StyledCopyright = styled.p`
  margin-top: ${50/16}rem;
  font-size: ${12/16}rem;
  font-style: italic;
`;

const Copyright = ({ updated }) => (
  <StyledCopyright>
    2010–{moment.unix(updated).clone().year()}
  </StyledCopyright>
);
Copyright.propTypes = {
  updated: React.PropTypes.number
};

export default Copyright;