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
      "otherSkills": "this are other skills",
      "header": {
      "name": "Berenice",
      "role": "Front-ender"
      },
      "id": "2"
      }
  )
 
  useEffect(()=>{
    fetch('/api/1')
      .then((x) => x.json())
      .then((res) => setData(res.Item))
  }, [])

  const save = () =>{
    fetch('/api', {
      method:'POST',
      headers: { "Content-Type": "application/json"},
			body: JSON.stringify(data)
    })
      .then(() => alert("!"))
  }

  function handleChange(evt) {
    const value = evt.target.value;
    setData({
      ...data,
      [evt.target.name]: value
    });
    console.log(data)
  }

  return (
    <div>
      <Router>
        <DocumentSideBar />
        <div className={styles.mainContainer}>
          <div className={styles.formContainer}>
            <Switch>
              <Route exact path="/header">
                <HeaderForm data={data.header} onChange={handleChange}/>
              </Route>
              <Route exact path="/summary">
                <SummaryForm data={data.summary} />
              </Route>
              <Route exact path="/experience" component={ExperienceForm} />
              <Route exact path="/education" component={EducationForm} />
              <Route exact path="/otherskills">
                <OtherSkills data={data.otherSkills} />
              </Route>
              <Route exact path="/skills" component={SkillsForm} />
            </Switch>
          </div>
          <div className={styles.preview}>
            <button onClick={()=>save()}>Save</button>
            <DocumentPreview data={data} />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default DocumentLayout;