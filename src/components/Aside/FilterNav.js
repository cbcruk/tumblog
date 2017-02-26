import React from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';

const StyledFilterNav = styled.nav`
  display: flex;
  justify-content: space-between;
  font-size: ${12/16}rem;
`;

const FilterNav = ({ type }) => (
  <StyledFilterNav>
    {
      type.map((value, index) => {
        return (
          <Link
            key={index}
            to={`/search/${value.toLowerCase()}`}
          >
            {value}
          </Link>
        );
      })
    }
  </StyledFilterNav>
);
FilterNav.propTypes = {
  type: React.PropTypes.array.isRequired
};
FilterNav.defaultProps = {
  type: ['Text', 'Photo', 'Quote', 'Link', 'Chat', 'Audio', 'Video', 'Answer']
};

export default FilterNav;
