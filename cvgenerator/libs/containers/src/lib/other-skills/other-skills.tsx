import './other-skills.module.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

/* eslint-disable-next-line */
export interface OtherSkillsProps {}

export function OtherSkills(props: OtherSkillsProps) {
  return (
    <div>
      <h1>Other Skills</h1>
      <form>
        <TextField label="Other skills" multiline fullWidth required rows={6} variant="outlined" />

        <Button type="submit" variant="contained" startIcon={<SaveIcon />}> Save </Button>
      </form>
    </div>
  );
}

export default OtherSkills;
