import React from 'react';

import { BlogInfo, CategoryNav, FilterNav, Copyright } from './Aside/';

import './Aside.css';

const Aside = ({ blog }) => (
  <aside id="aside" className="Aside">
    <BlogInfo title={blog.title} description={blog.description} />
    <CategoryNav isShow={false} />
    <FilterNav />
    <Copyright updated={blog.updated} />
  </aside>
);
Aside.propTypes = {
  blog: React.PropTypes.object.isRequired
};

export default Aside;
