import './summary-form.module.scss';
import TextField from '@material-ui/core/TextField';

/* eslint-disable-next-line */
export interface SummaryFormProps {}

export function SummaryForm(props: SummaryFormProps) {
  return (
    <div>
      <h1>Summary</h1>
      <TextField
          id="outlined-multiline-static"
          label="Summary"
          multiline
          rows={4}
          variant="outlined"
        />

    </div>
  );
}

export default SummaryForm;
