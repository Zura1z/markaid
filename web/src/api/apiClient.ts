import axios from "axios";

import { QARequestData } from "./types";

async function makeQARequest(data: QARequestData) {
  try {
    const response = await axios.post("http://127.0.0.1:8000/api/model/", data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export { makeQARequest };
