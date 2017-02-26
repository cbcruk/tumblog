import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import styled from 'styled-components';

const StyledPagination = styled.nav`
  margin-top: 50px;
  text-align: right;
  font-size: 12px;
`;

const Count = styled.span`
  float: left;
`;

const StyledLink = styled(Link)`
  margin-left: ${props => props.dir === 'next' ? '16px' : 'auto'};
`;

const Pagination = ({ current, total }) => (
  <StyledPagination
    role="navigation"
    aria-labelledby="paginglabel"
  >
    <h2 hidden>Page Navigations</h2>

    <Count>{current + 1} / {total}</Count>

    {
      current > 0
      ? <StyledLink to={`/page/${current - 1}`} dir="prev">← 이전 페이지</StyledLink>
      : null
    }
    {
      current < total
      ? <StyledLink to={`/page/${current + 1}`} dir="next">다음 페이지 →</StyledLink>
      : null
    }
  </StyledPagination>
);

const mapStateToProps = (state, ownProps) => ({
  current: parseInt(state.pageCount, 10)
});

export default connect(mapStateToProps)(Pagination);
