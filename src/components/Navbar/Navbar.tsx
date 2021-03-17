import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

interface INavbarProps {}

const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
  return (
    <header className={styles.header}>
      <Link to='/' className={styles.link}>
        Форма
      </Link>
      <Link to='/colors' className={styles.link}>
        Палитра
      </Link>
    </header>
  );
};

export default Navbar;
