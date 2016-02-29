import React, { Component } from 'react';

class Nav extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <nav
        className="pagination"
        role="navigation"
        aria-labelledby="paginglabel"
      >
<<<<<<< HEAD
        <h2 className="sr-only">Pagination Navigation</h2>
=======
        <h2 className="sr-only">Page Navigations</h2>
>>>>>>> testing

        <span className="pagination__count">{this.props.current} / {this.props.total}</span>
        {this.props.current !== 1 ? <button type="button" className="pagination__prev">이전 페이지</button> : ''}
        {this.props.current !== this.props.total ? <button type="button" className="pagination__next">다음 페이지</button> : ''}

        <span className="pagination__count">{this.state.current} / {Math.ceil(this.state.total / this.props.offset)}</span>
        {this.state.current !== 1 ? <Link to="page" params={{ current: this.state.current - 1 }} className="pagination__prev">이전 페이지</Link> : ''}
        {this.state.current !== Math.ceil(this.state.total / this.props.offset) ? <Link to="page" params={{ current: this.state.current + 1 }} className="pagination__next">다음 페이지</Link> : ''}
      </nav>
    );
  }
}

export default Nav;
