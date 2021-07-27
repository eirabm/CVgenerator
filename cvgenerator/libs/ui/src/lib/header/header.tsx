import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './header.module.scss';

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  const { pathname } = useLocation();

  const paths: {[key: string]: string } = {
    "/":"Documentos",
    "/trash": "Papelera",
    "/account": "Cuenta"
  }

  return (
    <header className={styles.navBar}>
    <div className={styles.page}>
        <p>{paths[pathname]}</p>
    </div>

    <nav>
      <ul>
        <li><p>usuario</p></li>
        <li><button>log out</button></li>
      </ul>
    </nav>
  </header>
  );
}

export default Header;
