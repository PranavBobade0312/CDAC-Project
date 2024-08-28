import React from 'react';
import './Footer.css';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='bg-dark text-center text-white footer-container'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4 footer-social-icons'>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#3b5998' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='facebook-f' className='footer-icon' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#55acee' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='twitter' className='footer-icon' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#dd4b39' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='google' className='footer-icon' />
          </MDBBtn>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#ac2bac' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='instagram' className='footer-icon' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#0082ca' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='linkedin-in' className='footer-icon' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#333333' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='github' className='footer-icon' />
          </MDBBtn>
        </section>
      </MDBContainer>
    <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4 footer-section'>
              <h6 className='text-uppercase fw-bold mb-4 footer-title'>
                <MDBIcon icon="gem" className="me-3" />
                Restaurant System 
              </h6>
              <p className='footer-text'>
              Welcome to Restaurant System Project!  Our project aims to streamline restaurant operations, enhance customer satisfaction, and provide a seamless digital platform for both patrons and staff.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4 footer-section'>
              <h6 className='text-uppercase fw-bold mb-4 footer-title'>Food Items</h6>
              <p>
                <a href='#!' className='text-reset footer-link'>
                Salads
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset footer-link'>
                Burgers & Sandwiches
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset footer-link'>
                Desserts
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset footer-link'>
                Veg & Non-Veg
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4 footer-section'>
              <h6 className='text-uppercase fw-bold mb-4 footer-title'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset footer-link'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset footer-link'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset footer-link'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset footer-link'>
                  Help
                </a>
              </p>
            </MDBCol>


            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4 footer-section'>
              <h6 className='text-uppercase fw-bold mb-4 footer-title'>Contact</h6>
              <p>
                <a href='#!' className='text-reset footer-link'>
                  restrorun@restosystem.com
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset footer-link'>
                  +91 1234567890
                </a>
              </p>
            </MDBCol>

          
            
          </MDBRow>
        </MDBContainer>
      </section>
      <div className='text-center p-3 footer-bg'>
        © 2024 Copyright
        <a className='text-white footer-copyright' href='https://mdbootstrap.com/'>
            <span> restaurantsystem.com</span> 
        </a>
      </div>
    </MDBFooter>
  );
}
