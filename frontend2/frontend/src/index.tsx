import * as React from "react";
import * as ReactDOM from "react-dom";
import FirstComponent from "./components/FirstComponent";
import UserComponent from "./components/UserComponent";
import AddCourse from "./components/Course/addcourse";
ReactDOM.render(
  // <div>
  //   <h1>Hello, Welcome to React and TypeScript</h1>
  //   <FirstComponent />
  //   <UserComponent
  //     name="John Doe"
  //     age={26}
  //     address="87 Summer St, Boston, MA 02110"
  //     dob={new Date()}
  //   />
  // </div>,
  <AddCourse />,
  document.getElementById("root")
);
