import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import '/node_modules/react-grid-layout/css/styles.css';
import '/node_modules/react-resizable/css/styles.css';
import Button from 'react-bootstrap/Button';
// import {0-circle-fill  } from 'react-bootstrap-icons'
import * as Icon from 'react-bootstrap-icons';
function ExamDetails() {
  return (
    <>
    <div style={{marginLeft:"17%",marginTop:"50px", color:"#4e2a84"}}>

     <Button variant="outline-secondary" style={{color:"white",backgroundColor:"#4e2a84"}}><Icon.ArrowLeft size={'20'}/>Back</Button>
    </div>
    <div>
        <h1 style={{marginLeft:"18%",marginTop:"50px", color:"#4e2a84"}}>Exam Details</h1>
    </div>
    <div style={{color:"black", marginLeft:"18%"}}>
    <p style={{color:"black"}}>Subject Title: </p>
    <p>Total Marks: </p>
    <p>Exam Date: </p>
    <p>Total Responses: </p>
    <p>Average Marks: </p>
    </div>
    
    <div style={{marginLeft:"20%",padding:"100px", marginTop:"-50px"}}>
    <Table striped bordered hover >
      <thead >
        <tr style={{backgroundColor:"#836eaa", color:"white"}}>
          <th style={{textAlign:"center"}}>Sr.No</th>
          <th style={{textAlign:"center"}}>Student Name</th>
          <th style={{textAlign:"center"}}>Obtained Marks</th>
          <th style={{textAlign:"center"}}>View Exam</th>

          
        </tr>
      </thead>
      <tbody>
        <tr style={{textAlign:"center"}}>
          <td>1</td>
          <td>Bilal Ahmed</td>
          <td>50</td>
          <Button style={{borderColor:"white" }}>
          <td  style={{color:"red",textAlign:"center"}} ><Icon.BoxArrowInUpRight size={'20'}/></td>
          </Button>
          
          
        </tr>
        <tr style={{textAlign:"center"}}>
          <td>2</td>
          <td>Zuraiz Zahoor</td>
          <td>60</td>
          
          <Button style={{borderColor:"white" }}>
          <td  style={{color:"red",textAlign:"center"}} ><Icon.BoxArrowInUpRight size={'20'}/></td>
          </Button>
          
        </tr>
        
      </tbody>
    </Table>
    </div>
    </>
  );
}

export default ExamDetails;