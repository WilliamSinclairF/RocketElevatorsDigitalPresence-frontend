import React from 'react';
import Typography from '@material-ui/core/Typography';
import CurrencyFormatter from './CurrencyFormatter';

export default function Quote({ quote }) {
  return (
    <>
      <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12 text-center'>
        <h4 className='text-blue fw-300'>Your Quote:</h4>
        <br />

        <table className='table'>
          <tbody id='quotetable'>
            <tr>
              <th scope='row'>
                {' '}
                <Typography variant='body2' color='textSecondary'>
                  Quote ID:
                </Typography>
              </th>
              <td id='quote-id'>
                <Typography variant='body2' color='textPrimary'>
                  {quote.id}
                </Typography>
              </td>
            </tr>

            <tr>
              <th scope='row'>
                <Typography variant='body2' color='textSecondary'>
                  Elevators needed:
                </Typography>
              </th>
              <td id='quote-elevators'>
                <Typography variant='body2' color='textPrimary'>
                  {quote.totalShafts}
                </Typography>
              </td>
            </tr>

            <tr>
              <th scope='row'>
                <Typography variant='body2' color='textSecondary'>
                  Columns needed:{' '}
                </Typography>
              </th>
              <td id='quote-columns'>
                <Typography variant='body2' color='textPrimary'>
                  {quote.totalColumns}
                </Typography>
              </td>
            </tr>

            <tr>
              <th scope='row'>
                <Typography variant='body2' color='textSecondary'>
                  Install fee:{' '}
                </Typography>
              </th>
              <td id='quote-installfee'>
                <Typography variant='body2' color='textPrimary'>
                  {CurrencyFormatter(quote.installFee)}
                </Typography>
              </td>
            </tr>

            <tr>
              <th scope='row'>
                <Typography variant='body2' color='textSecondary'>
                  Subtotal:{' '}
                </Typography>
              </th>
              <td id='quote-subtotal'>
                <Typography variant='body2' color='textPrimary'>
                  {CurrencyFormatter(quote.subTotal)}
                </Typography>
              </td>
            </tr>

            <tr>
              <th scope='row'>
                <Typography variant='body2' color='textSecondary'>
                  Total:{' '}
                </Typography>
              </th>
              <td id='quote-total'>
                <Typography variant='body2' color='textPrimary'>
                  {CurrencyFormatter(quote.total)}
                </Typography>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
