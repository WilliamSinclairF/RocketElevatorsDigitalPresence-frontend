import React, { useEffect } from 'react';
import inputFieldData from './data/inputfielddata';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';

export default function NumberInputs({
  inputChangeHandler,
  inputs,
  setInputs,
}) {
  function getFieldsToShow() {
    switch (inputs.SelectedProject) {
      case 'residential':
        return inputFieldData.filter((input) => input.res === true);

      case 'commmercial':
        return inputFieldData.filter((input) => input.com === true);

      case 'corporate':
        return inputFieldData.filter((input) => input.corp === true);

      case 'hybrid':
        return inputFieldData.filter((input) => input.hybrid === true);

      default:
        return;
    }
  }

  useEffect(() => {
    setInputs({ ...inputs, ErrorHappened: false });
    // eslint-disable-next-line
  }, [
    inputs.Floors,
    inputs.Basements,
    inputs.Apartments,
    inputs.Occupants,
    inputs.Elevators,
  ]);

  return (
    <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12 text-center'>
      <h4 className='text-blue fw-300'>Tell Us About Your Project:</h4>
      <br />
      {getFieldsToShow().map((field) => (
        <>
          <div>
            <InputLabel>
              {field.Label}
              {field.required && <strong>*</strong>}
            </InputLabel>
            <TextField
              error={inputs.ErrorHappened ? true : false}
              key={field.key}
              name={field.Name}
              helperText={inputs.ErrorHappened ? field.Error : ''}
              type={field.inputType}
              onChange={inputChangeHandler}
              className='numberInput'
              InputProps={{
                inputProps: {
                  min: field.min,
                  max: field.max,
                },
              }}
              id={field.id}></TextField>
          </div>
          <br />
        </>
      ))}
    </div>
  );
}
