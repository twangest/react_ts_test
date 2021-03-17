import React from 'react';
import styles from './styles.module.css';
import WithLoading, {WithLoadingProps} from "../../hocs/WithLoading";

interface IFormSubmitProps {
    className?: string;
    type?: 'button' | 'reset' | 'submit';
    title?: string
    onSubmit?: (event: React.FormEvent) => void;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const FormSubmit: React.FunctionComponent<IFormSubmitProps & WithLoadingProps> = ({
                                                                                      title = "Сохранить",
                                                                                      className = '',
                                                                                      type = 'submit',
                                                                                      onSubmit,
                                                                                      onClick
                                                                                  }) => {
    return (
        <button className={`${className} ${styles.submit}`} type={type} onSubmit={onSubmit} onClick={onClick}>
            {title}
        </button>
    );
};

export default WithLoading(FormSubmit);
