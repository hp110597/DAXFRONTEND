import React, { memo, useCallback } from 'react';

const InputField = (props) => {
  const handleOnChange = useCallback((e) => {
    props.onInputChange(e)
  }, [])
  return (
    <>
      <label htmlFor={props.id} className="font-avertaBold text-sm tracking-widest">{props.label}</label>
      <input id={props.id} type='text' name={props.name} className='block w-full h-12 box-border p-5 border border-gray-200 outline-0 rounded-xl text-sm focus:border-sky-500 mt-2 text-gray-500'
        value={props.value}
        onChange={handleOnChange}
        placeholder={props.placeholder}
      />
      <p className="text-red-500 text-sm italic">{props.errorMessge[props.id]}</p>
    </>
  );
}

export default memo(InputField);