import './education-form.module.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

/* eslint-disable-next-line */
export interface EducationFormProps {}

export function EducationForm(props: EducationFormProps) {
  return (
    <div>
      <h1>Education</h1>
      <form noValidate autoComplete="off">
        <TextField required fullWidth label="Title" variant="outlined" />
        <TextField required label="university/company" variant="outlined" />

        <Button type="submit" variant="contained" startIcon={<SaveIcon />}> Save </Button>
      </form>
    </div>
  );
}

export default EducationForm;
