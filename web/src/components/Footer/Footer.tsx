import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Footer.css";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter  style={{ backgroundColor: '#4e2a84' ,bottom: 0,position:"fixed",width:"100%"}}>
      <MDBContainer className='p-4 pb-0'>
        <section className=''>
          <p className='d-flex justify-content-center align-items-center'>
            <span className='me-3' style={{color:"white"}}>Register for free</span>
            <MDBBtn type='button' outline color="light" rounded>
              Sign up!
            </MDBBtn>
          </p>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: "#4e2a84" ,color:"white"}}>
        MarkAid:
        <a  href='https://mdbootstrap.com/' style={{color:"white"}}>
            An Intelligent Learning Platform
        </a>
      </div>
    </MDBFooter>
  );
}