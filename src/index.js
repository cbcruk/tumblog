import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { injectGlobal } from 'styled-components';
import configureStore from './configureStore';
import Root from './containers/Root';
import 'normalize.css';

const store = configureStore();

/* eslint-disable no-unused-expressions */
injectGlobal`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #333;
  }

  body {
    display: flex;
    justify-content: center;
  }

  a {
    text-decoration: none;
    color: inherit;

    &:hover,
    &:foucs {
      text-decoration: underline;
    }
  }

  p { margin: 0; }
`;

render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
);
