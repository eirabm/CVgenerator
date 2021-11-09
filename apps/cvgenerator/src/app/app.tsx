import styles from './app.module.scss';

import {Header} from '@cvgenerator/ui';
import {SidebarLayout} from '@cvgenerator/layouts';


export function App() {
  return (
    <>
      <Header />
      <SidebarLayout />
    </>
  );
}

export default App;
