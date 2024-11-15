// import React from 'react'
import PropTypes from 'prop-types';
Button.propTypes = {
  name: PropTypes.string.isRequired,
};

function Button({name}) {
  return (
    <button className='btn'>{name}</button>
  )
}

export default Button;