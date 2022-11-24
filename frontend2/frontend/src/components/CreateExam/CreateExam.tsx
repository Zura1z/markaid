import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import '/node_modules/react-grid-layout/css/styles.css';
import '/node_modules/react-resizable/css/styles.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CreateExam() {
  return (
    
    <>
    <div>
        <h1 style={{marginRight:"100px",marginLeft:"100px",color:"#50254e"}}>Create Exam</h1>
    </div>
    <Form style={{marginRight:"100px",marginLeft:"100px"}}>
      <Row>
        <Col>
        <p>Exam Name</p>
          <Form.Control placeholder="Name" />
        </Col>
        <Col>
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Course</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>
        </Col>
      </Row>
      <br></br>
      <Row>
        <Col>
        <p>Date Start</p>
          <Form.Control placeholder="First name" />
        </Col>
        <Col>
        <p>Date End</p>
          <Form.Control placeholder="Last name" />
        </Col>
      </Row>
    </Form>
    <br/><br/><br/>
    <Card style={{marginRight:"100px",marginLeft:"100px",backgroundColor: "#ede5ed"}}>
    <Form style={{marginRight:"110px",marginLeft:"110px",marginTop:"20px"}}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label style={{color:"#50254e"}}>Question</Form.Label>
        <Form.Control type="question" placeholder="Question" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label style={{color:"#50254e"}}>Answer</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label style={{color:"#50254e"}}>Question Marks</Form.Label>
        <Form.Control type="marks" placeholder="Marks" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label style={{color:"#50254e"}}>Question Type</Form.Label>
        <Form.Control type="type" placeholder="Type" />
      </Form.Group>
    </Form>
    <br/>
    </Card>
    <br/>
    <Button variant="primary" size="lg" style={{backgroundColor:"green",marginLeft:"100px"}}>
          Add Question
        </Button>{' '}
    <Button variant="primary" size="lg" style={{backgroundColor:"#2e1496"}}>
          Create Exam
    </Button>
    <Button variant="primary" size="lg" style={{backgroundColor:"#9e0707",marginLeft:"900px"}}>
          Delete Question
    </Button>
    <br/><br/><br/>
    </>
  );
}

export default CreateExam;