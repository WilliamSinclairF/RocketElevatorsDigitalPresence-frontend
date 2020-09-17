import React, { useEffect } from 'react';
import radioButtonData from './data/radiobuttonsdata';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Typography from '@material-ui/core/Typography';

export default function RadioInputs({
  inputs,
  inputChangeHandler,
  getQuoteData,
  inputValidation,
  setInputs,
}) {
  useEffect(() => {
    inputValidation();
    if (inputs.Rate === '') {
      return;
    } else {
      getQuoteData();
    }
    // eslint-disable-next-line
  }, [inputs.Rate]);

  useEffect(() => {
    setInputs({ ...inputs, Rate: '' });
    // eslint-disable-next-line
  }, [inputs.ErrorHappened]);

  // useEffect(() => {
  //   setInputs({ ...inputs, Rate: '' });
  // }, [inputs.ErrorHappened]);

  return (
    <div
      key={'rbcontainer'}
      className='col-lg-4 col-md-4 col-sm-12 col-xs-12 text-center'>
      <h4 className='text-blue fw-300'>Select Your Solution:</h4>
      <br />
      <FormControl key={'fcrb'}>
        {radioButtonData.map((button) => (
          <>
            <div key={button.key + 'div'}>
              <FormControlLabel
                key={button.key}
                label={
                  <Typography variant='body2' color='textSecondary'>
                    {button.Label}
                  </Typography>
                }
                labelPlacement='top'
                value={button.value}
                onChange={(event) => inputChangeHandler(event)}
                name={'Rate'}
                control={
                  <Radio
                    key={button.key + 1}
                    color='default'
                    size='small'
                    checked={inputs.Rate === button.value}
                  />
                }
              />
              <FormHelperText
                key={button.key + 'fht'}
                className='fs-15 text-center form-text text-muted bold'>
                {button.small1text}
              </FormHelperText>

              <FormHelperText
                key={button.key + 'fht2'}
                className='fs-12 text-center form-text text-muted text-gray'>
                {button.small2text}
              </FormHelperText>
            </div>
            <br />
          </>
        ))}
      </FormControl>
    </div>
  );
}
