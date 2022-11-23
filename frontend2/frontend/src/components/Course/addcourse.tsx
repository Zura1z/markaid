import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
function BasicExample() {
  return (
    <Card style={{ width: '25rem' }}>
      <Card.Body>
        <Card.Title>Object Oriented Programing</Card.Title>
        <Card.Text>
          Programing Fall 2022
        </Card.Text>
        <Button style={{ backgroundColor: "#880e4f" }} >
          Join Classroom
        </Button>
        <></>
        <Button style={{ backgroundColor: "#b71c1c" }}>Delete Classroom</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;