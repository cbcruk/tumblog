import React from 'react';
import { Link } from 'react-router';
import './BlogInfo.css';

const BlogInfo = ({ title, description }) => (
  <div className="BlogInfo">
    <h1 className="BlogInfo-title">
      <Link to="/">{title}</Link>
    </h1>
    <p className="BlogInfo-desc">{description}</p>
  </div>
);
BlogInfo.propTypes = {
  title: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
};
BlogInfo.defaultProps = {
  title: 'Cherry Orchard',
  description: '은수리의 기묘한 모험',
};

export default BlogInfo;
