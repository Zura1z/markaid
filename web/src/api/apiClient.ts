import axios from "axios";

import { QARequestData } from "./types";

import { Course } from "../types";

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
      dashboardLink + "view/course/list_by_teacher/",
      {
        teacher_id: id.toString(),
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function createCourse(data: Course) {
  try {
    const response = await axios.post(dashboardLink + "create/course/", data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function deleteCourse(id: number) {
  try {
    const response = await axios.delete(`${dashboardLink}delete/course/${id}/`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export { makeQARequest, getCoursesByTeacher, createCourse, deleteCourse };
