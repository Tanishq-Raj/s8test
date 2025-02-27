import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../../../context/context';

export const FormInput = ({ label, placeholder, isTextArea, isBankOfficer }) => {
  const inputId = `${label.toLowerCase().replace(/\s+/g, '-')}`;
  const {bankOfficerFormValues, setBankOfficerFormValues, userFormValues, setUserFormValues} = useContext(AppContext)
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    if(isBankOfficer){
      setBankOfficerFormValues({
        ...bankOfficerFormValues,
        [name]: value,
      });
    }
    else{
      setUserFormValues({
        ...userFormValues,
        [name]: value,
      });
      console.log(userFormValues)
    }
    
    }

  return (
    <div className="flex flex-col mt-4 max-w-full rounded-3xl w-[500px]">
      <label htmlFor={inputId} className="self-start font-medium text-gray-500">
        {label}
      </label>
      {isTextArea ? (
        <textarea
          id={inputId}
          placeholder={placeholder}
          onChange={handleChange}
          className=" px-6 pt-2 pb-24 rounded-3xl bg-gray-400 bg-opacity-40 text-black text-opacity-50 max-md:px-5 max-md:pb-28 max-md:max-w-full"
        />
      ) : (
        <input
          type={label.toLowerCase() === 'password' || label.toLowerCase() === 'confirm password' ? 'password' : 'text'}
          id={inputId}
          placeholder={placeholder}
          onChange={handleChange}
          className="h-9 px-6 mt-2 rounded-3xl bg-gray-400 bg-opacity-40 text-black text-opacity-50 max-md:px-2 max-md:max-w-full"
        />
      )}
    </div>
  );
};