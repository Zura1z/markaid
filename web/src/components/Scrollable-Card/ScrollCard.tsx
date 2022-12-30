
// import "./Scroller.css";
// 
// function Scroller() {
//     return (
//       <>

//        <div className="container">
  
    
//     <div className="center-col">
//       <span>List</span>
//       <ul>
//         {items.map((item, i) => (<li key={`item_${i}`}>{ item }</li>))}
//       </ul>
//     </div>
    
   
//   </div>
//       </>
//     )
// }
// export default Scroller;
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Scroller.css";
import 'bootstrap/dist/css/bootstrap.min.css';
const items = [...Array(100)].map((val, i) => `Item ${i}`);
function BasicExample() {
  return (
    <Card style={{ width: '30rem' ,backgroundColor:"#836eaa"}}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body  >
        <Card.Title style={{color:"white"}}>Card Title</Card.Title>
        <div className='container'>
        <Card.Text className='center-col' style={{backgroundColor:"white",borderRadius:"13px",padding:"20px"}}>
        Customised Approach:
Automated essay scoring (AES) refers to the use of computer programs to evaluate and grade written essays. These systems use natural language processing and machine learning techniques to analyze the content and structure of written work and assign a score based on various criteria.
There are several factors that can be considered when designing a customised automated essay scoring model. Some of these include:

The purpose of the model: Is the model being developed to grade essays for a particular course or assignment, or is it intended for use in a more general context? This will help determine the specific criteria that the model should be trained to consider.
The types of essays that will be scored: Different types of essays, such as persuasive, argumentative, or narrative, may require different approaches to scoring.
The training data: The model will need to be trained on a large dataset of essays that have been scored by human graders. This dataset should be representative of the types of essays that the model will be expected to grade.
The scoring criteria: The model should be trained to consider various criteria when grading essays, such as grammar, spelling, punctuation, organization, content, and style. The specific criteria that the model should consider will depend on the purpose of the model and the types of essays it will be grading.

Automated essay scoring (AES) is the use of natural language processing and machine learning techniques to automatically evaluate the content and quality of an essay. It is used in educational settings to grade student essays and in other contexts where large numbers of essays need to be quickly and accurately scored.

There are several approaches to designing a custom architecture for automated essay scoring. One approach is to use machine learning techniques to build a model that can predict the score that a human grader would give to an essay. This model can be trained on a large dataset of human-graded essays, and can then be used to score new essays.

To build such a model, we would need to select and preprocess the input data, select and configure the machine learning algorithms and models, and evaluate the performance of the model. We may also need to fine-tune the model by adjusting its parameters or using techniques such as cross-validation and hyperparameter optimization.

It is important to carefully evaluate the performance of the model and ensure that it is accurate and reliable before using it in a production setting. We may also need to consider ethical and privacy issues related to the use of automated essay scoring.

        </Card.Text>
        </div>
        
      </Card.Body>
    </Card>
  );
}

export default BasicExample;