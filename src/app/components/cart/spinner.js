import React from 'react';
import glamorous from 'glamorous';

const HeaderSpinner = glamorous.h3({
  padding: '20px',
  backgroundColor: '#fff',
  borderRadius: '8px'
})

const Spinner = ({ loading, text }) => (
  <div className={`spinner-container ${ loading && 'flex'}`}>
    <div className="spinner">
      <div className="spinner-double-bounce spinner-double-bounce-1"></div>
      <div className="spinner-double-bounce spinner-double-bounce-2"></div>
    </div>
    <HeaderSpinner>{text}</HeaderSpinner>
  </div>
)

export default Spinner;