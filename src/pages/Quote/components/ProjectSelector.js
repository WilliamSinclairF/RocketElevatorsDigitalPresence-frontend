import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 250,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function ProjectSelector({
  inputs,
  setInputs,
  inputChangeHandler,
  setQuote,
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

    setQuote({
      id: '...',
      totalShafts: '...',
      totalColumns: '...',
      installFee: '...',
      subTotal: '...',
      total: '...',
    });
    // eslint-disable-next-line
  }, [inputs.SelectedProject]);

  return (
    <div className='container justify-content-center text-center mb-30'>
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
