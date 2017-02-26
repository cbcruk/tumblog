import React from 'react';
import styled from 'styled-components';

const StyledCategoryNav = styled.nav`
  display: ${props => props.isShow ? 'block': 'none'};
  padding-left: 0;
  list-style: none;
`;

const Item = styled.a`
  display: inline-block;

  &:hover {
    border-bottom: 1px solid #ff80ab;
    text-decoration: none;
  }
`;

const CategoryNav = ({ isShow }) => (
  <StyledCategoryNav>
    <Item href="/about">About</Item>
    <Item href="/ask">Ask</Item>
    <Item href="/archive">Archive</Item>
  </StyledCategoryNav>
);
CategoryNav.propTypes = {
  isShow: React.PropTypes.bool,
};

export default CategoryNav;