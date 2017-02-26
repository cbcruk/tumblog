import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  padding: ${5/16}rem;
  padding-left: 0;
  border: 0;
  border-bottom: 1px solid #ccc;
  font-size: ${12/16}rem;

  &::-webkit-calendar-picker-indicator { display: none; }
`;

const Search = () => (
  <div className="Search" />
);

export default Search;
