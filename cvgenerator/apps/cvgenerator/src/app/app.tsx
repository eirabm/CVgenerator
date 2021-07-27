import styles from './app.module.scss';
import {Account, Documents, Trash} from '@cvgenerator/containers';

import {Header, SideBar} from '@cvgenerator/ui';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export function App() {
  return (
  <div>

   <Router>

      <Header />
      <SideBar />

      <div className={styles.app}>

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

export default App;
