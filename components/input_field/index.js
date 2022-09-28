import React from 'react';
import PropTypes from 'prop-types';

InputField.propTypes = {

};

function InputField(props) {
  const handleOnChange = (e) => {
    props.onInputChange(e)
  }
  return (
    <>
      <label htmlFor={props.id} className="font-bold text-sm">{props.label}</label>
      <input id={props.id} type='text' className='block w-full h-6 box-border p-5 border border-gray-200 outline-0 rounded-2xl text-sm focus:border-sky-500 mt-1'
        value={props.value}
        onChange={handleOnChange}
      />
      <p className="text-red-500 text-sm italic">{props.errorMessge[props.id]}</p>
    </>
  );
}

export default InputField;