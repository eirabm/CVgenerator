import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './header.module.scss';

import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  const { pathname } = useLocation();

  const paths: Record<string, string> = {
    "/":"Documentos",
    "/trash": "Papelera",
    "/account": "Cuenta"
  }

  return (
  <header className={styles.navBar}>
      <div className={styles.page}>
          <p>{paths[pathname]}</p>
      </div>

      <div className={styles.userIcon}>
        <label htmlFor="toggle" className={styles.dispName}>AB</label> 
        <input type="checkbox" id="toggle" className={styles.toggle}/>

        <div className={styles.toggleMenu}>
          <ul>
            <li> <SettingsOutlinedIcon /> Configuración </li>
            <li> <ExitToAppOutlinedIcon /> Cerrar sesión </li>
          </ul>
        </div>
      </div>
  </header>
  );
}

export default Header;
