import React from 'react';
import { Link } from 'react-router';
import FilterNav from './FilterNav';
import './Aside.css';

const Aside = ({ blog }) => (
  <aside id="aside" className="Aside">
    <div className="blog">
      <h1 className="blog__title">
        <Link to="/">{blog.title}</Link>
      </h1>
      <p className="blog__desc">{blog.description}</p>
    </div>

    <ul className="category">
      <li className="category__item"><a href="/about">About</a></li>
      <li className="category__item"><a href="/ask">Ask</a></li>
      <li className="category__item"><a href="/archive">Archive</a></li>
    </ul>

    <FilterNav />

    <p className="copyright">2010–2015</p>
  </aside>
);

export default Aside;
