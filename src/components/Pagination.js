import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import './Pagination.css';

const Pagination = ({ current, total }) => (
  <nav
    className="Pagination"
    role="navigation"
    aria-labelledby="paginglabel"
  >
    <h2 className="sr-only">Page Navigations</h2>

    <span className="Pagination-count">{current + 1} / {total}</span>

    {
      current > 0
      ? <Link to={`/page/${current - 1}`} className="Pagination-link Pagination-link--prev">이전 페이지</Link>
      : null
    }
    {
      current < total
      ? <Link to={`/page/${current + 1}`} className="Pagination-link Pagination-link--next">다음 페이지</Link>
      : null
    }
  </nav>
);

const mapStateToProps = (state, ownProps) => ({
  current: parseInt(state.pageCount, 0)
});

export default connect(mapStateToProps)(Pagination);
