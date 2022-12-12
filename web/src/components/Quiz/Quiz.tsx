import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import * as Icon from 'react-bootstrap-icons';

function Quiz() {
  return (
    <>
    <div style={{marginLeft:"100px",marginTop:"50px", color:"#4e2a84"}}>

<Button variant="outline-secondary" style={{color:"white",backgroundColor:"#4e2a84"}}><Icon.ArrowLeft size={'20'}/>Back</Button>
</div>
    <div>
        <h1 style={{marginLeft: '150px',padding:"50px",color:"#4e2a84"}}>Quiz Genration</h1>
    </div>
    <Form style={{marginLeft: '200px',marginRight:'70px',backgroundColor:"#e4e0ee",borderRadius:"13px"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail" style={{color:"#4e2a84",padding:"40px"}}>
        <Form.Label className="fw-bold">Input Context</Form.Label>
        <Form.Control type="essay" style={{height:"200px"}} />
       
      </Form.Group>
      <div style={{marginLeft:"300px"}}>
      <Button variant="outline-secondary">Genratere MCQ</Button>{' '}
      <Button variant="outline-secondary">Genratere True/False</Button>{' '}
      <Button variant="outline-secondary">Genratere FAQ</Button>{' '}
      <Button variant="outline-secondary">Genratere Q/Ans</Button>{' '}
      <br/><br/><br/><br/>
      </div>
     
      <Button variant="outline-light" className="fw-bold" style={{color:"white",backgroundColor:"#700303",marginLeft:"300px",width:"300px"}}>Remove Question</Button>
      <Button variant="outline-light" className="fw-bold" style={{color:"white",backgroundColor:"#4e2a84",width:"300px"}}>Genrate Test</Button>
      <br/><br/><br/>
    </Form>
    </>
  );

}

export default Quiz;