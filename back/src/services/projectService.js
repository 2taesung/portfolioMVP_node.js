import { Project } from "../db"; // from을 폴더(db) 로 설정 시, 디폴트로 index.js 로부터 import함.
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

class ProjectService {
  static async addProject({ user_id, title, description, from_date, to_date }) {
    const newProject = { user_id, title, description, from_date, to_date };
    // db에 저장
    const createdNewProject = await Project.create({ newProject });
    createdNewProject.errorMessage = null; // 문제 없이 db 저장 완료되었으므로 에러가 없음.

    return createdNewProject;
  }

  static async getProjects({ user_id }) {
    const projects = await Project.findAll({ user_id })

    return projects
  }
}

export { ProjectService };
