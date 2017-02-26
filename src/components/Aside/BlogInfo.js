import React from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';

const Title = styled.h1`
  margin: 0;
  font-size: ${48/16}rem;
  font-weight: lighter;

  > a {
    padding-bottom: ${16/16}rem;

    &:hover {
      text-decoration: none;
    }
  }
`;

const Desc = styled.p`
  margin: 0;
  font-size: ${12/16}rem;
  line-height: ${32/16}rem;
`;

const BlogInfo = ({ title, description }) => (
  <div className="BlogInfo">
    <Title>
      <Link to="/">{title}</Link>
    </Title>

    <Desc>{description}</Desc>
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
