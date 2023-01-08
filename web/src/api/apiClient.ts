import axios from "axios";

import { QARequestData } from "./types";

const dashboardLink = "http://127.0.0.1:8000/api/dashboard/";

async function makeQARequest(data: QARequestData) {
  try {
    const response = await axios.post("http://127.0.0.1:8000/api/model/", data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function getCoursesByTeacher(id: number) {
  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/api/dashboard/view/course/list_by_teacher/",
      {
        teacher_id: id.toString(),
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export { makeQARequest, getCoursesByTeacher };
