import React, {useRef, useEffect} from 'react';
import {ReactComponent as DeleteIcon} from './Icon.svg';
import styles from './styles.module.css';
import {ColorType} from "../../redux/reducers";

export interface IColorPickerProps {
    colorItem: ColorType
    updateColor: (id: string, color: string) => void;
    deleteColor: (id: string) => void;
}

const ColorPicker: React.FunctionComponent<IColorPickerProps> = ({colorItem, updateColor, deleteColor}) => {
    const ref = useRef<HTMLInputElement | null>(null);

    useEffect(()=>{
        if (colorItem.isNew) {
            handleClick();
        }
    },[colorItem])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const color = event.target.value;
        updateColor(id, color);
    };

    const handleClick = () => {
        const inputElement = ref?.current;
        if (inputElement) inputElement.click();
    };

    const handleDeleteClick = (event: React.MouseEvent<SVGSVGElement>) => {
        event.stopPropagation();
        deleteColor(id);
    };

    const {id, color} = colorItem;
    return (
        <div className={`col s3 ${styles.colorPicker}`} key={id} style={{backgroundColor: color}} onClick={handleClick}>
            <DeleteIcon className={styles.hoverButton} onClick={handleDeleteClick}/>
            <input ref={ref} value={color} className={styles.input} type='color' onChange={handleChange}/>
        </div>
    );
};

export default ColorPicker;
