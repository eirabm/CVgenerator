import styles from './app.module.scss';
import {Header, SideBar} from '@cvgenerator/ui';

import { ReactComponent as Logo } from './logo.svg';
import star from './star.svg';

import { Route, Link } from 'react-router-dom';

export function App() {
  return (
  <>
   <Header />
   <SideBar />
  </>
  );
}

export default App;
