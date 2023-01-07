import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import '/node_modules/react-grid-layout/css/styles.css';
import '/node_modules/react-resizable/css/styles.css';
import Button from 'react-bootstrap/Button';
// import {0-circle-fill  } from 'react-bootstrap-icons'
import * as Icon from 'react-bootstrap-icons';
function StudentTable() {
  return (
    <>
    <div style={{marginLeft:"17%",marginTop:"50px", color:"#4e2a84"}}>

     <Button variant="outline-secondary" style={{color:"white",backgroundColor:"#4e2a84"}}><Icon.ArrowLeft size={'20'}/>Back</Button>
    </div>
    <div>
        <h1 style={{marginLeft:"18%",marginTop:"50px", color:"#4e2a84"}}>Object Oriented Programing</h1>
    </div>
    <div>
      <Button variant="outline-secondary" style={{padding:"2px",marginLeft:"85%",width:"200px",color:"white",backgroundColor:"#4e2a84"}}><Icon.PersonAdd size={'30'}/>Add Student</Button>

    </div>
    <div style={{padding:"5%",marginLeft:"17%"}}>
    <Table striped bordered hover >
      <thead >
        <tr style={{backgroundColor:"#836eaa", color:"white"}}>
          <th style={{textAlign:"center"}}>Sr.no</th>
          <th style={{textAlign:"center"}}>Student Name</th>
          <th style={{textAlign:"center"}}>Username</th>
          <th style={{textAlign:"center"}}>Remove Student</th>
          
        </tr>
      </thead>
      <tbody>
        <tr style={{textAlign:"center"}}>
          <td>1</td>
          <td>Bilal</td>
          <td>i191874</td>
          <td style={{color:"red",textAlign:"center"}}><Icon.Trash size={'20'}/></td>
         
        </tr>
        <tr style={{textAlign:"center"}}>
          <td>2</td>
          <td>Zuraiz</td>
          <td>i191793</td>
          <td style={{color:"red",textAlign:"center"}}><Icon.Trash size={'20'}/></td>
        
        </tr>
        <tr style={{textAlign:"center"}}>
          <td>3</td>
          <td>Mustafa</td>
          <td>i191799</td>
          <td style={{color:"red",textAlign:"center"}}><Icon.Trash size={'20'}/></td>
          
        </tr>
        <tr style={{textAlign:"center"}}>
          <td>3</td>
          <td>Saud</td>
          <td>i191991</td>
          <td style={{color:"red",textAlign:"center"}}><Icon.Trash size={'20'}/></td>
          
        </tr>
        <tr style={{textAlign:"center"}}>
          <td>3</td>
          <td>Mark</td>
          <td>Otto</td>
          <td style={{color:"red",textAlign:"center"}}><Icon.Trash size={'20'}/></td>
          
        </tr>
      </tbody>
    </Table>
    </div>
    </>
  );
}

export default StudentTable;