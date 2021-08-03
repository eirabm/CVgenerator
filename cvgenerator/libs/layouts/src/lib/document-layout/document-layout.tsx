import styles from './document-layout.module.scss';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { DocumentSideBar } from '@cvgenerator/ui'
import { SummaryForm, HeaderForm, EducationForm, ExperienceForm, SkillsForm } from '@cvgenerator/containers'

/* eslint-disable-next-line */
export interface DocumentLayoutProps {}

export function DocumentLayout(props: DocumentLayoutProps) {
  return (
    <div>
      <Router>
        <DocumentSideBar />
        <div className={styles.formContainer}>
          <Switch>
            <Route exact path="/header" component={HeaderForm} />
            <Route exact path="/summary" component={SummaryForm} />
            <Route exact path="/experience" component={ExperienceForm} />
            <Route exact path="/education" component={EducationForm} />
            <Route exact path="/skills" component={SkillsForm} />
          </Switch>
        </div>
      </Router>


    </div>
  );
}

export default DocumentLayout;