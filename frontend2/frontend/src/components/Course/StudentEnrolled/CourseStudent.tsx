import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import '/node_modules/react-grid-layout/css/styles.css';
import '/node_modules/react-resizable/css/styles.css';

function StudentTable() {
  return (
    <>
    <div>
        <h1 style={{marginLeft:"100px",marginTop:"50px"}}>Object Oriented Programing</h1>
    </div>
    <Table striped bordered hover style={{marginLeft:"100px",marginTop:"20px"}}>
      <thead>
        <tr>
          <th >Sr.no</th>
          <th>Student Name</th>
          <th>Username</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
         
        </tr>
        <tr>
          <td>2</td>
          <td>Mark</td>
          <td>Otto</td>
        
        </tr>
        <tr>
          <td>3</td>
          <td>Mark</td>
          <td>Otto</td>
          
        </tr>
        <tr>
          <td>3</td>
          <td>Mark</td>
          <td>Otto</td>
          
        </tr>
        <tr>
          <td>3</td>
          <td>Mark</td>
          <td>Otto</td>
          
        </tr>
      </tbody>
    </Table>
    </>
  );
}

export default StudentTable;