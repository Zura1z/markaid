import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import * as Icon from "react-bootstrap-icons";
import GridLayout from "react-grid-layout";
import {  StudentScroller } from "../ScrollableCard/StudentScroller";
const layout = [
  { i: "a", x: 0, y: 0, w: 1, h: 0, static: true },
  { i: "b", x: 6, y: 0, w: 2, h: 0, static: true  },
  { i: "c", x: 12, y: 0, w: 1, h: 0, static: true  },

];
function EssayGrading() {
  return (
    <>
    
      <div style={{ marginLeft: "17%", marginTop: "30px", color: "#4e2a84" }}>
        <Button
          variant="outline-secondary"
          style={{ color: "white", backgroundColor: "#4e2a84" }}
        >
          <Icon.ArrowLeft size={"20"} />
          Back
        </Button>
      </div>
      <div>
        <h1 style={{ marginLeft: "18%", padding: "50px", color: "#4e2a84" }}>
          Essay Grading
        </h1>
      </div>
      
      <GridLayout
        className="layout"
        layout={layout}
        cols={12}
        rowHeight={180}
        width={1800}
        margin={[360,5]}
      >
      <div key="a" >
      <Form
      
        style={{
          width:"800px",
          borderRadius: "13px",
        }}
      >
        
        <Form.Group
          className="mb-3"
          controlId="formBasicEmail"
          style={{ color: "#4e2a84", padding: "40px" }}
        >
          <Form.Label className="fw-bold">Marking Scheme</Form.Label>
          <Form.Control type="essay" style={{ height: "150px" }} />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="formBasicEmail"
          style={{ color: "#4e2a84", padding: "40px" }}
        >
          <Form.Label className="fw-bold">Input Essay Answer</Form.Label>
          <Form.Control type="essay-ans" style={{ height: "150px" }} />
        </Form.Group>
        <Button
          variant="outline-light"
          className="fw-bold"
          style={{
            color: "white",
            backgroundColor: "#4e2a84",
            marginLeft: "30%",
            width: "300px",
          }}
        >
          Submit
        </Button>{" "}
        <br />
        <br />
        
      </Form>
      </div>
      <div key="b" style={{padding:"20px"}}>
          <StudentScroller/>
      </div>
      
      <div key="c" style={{padding:"20px"}}>
        <h2 style={{fontWeight:"bold",marginTop:"200px",color:"#4e2a84",fontSize:"80px"}}>Grade</h2>
        <h3 style={{fontWeight:"bold",textAlign:"center",fontSize:"60px"}}>C</h3>
      </div>
      </GridLayout>
      
    </>
  );
}

export default EssayGrading;
