import React from 'react';

interface IFormInputTextProps {
  id: string;
  label?: string;
  placeholder?: string;
  className?: string;
  value: string;
  onChange: (value: string) => void;
}

const FormInputText: React.FunctionComponent<IFormInputTextProps> = ({
  id = 'input_text',
  label = '',
  placeholder = '',
  className = '',
  value,
  onChange,
}) => {
  return (
    <div className='input-field'>
      <input
        id={id}
        type='text'
        className={`${className}`}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default FormInputText;
