import React, { useRef, useMemo } from 'react';
import styles from './styles.module.css';

interface IFormInputFileProps {
  className?: string;
  image?: string;
  files: FileList | null;
  onChange: (files: FileList | null) => void;
}

const FormInputFile: React.FunctionComponent<IFormInputFileProps> = ({ className = '', image, onChange, files }) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const imgUrl = useMemo(() => {
    return files?.length ? URL.createObjectURL(files[0]) : null;
  }, [files]);

  const handleClick = () => {
    const el = fileInputRef?.current;
    if (el) el.click();
  };

  const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log({ el: event.target });
    onChange(event.target.files || null);
  };

  return (
    <div className='file-input input-field'>
      <div>Файл</div>
      <div className={styles.imagePicker} onClick={handleClick}>
        {imgUrl ? (
          <img src={imgUrl} className={styles.imagePicker} alt='preview' />
        ) : (
          <input
            ref={fileInputRef}
            type='file'
            accept='image/*'
            className={`${className} hide`}
            onChange={handleFileInputChange}
          />
        )}
      </div>
    </div>
  );
};

export default FormInputFile;
