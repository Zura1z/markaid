import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import '/node_modules/react-grid-layout/css/styles.css';
import '/node_modules/react-resizable/css/styles.css';
import GridLayout from "react-grid-layout";
import * as Icon from "react-bootstrap-icons";
import AddClassroomButton from './AddClassroomForm';
import Addstudent from './Addstudent';

function TeacherClassroom() {
  const layout = [
    { i: "a", x: 0, y: 0, w: 2, h: 2, static: true },
    { i: "b", x: 2, y: 0, w: 2, h: 2, static: true  },
    { i: "c", x: 4, y: 0, w: 2, h: 2, static: true  },
    { i: "D", x: 6, y: 0, w: 2, h: 2, static: true   },
    { i: "e", x: 0, y: 2, w: 2, h: 2, static: true   },
  ];
  return (
    <>
    <div style={{marginLeft: '18%',marginTop:'50px'}}>
      <h1>My Classrooms</h1>
    </div>
    {/* <Button  style={{marginLeft:"80%",backgroundColor:"#4e2a84",width:"15rem"}}>
        <Icon.PlusLg size={"20"}></Icon.PlusLg>
        Add Classroom</Button>{' '} */}
        <div style={{marginLeft:"80%",backgroundColor:"#4e2a84",width:"15rem",borderColor:"white" }}>
        <AddClassroomButton/>
        </div>
      <GridLayout
        className="layout"
        layout={layout}
        cols={8}
        rowHeight={90}
        width={2300}
        margin={[500,70]}
      >
        <div key="a" style={{ padding: '20px' }}>
        <Card style={{ width: '28rem' }}>
        <Card.Body>
          <Card.Title>Object Oriented Programing</Card.Title>
          <Card.Text>
            Programing Fall 2022
          </Card.Text>
          <Addstudent/>
          {'   '}
          <Button style={{ backgroundColor: "#836eaa",borderColor:"white" }}>Open Classroom</Button>
          {'   '}
          <Button style={{ backgroundColor: "#b71c1c",borderColor:"white" }}>Delete Classroom</Button>
        </Card.Body>
      </Card>
        </div>
        <div key="b" style={{ padding: '20px' }}>
        <Card style={{ width: '28rem' }}>
        <Card.Body>
          <Card.Title>Object Oriented Programing</Card.Title>
          <Card.Text>
            Programing Fall 2022
          </Card.Text>
          <Addstudent/>
          {'   '}
          <Button style={{ backgroundColor: "#836eaa",borderColor:"white" }}>Open Classroom</Button>
          {'   '}
          <Button style={{ backgroundColor: "#b71c1c",borderColor:"white" }}>Delete Classroom</Button>
        </Card.Body>
      </Card>
        </div>
        <div key="c" style={{ padding: '20px' }}>
        <Card style={{ width: '28rem' }}>
        <Card.Body>
          <Card.Title>Object Oriented Programing</Card.Title>
          <Card.Text>
            Programing Fall 2022
          </Card.Text>
          <Addstudent/>
          {'   '}
          <Button style={{ backgroundColor: "#836eaa",borderColor:"white" }}>Open Classroom</Button>
          {'   '}
          <Button style={{ backgroundColor: "#b71c1c",borderColor:"white" }}>Delete Classroom</Button>
        </Card.Body>
      </Card>
        </div>
        <div key="D" style={{ padding: '20px' }}>
        <Card style={{ width: '28rem' }}>
        <Card.Body>
          <Card.Title>Object Oriented Programing</Card.Title>
          <Card.Text>
            Programing Fall 2022
          </Card.Text>
          <Addstudent/>
          {'   '}
          <Button style={{ backgroundColor: "#836eaa",borderColor:"white" }}>Open Classroom</Button>
          {'   '}
          <Button style={{ backgroundColor: "#b71c1c",borderColor:"white" }}>Delete Classroom</Button>
        </Card.Body>
      </Card>
      </div>
      <div key="e" style={{ padding: '20px' }}>
      <Card style={{ width: '28rem' }}>
        <Card.Body>
          <Card.Title>Object Oriented Programing</Card.Title>
          <Card.Text>
            Programing Fall 2022
          </Card.Text>
          
          {/* <Icon.PersonAdd size={"30"} style={{ color:"white", backgroundColor: "#880e4f", borderRadius:"10px" ,borderColor:"white"}}/> */}
          <Addstudent/>
          {'   '}
          <Button style={{ backgroundColor: "#836eaa",borderColor:"white" }}>Open Classroom</Button>
          {'   '}
          <Button style={{ backgroundColor: "#b71c1c",borderColor:"white" }}>Delete Classroom</Button>
        </Card.Body>
      </Card>
      </div>
        
    
        
      </GridLayout>

      
    </>
  );
}

export default TeacherClassroom;