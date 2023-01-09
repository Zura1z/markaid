import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import React, { useState } from "react";
import {
  MDBCollapse,
  MDBContainer,
  MDBListGroup,
  MDBListGroupItem,
  MDBTypography,
} from "mdb-react-ui-kit";

export default function QuizQuestion() {
  const [collapse1, setCollapse1] = useState(false);
  const [collapse2, setCollapse2] = useState(false);
  const [collapse3, setCollapse3] = useState(false);

  const toggleCollapse1 = () => setCollapse1(!collapse1);
  const toggleCollapse2 = () => setCollapse2(!collapse2);
  const toggleCollapse3 = () => setCollapse3(!collapse3);

  return (
    <MDBContainer className="mt-5" style={{ maxWidth: "1000px" }}>
      <MDBListGroup>
        <MDBListGroupItem tag="a" href="#" onClick={toggleCollapse1} action>
          <MDBTypography tag="h5">Question 1</MDBTypography>
          <p className="mb-1">Short & concise version of the answer.</p>
          <small>
            <u>Learn more</u>
          </small>
          <MDBCollapse show={collapse1}>
            Detailed and comprehensive answer goes here. pariatur cliche
            reprehenderit, enim eiusmod high life accusamus terry richardson ad
            squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson
            cred nesciunt sapiente ea proident.
          </MDBCollapse>
        </MDBListGroupItem>
        <MDBListGroupItem tag="a" href="#" onClick={toggleCollapse2} action>
          <MDBTypography tag="h5">Question 2</MDBTypography>
          <p className="mb-1">Short & concise version of the answer.</p>
          <small>
            <u>Learn more</u>
          </small>
          <MDBCollapse show={collapse2}>
            Detailed and comprehensive answer goes here. pariatur cliche
            reprehenderit, enim eiusmod high life accusamus terry richardson ad
            squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson
            cred nesciunt sapiente ea proident.
          </MDBCollapse>
        </MDBListGroupItem>
        <MDBListGroupItem tag="a" href="#" onClick={toggleCollapse3} action>
          <MDBTypography tag="h5">Question 3</MDBTypography>
          <p className="mb-1">Short & concise version of the answer.</p>
          <small>
            <u>Learn more</u>
          </small>
          <MDBCollapse show={collapse3}>
            Detailed and comprehensive answer goes here. pariatur cliche
            reprehenderit, enim eiusmod high life accusamus terry richardson ad
            squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson
            cred nesciunt sapiente ea proident.
          </MDBCollapse>
        </MDBListGroupItem>
      </MDBListGroup>
    </MDBContainer>
  );
}