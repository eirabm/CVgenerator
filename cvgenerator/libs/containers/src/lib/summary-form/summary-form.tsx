import './summary-form.module.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

/* eslint-disable-next-line */
export interface SummaryFormProps {}

export function SummaryForm(props: SummaryFormProps) {
  return (
    <div>
      <h1>Summary</h1>
      <form>
        <TextField label="Summary" multiline fullWidth required rows={6} variant="outlined" />
        <Button type="submit" variant="contained" startIcon={<SaveIcon />}> Save </Button>
      </form>
    </div>
  );
}

export default SummaryForm;
