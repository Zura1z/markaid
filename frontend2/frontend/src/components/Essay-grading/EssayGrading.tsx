import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function EssayGrading() {
  return (
    <>
    <div>
        <h1 style={{marginLeft: '150px',padding:"50px",color:"#880e4f"}}>Essay Grading</h1>
    </div>
    <Form style={{marginLeft: '200px',marginRight:'70px'}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Input Essay</Form.Label>
        <Form.Control type="essay" placeholder="Input Essay"  style={{height:"200px"}} />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Input Essay Answer</Form.Label>
        <Form.Control type="essay-ans" placeholder="Input Essay Answer" style={{height:"200px"}}/>
       
      </Form.Group>
      <Button variant="primary" type="submit" style={{backgroundColor:"#880e4f",marginLeft:"250px",width:"700px"}}>
        Submit
      </Button>
    </Form>
    </>
  );

}

export default EssayGrading;