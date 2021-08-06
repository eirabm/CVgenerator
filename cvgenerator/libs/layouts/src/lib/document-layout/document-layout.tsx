import styles from './document-layout.module.scss';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { DocumentSideBar } from '@cvgenerator/ui'
import { SummaryForm, HeaderForm, EducationForm, ExperienceForm, SkillsForm, OtherSkills, DocumentPreview } from '@cvgenerator/containers'
import { useState } from 'react';

/* eslint-disable-next-line */
export interface DocumentLayoutProps {}

export function DocumentLayout(props: DocumentLayoutProps) {

  return (
    <div>
      <Router>
        <DocumentSideBar />
        <div className={styles.mainContainer}>
          <div className={styles.formContainer}>
            <Switch>
              <Route exact path="/header">
                <HeaderForm />
              </Route>
              <Route exact path="/summary" component={SummaryForm} />
              <Route exact path="/experience" component={ExperienceForm} />
              <Route exact path="/education" component={EducationForm} />
              <Route exact path="/otherskills">
                <OtherSkills />
              </Route>
              <Route exact path="/skills" component={SkillsForm} />
            </Switch>
          </div>
          <div className={styles.preview}>
            <DocumentPreview />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default DocumentLayout;