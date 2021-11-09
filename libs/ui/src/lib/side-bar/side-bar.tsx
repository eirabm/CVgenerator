import styles from './side-bar.module.scss';
import { NavLink } from 'react-router-dom'

import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

/* eslint-disable-next-line */
export interface SideBarProps {}

export function SideBar(props: SideBarProps) {
  return (
    <div className={styles.asideMenu}>
      <ul>
        <li><NavLink exact to='/' 
            className={styles.link} 
            activeClassName={styles.active}> <DescriptionOutlinedIcon /> Documentos</NavLink></li>
        <li><NavLink exact to='/trash' 
            className={styles.link} 
            activeClassName={styles.active}> <DeleteOutlinedIcon /> Papelera</NavLink></li>
        <li><NavLink exact to='/account' 
            className={styles.link} 
            activeClassName={styles.active}> <AccountCircleOutlinedIcon /> Cuenta</NavLink></li>
      </ul>
    </div>
  );
}

export default SideBar;
