import React from 'react';
import styled from 'styled-components';

import { BlogInfo, CategoryNav, FilterNav, Copyright } from './Aside/';

const StyledAside = styled.aside``;

const Aside = ({ blog }) => (
  <StyledAside>
    <BlogInfo title={blog.title} description={blog.description} />
    <CategoryNav isShow={false} />
    <FilterNav />
    <Copyright updated={blog.updated} />
  </StyledAside>
);
Aside.propTypes = {
  blog: React.PropTypes.object.isRequired
};

export default Aside;
