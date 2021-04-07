import React, { useRef, useMemo } from 'react';
import styles from './styles.module.css';
import img from './Img.png';

interface IFormInputFileProps {
  className?: string;
  image?: string;
  files: FileList | null;
  onChange: (files: FileList | null) => void;
}

const FormInputFile: React.FunctionComponent<IFormInputFileProps> = ({
  className = '',
  onChange,
  files,
}: IFormInputFileProps) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const imgUrl = useMemo(() => {
    return files?.length ? URL.createObjectURL(files[0]) : img;
  }, [files]);

  const handleClick = () => {
    const el = fileInputRef?.current;
    if (el) el.click();
  };

  const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.files || null);
  };

  return (
    <div className='file-input input-field'>
      <div className={styles.imagePicker} onClick={handleClick}>
        <input
          ref={fileInputRef}
          type='file'
          accept='image/*'
          className={`${className} hide`}
          onChange={handleFileInputChange}
        />
        <img src={imgUrl} className={styles.imagePicker} alt='preview' />
      </div>
      <label htmlFor='input_file'>Фото</label>
    </div>
  );
};

export default FormInputFile;
