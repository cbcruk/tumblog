import React from 'react';
import { Link } from 'react-router';

import './FilterNav.css';

const FilterNav = ({ type }) => (
  <div className="FilterNav">
    {
      type.map((value, index) => {
        return (
          <Link
            key={index}
            to={value.toLowerCase()}
            className="FilterNav-item"
          >{value}</Link>
        );
      })
    }
  </div>
);
FilterNav.propTypes = {
  type: React.PropTypes.array.isRequired
};
FilterNav.defaultProps = {
  type: ['Text', 'Photo', 'Quote', 'Link', 'Chat', 'Audio', 'Video', 'Answer']
};

export default FilterNav;
