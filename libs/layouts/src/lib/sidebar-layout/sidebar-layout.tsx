import styles from './sidebar-layout.module.scss';

import {Account, Documents, Trash} from '@cvgenerator/containers';
import {SideBar} from '@cvgenerator/ui';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/* eslint-disable-next-line */
export interface SidebarLayoutProps {}

export function SidebarLayout(props: SidebarLayoutProps) {
  return (
    <div className={styles.sideBar}>

    <Router>
 
        <SideBar />
 
       <div>
 
         <Switch>
           <Route exact path="/" component={Documents} />
 
           <Route exact path="/trash" component={Trash} />
 
           <Route exact path="/account" component={Account} />
         </Switch>
 
       </div>
     </Router>
 
 
   </div>
  );
}

export default SidebarLayout;
