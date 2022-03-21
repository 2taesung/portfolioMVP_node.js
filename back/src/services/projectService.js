import { Project } from "../db"; // from을 폴더(db) 로 설정 시, 디폴트로 index.js 로부터 import함.
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

class ProjectService {
  async addProject({ title, description, from_date, to_date }) {
    //Cannot read properties of undefined (reading 'addProject') 에러발생
    console.log('여기');
    const newProject = { title, description, from_date, to_date };
    // db에 저장
    const createdNewProject = await Project.create({ newProject });
    createdNewProject.errorMessage = null; // 문제 없이 db 저장 완료되었으므로 에러가 없음.

    return createdNewProject;
  }
}

export { ProjectService };
