import React from 'react';
import PropTypes from 'prop-types';

// Child component
export default function Button({ label }) {
  return <button type="button" className="operators">{label}</button>;
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
};
