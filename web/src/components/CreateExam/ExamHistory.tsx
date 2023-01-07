import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import '/node_modules/react-grid-layout/css/styles.css';
import '/node_modules/react-resizable/css/styles.css';
import Button from 'react-bootstrap/Button';
// import {0-circle-fill  } from 'react-bootstrap-icons'
import * as Icon from 'react-bootstrap-icons';
function ExamHistory() {
  return (
    <>
    <div style={{marginLeft:"17%",marginTop:"50px", color:"#4e2a84"}}>

     <Button variant="outline-secondary" style={{color:"white",backgroundColor:"#4e2a84"}}><Icon.ArrowLeft size={'20'}/>Back</Button>
    </div>
    <div>
        <h1 style={{marginLeft:"18%",marginTop:"50px", color:"#4e2a84"}}>Exam History</h1>
    </div>
    <div>
      <Button variant="outline-secondary" style={{padding:"2px",marginLeft:"85%",width:"200px",color:"white",backgroundColor:"#4e2a84"}}><Icon.CalendarPlus size={'25'}/>{' '}{' '}Shedule Exam</Button>

    </div>
    <div style={{marginLeft:"20%",padding:"100px", marginTop:"-50px"}}>
    <Table striped bordered hover >
      <thead >
        <tr style={{backgroundColor:"#836eaa", color:"white"}}>
          <th style={{textAlign:"center"}}>Exam ID</th>
          <th style={{textAlign:"center"}}>Class Name</th>
          <th style={{textAlign:"center"}}>Total Student</th>
          <th style={{textAlign:"center"}}>Student Attempted</th>
          <th style={{textAlign:"center"}}>View Exam</th>
          <th style={{textAlign:"center"}}>Exam Status</th>
          <th style={{textAlign:"center"}}>Remove Exam</th>
          
        </tr>
      </thead>
      <tbody>
        <tr style={{textAlign:"center"}}>
          <td>1</td>
          <td>OOP</td>
          <td>50</td>
          <td>30</td>
          <Button style={{borderColor:"white" }}>
          <td  style={{color:"red",textAlign:"center"}} ><Icon.BoxArrowInUpRight size={'20'}/></td>
          </Button>
          
          <td>Completed</td>
          <Button style={{borderColor:"white" }}>
          <td style={{color:"red",textAlign:"center"}}><Icon.Trash size={'20'}/></td>
         </Button>
        </tr>
        <tr style={{textAlign:"center"}}>
          <td>2</td>
          <td>Programing Fandumental</td>
          <td>50</td>
          <td>20</td>
          <Button style={{borderColor:"white" }}>
          <td  style={{color:"red",textAlign:"center"}} ><Icon.BoxArrowInUpRight size={'20'}/></td>
          </Button>
          <td>Completed</td>
            <Button style={{borderColor:"white"}}>
            
          <td style={{color:"red",textAlign:"center"}}><Icon.Trash size={'20'}/></td>
          </Button>
        </tr>
        
      </tbody>
    </Table>
    </div>
    </>
  );
}

export default ExamHistory;