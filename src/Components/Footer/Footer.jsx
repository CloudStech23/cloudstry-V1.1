import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import '../Footer/Footer.css'
import pagelogo from '../Images/cloudslogo.png'

export default function Footer() {
  return (
    <MDBFooter  className='text-center text-lg-start text-white'  style={{background:'#1236d0'}} >
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom' >
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          {/* <a href='' className='me-4 text-reset'>
            <MDBIcon color='light' fab icon='facebook-f' />
          </a> */}
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='light' fab icon='twitter' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='light' fab icon='google' />
          </a>
          {/* <a href='' className='me-4 text-reset'>
            <MDBIcon color='light' fab icon='instagram' />
          </a> */}
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='light' fab icon='linkedin' />
          </a>
          {/* <a href='' className='me-4 text-reset'>
            <MDBIcon color='light' fab icon='github' />
          </a> */}
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
            <Link className=" navbar-brand mx-3" to="/">
            <img
              src={pagelogo}
              className="img-fluid"
              // style={{ height: "3.5rem" }}
              alt="Logo"
            />
          </Link>
               
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Solutions</h6>
              
              <p>
              <Link to='/Digital-Certificate' className='text-reset nav-link'>
                  Digital Certificate
                </Link>
              </p>
              <p>
              <Link to='/3PL-Solution' className='text-reset nav-link'>
                  3PL (3-Party Logistic)
                </Link>
              </p>
              <p>
              <Link to='/Pet-Aadhar' className='text-reset nav-link'>
                  Pet Adhar
                </Link>
              </p>
              <p>
                <Link to='/Government' className='text-reset nav-link'>
                  Government
                </Link>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Industries</h6>
              <p>
                <Link to='/IT-Strategy-Consultancy' className='text-reset nav-link'>
                  It Strategy Consultancy
                </Link>
              </p>
              <p>
                <Link to='/Education' className='text-reset nav-link'>
                  Education
                </Link>
              </p>
              <p>
                <Link to='/Logistic' className='text-reset nav-link'>
                  Logistic
                </Link>
              </p>
              <p>
                <Link to='/Staffing-Solution' className='text-reset nav-link'>
                  Staffing Solution
                </Link>
              </p>
              <p>
                <Link to='/Support' className='text-reset nav-link'>
                  Contact Us
                </Link>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p className='align-items-start d-flex mb-2'>
                <MDBIcon color='light' icon='home' className='me-3 mt-1' />
                4th floor, Apollo Premier, Vijay Nagar Square, Vijay Nagar, Indore, Madhya Pradesh 452001
              </p>
              <p>
                <MDBIcon color='light' icon='envelope' className='me-3' />
                hr@cloudstrytech.com
              </p>
              <p>
                <MDBIcon color='light' icon='phone' className='me-3' /> +91 7313683823
              </p>
               
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        Copyright © 2024 All Rights Reserved |
        <Link className='text-reset fw-bold mx-1' to='/'>
        Cloudstry technologies Pvt Ltd
        </Link>
      </div>
    </MDBFooter>
  );
}