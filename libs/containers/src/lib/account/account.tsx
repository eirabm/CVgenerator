import styles from './account.module.scss';

/* eslint-disable-next-line */
export interface AccountProps {}

export function Account(props: AccountProps) {
  return (
    <div className={styles.mainContainer}>
      <h1>Welcome to Account! Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quisquam temporibus consectetur. Earum asperiores animi expedita praesentium molestias nulla similique tempora officia eos quas obcaecati debitis quasi assumenda, molestiae necessitatibus!</h1>
    </div>
  );
}

export default Account;
