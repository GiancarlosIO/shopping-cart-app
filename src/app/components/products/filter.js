import React from 'react';
import PropTypes from 'prop-types';

export const Filter = (props) => {

  const handleChange = (e) => props.handleChange(e);

  return (
    <div>
      <h5>Search your product:</h5>
      <input
        className="form-control"
        placeholder="just write the products name"
        onChange={ (e) => { handleChange(e) } }
      />
    </div>
  );

}

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired
}

export default Filter;