import React from 'react';
import moment from 'moment';

import './Copyright.css';

const Copyright = ({ updated }) => (
  <p className="Copyright">
    2010–{moment.unix(updated).clone().year()}
  </p>
);
Copyright.propTypes = {
  updated: React.PropTypes.number
};

export default Copyright;