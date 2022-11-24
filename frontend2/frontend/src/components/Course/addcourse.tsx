import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import '/node_modules/react-grid-layout/css/styles.css';
import '/node_modules/react-resizable/css/styles.css';
import GridLayout from "react-grid-layout";


function BasicExample() {
  const layout = [
    { i: "a", x: 0, y: 0, w: 2, h: 2, static: true },
    { i: "b", x: 2, y: 0, w: 2, h: 2, static: true  },
    { i: "c", x: 4, y: 0, w: 2, h: 2, static: true  },
    { i: "D", x: 6, y: 0, w: 2, h: 2, static: true   },
    { i: "e", x: 0, y: 2, w: 2, h: 2, static: true   },
  ];
  return (
    <>
    <div style={{marginLeft: '200px',marginTop:'50px'}}>
      <h1>Courses</h1>
    </div>
      <GridLayout
        className="layout"
        layout={layout}
        cols={8}
        rowHeight={50}
        width={1500}
        margin={[200,20]}
      >
        <div key="a" style={{ padding: '20px' }}>
        <Card style={{ width: '20rem' }}>
        <Card.Body>
          <Card.Title>Object Oriented Programing</Card.Title>
          <Card.Text>
            Programing Fall 2022
          </Card.Text>
          <Button style={{ backgroundColor: "#880e4f" }} >
            Join Classroom
          </Button>
          <Button style={{ backgroundColor: "#b71c1c" }}>Delete Classroom</Button>
        </Card.Body>
      </Card>
        </div>
        <div key="b" style={{ padding: '20px' }}>
        <Card style={{ width: '20rem' }}>
        <Card.Body>
          <Card.Title>Object Oriented Programing</Card.Title>
          <Card.Text>
            Programing Fall 2022
          </Card.Text>
          <Button style={{ backgroundColor: "#880e4f" }} >
            Join Classroom
          </Button>
          <Button style={{ backgroundColor: "#b71c1c" }}>Delete Classroom</Button>
        </Card.Body>
      </Card>
        </div>
        <div key="c" style={{ padding: '20px' }}>
        <Card style={{ width: '20rem' }}>
        <Card.Body>
          <Card.Title>Object Oriented Programing</Card.Title>
          <Card.Text>
            Programing Fall 2022
          </Card.Text>
          <Button style={{ backgroundColor: "#880e4f" }} >
            Join Classroom
          </Button>
          <Button style={{ backgroundColor: "#b71c1c" }}>Delete Classroom</Button>
        </Card.Body>
      </Card>
        </div>
        <div key="D" style={{ padding: '20px' }}>
        <Card style={{ width: '20rem' }}>
        <Card.Body>
          <Card.Title>Object Oriented Programing</Card.Title>
          <Card.Text>
            Programing Fall 2022
          </Card.Text>
          <Button style={{ backgroundColor: "#880e4f" }} >
            Join Classroom
          </Button>
          <Button style={{ backgroundColor: "#b71c1c" }}>Delete Classroom</Button>
        </Card.Body>
      </Card>
        </div>
      </GridLayout>

      
    </>
  );
}

export default BasicExample;