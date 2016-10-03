import React from 'react';
import { browserHistory } from 'react-router';
import { POST_TYPE } from '../constant';
import './Aside.css';

const Aside = ({ blog, types }) => (
  <aside id="aside" className="Aside">
    <div className="blog">
      <h1 className="blog__title"><a href="/">{blog.title}</a></h1>
      <p className="blog__desc">{blog.description}</p>
    </div>

    <ul className="category">
      <li className="category__item"><a href="/about">About</a></li>
      <li className="category__item"><a href="/ask">Ask</a></li>
      <li className="category__item"><a href="/archive">Archive</a></li>
    </ul>

    <div className="search">
      <label htmlFor="search" className="sr-only">
        Search
        <input
          type="search"
          id="search"
          placeholder="Search Post Type"
          onChange={(e) => {
            browserHistory.push(e.target.value);
          }}
          list="postType"
          className="search__input"
        />
        <datalist id="postType">
          {
            POST_TYPE.map((value, index) => {
              return <option value={value.toLowerCase()} key={index}>{value}</option>;
            })
          }
        </datalist>
      </label>
    </div>

    <p className="copyright">2010–2015</p>
  </aside>
);

export default Aside;
