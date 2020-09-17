import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons/faGlobe';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons/faMailBulk';
import { Button } from 'react-bootstrap';

import React from 'react';
import Map from './map/Map';

export default function Footer() {
  return (
    <>
      <div id='contact' className='container-fluid mt-30'></div>
      <section>
        <div className='container-fluid'>
          <h2 className='text-center text-blue fw-300'>
            Questions? Get in touch{' '}
          </h2>
          <hr />
          <div className='row'>
            <div className='col-md-6 col-sm-6'>
              <br />
              <div id='alert_success' className='alert alert-success mb-30'>
                <button
                  type='button'
                  className='close'
                  data-dismiss='alert'
                  aria-hidden='true'>
                  &times;
                </button>
                <strong>Thank You!</strong> Your message successfully sent!
              </div>

              <div id='alert_failed' className='alert alert-danger mb-30'>
                <button
                  type='button'
                  className='close'
                  data-dismiss='alert'
                  aria-hidden='true'>
                  &times;
                </button>
                <strong>[SMTP] Error!</strong> Internal server error!
              </div>

              <div id='alert_mandatory' className='alert alert-danger mb-30'>
                <button
                  type='button'
                  className='close'
                  data-dismiss='alert'
                  aria-hidden='true'>
                  &times;
                </button>
                <strong>Sorry!</strong> You need to complete all mandatory (*)
                fields!
              </div>

              <form action='php/contact.php' method='post'>
                <fieldset>
                  <input type='hidden' name='action' />

                  <div className='row'>
                    <div className='col-4'>
                      <label htmlFor='contact:name'>Full Name *</label>
                      <input
                        required
                        type='text'
                        className='form-control'
                        name='contact[name][required]'
                      />
                    </div>
                    <div className='col-6'>
                      <label htmlFor='contact:businessname'>
                        Business Name
                      </label>
                      <input
                        type='text'
                        className='form-control'
                        name='businessname'
                        id='businessname'
                      />
                    </div>
                    <div className='col-5'>
                      <label htmlFor='contact:email'>E-mail Address *</label>
                      <input
                        required
                        type='email'
                        className='form-control'
                        name='contact[email][required]'
                        id='contact:email'
                      />
                    </div>
                    <div className='col-md-4'>
                      <label htmlFor='contact:phone'>Phone</label>
                      <input
                        type='text'
                        className='form-control'
                        name='contact[phone]'
                        id='contact:phone'
                      />
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-4'>
                      <label htmlFor='contact:projectname'>
                        Project Name *
                      </label>
                      <input
                        required
                        type='text'
                        className='form-control'
                        name='contact[projectname][required]'
                      />
                    </div>
                    <div className='col-4'>
                      <label htmlFor='contact:projectname'>
                        Project Description *
                      </label>
                      <input
                        required
                        type='text'
                        className='form-control'
                        name='contact[projectname][required]'
                      />
                    </div>
                    <div className='col-md-4'>
                      <label htmlFor='contact_department'>Department</label>
                      <select
                        className='form-control pointer'
                        name='contact[department]'>
                        <option>--- Select ---</option>
                        <option>Sales</option>
                        <option>Engineering</option>
                        <option>Construction</option>
                        <option>Consulting</option>
                      </select>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-md-12'>
                      <label htmlFor='contact:projectdescription'>
                        Message *
                      </label>
                      <textarea
                        required
                        rows='8'
                        className='form-control'
                        name='contact[projectdescription]'
                        id='contact:projectdescription'></textarea>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-md-12'>
                      <label htmlFor='contact:attachment'>
                        File Attachment
                      </label>

                      <input
                        className='custom-file-upload'
                        type='file'
                        id='file'
                        name='contact[attachment]'
                        data-btn-text='Select a File'
                      />
                      <small className='text-muted block'>
                        Max file size: 10Mb (zip/pdf/jpg/png)
                      </small>
                    </div>
                  </div>
                </fieldset>

                <div className='row'>
                  <div className='col-md-12'>
                    <Button variant='primary' size='lg'>
                      SEND MESSAGE
                    </Button>
                  </div>
                </div>
              </form>
            </div>

            <div className='col-md-4 col-sm-4'>
              <h5 className='pb-10 text-center'>
                Visit Our World Class Offices
              </h5>
              <hr />

              <Map />

              <hr />
              <p>
                <span className='block'>
                  <strong>
                    <FontAwesomeIcon icon={faGlobe} /> Address: <br />
                  </strong>
                  4468 Wellington St Suite 204, <br />
                  Verdun, QC, H4G 1W5, Canada
                </span>
                <br />
                <span className='block'>
                  <strong>
                    <FontAwesomeIcon icon={faPhone} /> Phone:
                  </strong>{' '}
                  <br />
                  <a href='(581) 701-0303'> (581) 701-0303</a>
                </span>
                <br />
                <span className='block'>
                  <strong>
                    <FontAwesomeIcon icon={faMailBulk} /> Email:{' '}
                  </strong>
                  <br />
                  <a href='inquiries@rocketelevators.com'>
                    inquiries@rocketelevators.com
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer id='footer'>
        <div className='container-fluid mt-30'>
          <div className='row'>
            <div className='col-md-8'>
              <h2 className='letter-spacing-1'>Your Project Is Our Passion</h2>

              <p>
                After our humble beginnings in 1976, Rocket Elevators quickly
                proved to be a different kind of elevator company with our
                superior attention to detail. Our team of experts is dedicated
                to ensuring that your next project will be a success.
              </p>
              <h2>(581) 701-0303</h2>
            </div>

            <div className='col-md-4'>
              <h2 className='letter-spacing-1'>ROCKET ELEVATORS WEEKLY</h2>

              <p>
                Subscribe to receive weekly updates on our upcoming projects and
                new technological breakthroughs
              </p>

              <form
                className='validate'
                action='php/newsletter.php'
                method='post'
                data-success='Subscribed! Thank you!'
                data-toastr-position='bottom-right'>
                <div className='input-group'>
                  <span className='input-group-addon'>
                    <i className='fa fa-envelope'></i>
                  </span>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    className='form-control required'
                    placeholder='Your Email'
                  />
                  <span className='input-group-btn'>
                    <Button variant='primary'>Subscribe</Button>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className='copyright'>
          <div className='container'>
            <ul className='float-right m-0 list-inline mobile-block'>
              <li>Terms &amp; Conditions</li>
              <li>&bull;</li>
              <li>Privacy</li>
            </ul>
            &copy; All Rights Reserved, Rocket Elevators Inc.
          </div>
        </div>
      </footer>
    </>
  );
}
