import React from 'react';
import PropTypes from 'prop-types';

export default function Effect(props) {
  const style = {
    top: `${props.top}px`,
    left: `${props.left}px`,
    width: `${props.size}px`,
    height: `${props.size}px`,
  };

  return <span style={style} className={props.className} />;
}

Effect.propTypes = {
  top: PropTypes.number.isRequired,
  left: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired,
};
