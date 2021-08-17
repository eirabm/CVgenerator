import styles from './document-layout.module.scss';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { DocumentSideBar } from '@cvgenerator/ui'
import { SummaryForm, HeaderForm, EducationForm, ExperienceForm, SkillsForm, OtherSkills, DocumentPreview } from '@cvgenerator/containers'
import { useState } from 'react';
import { useEffect } from 'react';

/* eslint-disable-next-line */
export interface DocumentLayoutProps {}

export function DocumentLayout(props: DocumentLayoutProps) {
  const [data, setData] = useState({
      "experience": [
      {
      "description": "example description",
      "company": "Malabares",
      "role": "Call center"
      }
      ],
      "summary": "example summary",
      "education": [
      {
      "title": "Comunicacion audiovisual",
      "university": "UCSJ"
      }
      ],
      "other skills": "this are other skills",
      "header": {
      "name": "Berenice",
      "role": "Front-ender"
      },
      "id": "2"
      }
  )

  return (
    <div>
      <Router>
        <DocumentSideBar />
        <div className={styles.mainContainer}>
          <div className={styles.formContainer}>
            <Switch>
              <Route exact path="/header">
                <HeaderForm data={data.header}/>
              </Route>
              <Route exact path="/summary">
                <SummaryForm data={data.summary} />
              </Route>
              <Route exact path="/experience" component={ExperienceForm} />
              <Route exact path="/education" component={EducationForm} />
              <Route exact path="/otherskills">
                <OtherSkills data={data['other skills']} />
              </Route>
              <Route exact path="/skills" component={SkillsForm} />
            </Switch>
          </div>
          <div className={styles.preview}>
            <button onClick={()=>save()}>Save</button>
            <DocumentPreview />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default DocumentLayout;