import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import * as Icon from 'react-bootstrap-icons';

function EssayGrading() {
  return (
    <>
    <div style={{marginLeft:"100px",marginTop:"50px", color:"#4e2a84"}}>

<Button variant="outline-secondary" style={{color:"white",backgroundColor:"#4e2a84"}}><Icon.ArrowLeft size={'20'}/>Back</Button>
</div>
    <div>
        <h1 style={{marginLeft: '150px',padding:"50px",color:"#4e2a84"}}>Essay Grading</h1>
    </div>
    <Form style={{marginLeft: '200px',marginRight:'70px',backgroundColor:"#e4e0ee",borderRadius:"13px"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail" style={{color:"#4e2a84",padding:"40px"}}>
        <Form.Label className="fw-bold">Input Essay</Form.Label>
        <Form.Control type="essay" style={{height:"200px"}} />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail" style={{color:"#4e2a84",padding:"40px"}}>
        <Form.Label className="fw-bold">Input Essay Answer</Form.Label>
        <Form.Control type="essay-ans"  style={{height:"200px"}}/>
       
      </Form.Group>
      <Button variant="outline-light" className="fw-bold" style={{color:"white",backgroundColor:"#4e2a84",marginLeft:"250px",width:"700px"}}>Submit</Button>{' '}
      
      <br/><br/><br/>
    </Form>
    </>
  );

}

export default EssayGrading;