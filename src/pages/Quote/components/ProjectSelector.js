import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    fontSize: 20,
    minWidth: 300,
    padding: 30,
  },
  selectEmpty: {
    marginTop: theme.spacing(1),
    fontSize: 20,
    minWidth: 300,
  },

  label: {
    fontSize: 20,
    minWidth: 300,
    color: 'blue',
  },
  input: {
    fontSize: 20,
    minWidth: 300,
  },
}));

export default function ProjectSelector({
  inputs,
  setInputs,
  inputChangeHandler,
}) {
  const classes = useStyles();

  useEffect(() => {
    setInputs({
      ...inputs,
      Floors: '',
      Basements: '',
      Apartments: '',
      Occupants: '',
      Elevators: '',
      Rate: '',
    });
  }, [inputs.SelectedProject]);

  return (
    <div className='container justify-content-center text-center mb-30'>
      <div className='container mb-30 mb-30'>
        <h2 className='text-blue'>Select Your Project Type</h2>
      </div>
      <FormControl className={classes.formControl}>
        <InputLabel id='selectlabel' className={classes.label}>
          Project Type
        </InputLabel>

        <Select
          labelId='projectselect'
          id='selectmenu'
          class={classes.selectEmpty}
          onChange={inputChangeHandler}
          value={inputs.SelectedProject}
          name={'SelectedProject'}>
          <MenuItem name={'SelectedProject'} value={'residential'}>
            Residential
          </MenuItem>
          <MenuItem name={'SelectedProject'} value={'commmercial'}>
            Commercial
          </MenuItem>
          <MenuItem name={'SelectedProject'} value={'corporate'}>
            Corporate
          </MenuItem>
          <MenuItem name={'SelectedProject'} value={'hybrid'}>
            Hybrid
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
