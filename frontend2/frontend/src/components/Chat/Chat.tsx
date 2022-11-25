import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import '/node_modules/react-grid-layout/css/styles.css';
import '/node_modules/react-resizable/css/styles.css';
import Button from 'react-bootstrap/Button';
function Chat() {
  return (
    <>
    <div style={{padding:"40px"}}>
        <h1 style={{color:"#880e4f"}}>Intelligent Question Answring System</h1>
    </div>
    <Form style={{padding:"40px"}}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" style={{color:"#880e4f"}}>
        <Form.Label>Context</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" style={{color:"#880e4f"}}>
        <Form.Label>Question</Form.Label>
        <Form.Control type="question" placeholder="Question?" />
      </Form.Group>
      <Button variant="outline-secondary" style={{marginLeft:"700px",backgroundColor:"#880e4f",color:"white"}}>Get Answer</Button>{' '}
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" style={{color:"#880e4f"}}>
        <Form.Label>Answer</Form.Label>
        <Form.Control type="answer" placeholder="Answer" />
      </Form.Group>
      
    </Form>
    </>
  );
}

export default Chat;