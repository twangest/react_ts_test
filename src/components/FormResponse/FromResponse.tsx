import React from 'react';
import styles from './styles.module.css';

interface IFormResponseProps {
  response: string;
}

const FormResponse: React.FunctionComponent<IFormResponseProps> = ({ response }: IFormResponseProps) => {
  return (
    <div className=''>
      <label htmlFor='response_area'>Response</label>
      <div className={`${styles.response}`} id='response_area'>
        {response}
      </div>
    </div>
  );
};

export default FormResponse;
