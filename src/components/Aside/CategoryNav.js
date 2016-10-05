import React from 'react';

import './CategoryNav.css'

const CategoryNav = ({ isShow }) => (
  <ul
    className="CategoryNav"
    style={{
      display: isShow ? 'block' : 'none'
    }}
  >
    <li><a href="/about" className="CategoryNav-item">About</a></li>
    <li><a href="/ask" className="CategoryNav-item">Ask</a></li>
    <li><a href="/archive" className="CategoryNav-item">Archive</a></li>
  </ul>
);
CategoryNav.propTypes = {
  isShow: React.PropTypes.bool,
};

export default CategoryNav;