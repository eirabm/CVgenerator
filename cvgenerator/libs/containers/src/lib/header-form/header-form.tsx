import './header-form.module.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';


/* eslint-disable-next-line */
export interface HeaderFormProps {
  data:{
    name:string,
    role:string
  }
}

export function HeaderForm(props: HeaderFormProps) {
  console.log(props)
  return (
    <div>
      <h1>Header</h1>

      <form noValidate autoComplete="off" action='/api/1' method='PUT'>
        <TextField required label="Name" variant="outlined" />
        <TextField required label="Role" variant="outlined" />

        <Button type="submit" variant="contained" startIcon={<SaveIcon />}> Save </Button>
      </form>

    </div>
  );
}

export default HeaderForm;
