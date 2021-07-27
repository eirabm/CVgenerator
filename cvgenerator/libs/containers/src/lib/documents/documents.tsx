import styles from './documents.module.scss';

import AddIcon from '@material-ui/icons/Add';

/* eslint-disable-next-line */
export interface DocumentsProps {}

export function Documents(props: DocumentsProps) {
  return (
    <div className={styles.mainContainer}>
      
      <button className={styles.newDoc}> <AddIcon />  Nuevo Documento</button>
    </div>
  );
}

export default Documents;
