import React from 'react';
import PropTypes from 'prop-types';

const Bomb = ({count}) => {
  return (<div>{count > 0 ? count : "BOMB!!!!!"}</div>);
};

Bomb.propTypes = {
  count: PropTypes.number.isRequired
};

export default Bomb;
