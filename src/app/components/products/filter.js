import React from 'react';

const Filter = (props) => {

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



export default Filter;