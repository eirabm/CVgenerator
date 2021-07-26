import styles from './side-bar.module.scss';
import { NavLink } from 'react-router-dom'

/* eslint-disable-next-line */
export interface SideBarProps {}

export function SideBar(props: SideBarProps) {
  return (
    <div className={styles.asideMenu}>
      <ul>
        <li><NavLink exact to='/' className={styles.link} activeClassName={styles.active}>Documentos</NavLink></li>
        <li><NavLink exact to='/trash' className={styles.link} activeClassName={styles.active}>Papelera</NavLink></li>
        <li><NavLink exact to='/account' className={styles.link} activeClassName={styles.active}>Cuenta</NavLink></li>
      </ul>
    </div>
  );
}

export default SideBar;
