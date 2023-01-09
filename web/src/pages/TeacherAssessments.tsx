import "bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";

import { IdProp } from "../types";

import { ScrollCard } from "../components/ScrollableCard/ScrollCard";

function TeacherAssessments(props: IdProp) {
  return (
    <>
      <ScrollCard />
    </>
  );
}

export default TeacherAssessments;
