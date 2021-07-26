import styles from './header.module.scss';

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <header className={styles.navBar}>
    <div className={styles.page}>
        <p>actual page</p>
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
