import React, { useState } from 'react';

import RadioInputs from './components/RadioInputs';
import NumberInputs from './components/NumberInputs';
import MainHeader from './components/MainHeader';
import ProjectSelector from './components/ProjectSelector';
import Quote from './components/Quote';

import ScrollToTopOnMount from '../../generic/ScrolllToTop';
import ScrollUpButton from 'react-scroll-up-button';

export default function QuoteApp() {
  const [quote, setQuote] = useState({
    id: '...',
    totalShafts: '...',
    totalColumns: '...',
    installFee: '...',
    subTotal: '...',
    total: '...',
  });
  //

  //
  const [inputs, setInputs] = useState({
    SelectedProject: '',
    Floors: '',
    Basements: '',
    Apartments: '',
    Occupants: '',
    Elevators: '',
    Rate: '',
    URL: '',
    ErrorHappened: false,
  });

  let URLs = {
    residential: `https://rocketelevatorsbackend.herokuapp.com/api/quote/residential/${inputs.Floors}/${inputs.Basements}/${inputs.Apartments}/${inputs.Rate}/`,
    commercial: `https://rocketelevatorsbackend.herokuapp.com/api/quote/com/${inputs.Elevators}/${inputs.Rate}/`,
    corporate: `https://rocketelevatorsbackend.herokuapp.com/api/quote/ch/${inputs.Floors}/${inputs.Occupants}/${inputs.Rate}/`,
    hybrid: `https://rocketelevatorsbackend.herokuapp.com/api/quote/ch/${inputs.Floors}/${inputs.Occupants}/${inputs.Rate}/`,
  };

  function inputChangeHandler(event) {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value, URL: getURL() });
  }

  function inputValidation() {
    if (inputs.Rate === '') return;
    else {
      switch (inputs.SelectedProject) {
        case 'residential':
          if (inputs.Apartments <= 0) {
            setInputs({ ...inputs, ErrorHappened: true });
          } else if (inputs.Basements <= 0) {
            setInputs({ ...inputs, ErrorHappened: true });
          } else if (inputs.Floors <= 0) {
            setInputs({ ...inputs, ErrorHappened: true });
          } else if (inputs.Basements > inputs.Floors) {
            setInputs({ ...inputs, ErrorHappened: true });
          }
          break;

        case 'commmercial':
          if (inputs.Elevators <= 0) {
            setInputs({ ...inputs, ErrorHappened: true });
          }
          break;

        case 'corporate':
          if (inputs.Floors <= 0) {
            setInputs({ ...inputs, ErrorHappened: true });
          } else if (inputs.Occupants <= 0) {
            setInputs({ ...inputs, ErrorHappened: true });
          }
          break;

        case 'hybrid':
          if (inputs.Floors <= 0) {
            setInputs({ ...inputs, ErrorHappened: true });
          } else if (inputs.Occupants <= 0) {
            setInputs({ ...inputs, ErrorHappened: true });
          }
          break;

        default:
          return;
      }
    }
  }

  function getURL() {
    switch (inputs.SelectedProject) {
      case 'residential':
        return URLs.residential;
      case 'commmercial':
        return URLs.commercial;
      case 'corporate':
        return URLs.corporate;
      case 'hybrid':
        return URLs.hybrid;

      default:
        break;
    }
  }

  function getQuoteData() {
    if (inputs.ErrorHappened) {
      return;
    } else {
      let urlToUse = getURL();

      const response = fetch(urlToUse);
      response
        .then((newquote) => {
          return newquote.json();
        })
        .then((newquote) => {
          setQuote(newquote);
        });
    }
  }

  //
  return (
    <>
      <section>
        <ScrollToTopOnMount />
        <ScrollUpButton />
        <MainHeader />

        <ProjectSelector
          inputs={inputs}
          inputChangeHandler={inputChangeHandler}
          setInputs={setInputs}
          setQuote={setQuote}
        />

        {inputs.SelectedProject === '' ? null : (
          <div className='row justify-content-center'>
            <NumberInputs
              inputs={inputs}
              inputChangeHandler={inputChangeHandler}
              setInputs={setInputs}
            />
            <RadioInputs
              inputs={inputs}
              inputChangeHandler={inputChangeHandler}
              getQuoteData={getQuoteData}
              inputValidation={inputValidation}
              setInputs={setInputs}
            />

            <Quote quote={quote} />
          </div>
        )}
      </section>
    </>
  );
}
