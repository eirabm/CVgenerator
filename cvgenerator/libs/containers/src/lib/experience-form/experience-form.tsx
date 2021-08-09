import './experience-form.module.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

/* eslint-disable-next-line */
export interface ExperienceFormProps {}

export function ExperienceForm(props: ExperienceFormProps) {
  return (
    <div>
      <h1>Experience</h1>
      <form>
        <TextField required label="Role" variant="outlined" />
        <TextField required label="Company" variant="outlined" />
        <TextField label="Description" multiline fullWidth required rows={6} variant="outlined" />

        <Button type="submit" variant="contained" startIcon={<SaveIcon />}> Save </Button>
      </form>
    </div>
  );
}

export default ExperienceForm;
