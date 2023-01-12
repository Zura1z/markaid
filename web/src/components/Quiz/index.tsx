import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import * as Icon from "react-bootstrap-icons";

function Quiz() {
  return (
    <>
      <div>
        <h1 style={{ marginLeft: "30%", padding: "50px", color: "#4e2a84" }}>
          Quiz Generation
        </h1>
      </div>
      <Form
        style={{
          marginLeft: "0%",
          marginRight: "100px",
          backgroundColor: "#e4e0ee",
          borderRadius: "13px",
        }}
      >
        <Form.Group
          className="mb-3"
          controlId="formBasicEmail"
          style={{ color: "#4e2a84", padding: "40px" }}
        >
          <Form.Label className="fw-bold">Input Context</Form.Label>
          <Form.Control type="essay" style={{ height: "200px" }} />
        </Form.Group>

        <div style={{ marginLeft: "30%" }}>
          <h3>Generate</h3>
          <Button variant="outline-secondary"> MCQs Questions</Button>{" "}
          <Button variant="outline-secondary">True/False Questions</Button>{" "}
          <Button variant="outline-secondary"> Short Questions</Button> <br />
          <br />
        </div>

        <Button
          variant="outline-light"
          className="fw-bold"
          style={{
            color: "white",
            backgroundColor: "#700303",
            marginLeft: "25%",
            width: "300px",
          }}
        >
          Remove Question
        </Button>
        <Button
          variant="outline-light"
          className="fw-bold"
          style={{ color: "white", backgroundColor: "#4e2a84", width: "300px" }}
        >
          Generate Test
        </Button>
        <br />
        <br />
        <br />
      </Form>
    </>
  );
}

export default Quiz;
