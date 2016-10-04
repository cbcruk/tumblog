import React from 'react';
import { Link } from 'react-router';
import { POST_TYPE } from '../constant';

const FilterNav = () => (
  <div className="search">
    {
      POST_TYPE.map((value, index) =>
        <Link to={value.toLowerCase()} key={index}>{value}</Link>)
    }
  </div>
);

export default FilterNav;
