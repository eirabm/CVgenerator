import './header-form.module.scss';
import TextField from '@material-ui/core/TextField';

/* eslint-disable-next-line */
export interface HeaderFormProps {}

export function HeaderForm(props: HeaderFormProps) {
  return (
    <div>
      <h1>Header section</h1>

      <TextField required label="Name" variant="outlined" />
      <TextField required label="Role" variant="outlined" />

    </div>
  );
}

export default HeaderForm;
