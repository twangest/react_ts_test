import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

const Navbar: React.FunctionComponent = () => {
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
