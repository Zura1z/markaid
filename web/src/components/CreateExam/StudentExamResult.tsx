import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import '/node_modules/react-grid-layout/css/styles.css';
import '/node_modules/react-resizable/css/styles.css';
import Button from 'react-bootstrap/Button';
// import {0-circle-fill  } from 'react-bootstrap-icons'
import * as Icon from 'react-bootstrap-icons';

function StudentExamResults() {
  return (
    <>
    <div style={{marginLeft:"17%",marginTop:"50px", color:"#4e2a84"}}>

     <Button variant="outline-secondary" style={{color:"white",backgroundColor:"#4e2a84"}}><Icon.ArrowLeft size={'20'}/>Back</Button>
    </div>
    <div>
        <h1 style={{marginLeft:"18%",marginTop:"50px", color:"#4e2a84"}}>Classroom Name</h1>
    </div>
    {/* <div style={{color:"black", marginLeft:"18%"}}>
    <p style={{color:"black"}}>Subject Title: </p>
    <p>Total Marks: </p>
    <p>Exam Date: </p>
    <p>Total Responses: </p>
    <p>Average Marks: </p>
    </div> */}
    
    <div style={{marginLeft:"18%",padding:"100px", marginTop:"-50px"}}>
    <Table striped bordered hover >
      <thead >
        <tr style={{backgroundColor:"#836eaa", color:"white"}}>
          <th style={{textAlign:"center"}}>Exam ID</th>
          <th style={{textAlign:"center"}}>Exam Name</th>
          <th style={{textAlign:"center"}}>Class Name</th>
          <th style={{textAlign:"center"}}>Teacher Name</th>
          <th style={{textAlign:"center"}}>Total Marks</th>
          <th style={{textAlign:"center"}}>Your Marks</th>
        </tr>
      </thead>
      <tbody>
        <tr style={{textAlign:"center"}}>
          <td>01</td>
          <td>Quiz 1</td>
          <td>OOP</td>
          <td>Bilal</td>
          <td>100</td>
          <td>50</td>
          {/* <Button style={{borderColor:"white" }}>

          <td  style={{color:"green",textAlign:"center"}} ><Icon.BoxArrowInUpRight size={'20'}/>{' '}Open Exam</td>
          </Button> */}
          
          
        </tr>
        <tr style={{textAlign:"center"}}>
        <td>05</td>
          <td>Assignment 1</td>
          <td>OOP</td>
          <td>Zuraiz</td>
          <td>50</td>
          <td>30</td>
          {/* <Button style={{borderColor:"white" }}>

          <td  style={{color:"green",textAlign:"center"}} ><Icon.BoxArrowInUpRight size={'20'}/>{' '}Open Exam</td>
          </Button> */}
          
          </tr>
          
        
      </tbody>
    </Table>
    </div>
    </>
  );
}

export default StudentExamResults;