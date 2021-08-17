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
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export function HeaderForm(props: HeaderFormProps) {
  return (
    <div>
      <h1>Header</h1>

      <form noValidate autoComplete="off" action='/api/1' method='PUT'>
        <TextField required label="Name" variant="outlined" defaultValue={props.data.name} onChange={props.onChange}/>
        <TextField required label="Role" variant="outlined" defaultValue={props.data.role} onChange={props.onChange}/>

        <Button type="submit" variant="contained" startIcon={<SaveIcon />}> Save </Button>
      </form>

    </div>
  );
}

export default HeaderForm;
