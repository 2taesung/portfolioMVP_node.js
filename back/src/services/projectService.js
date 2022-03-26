import { Project } from "../db"; // from을 폴더(db) 로 설정 시, 디폴트로 index.js 로부터 import함.
import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken";

class ProjectService {
  static async addProject({ user_id, title, description, from_date, to_date }) {
    const id = uuidv4();
    const newProject = { id, user_id, title, description, from_date, to_date };
    // db에 저장
    const createdNewProject = await Project.create({ newProject });
    createdNewProject.errorMessage = null; // 문제 없이 db 저장 완료되었으므로 에러가 없음.

    return createdNewProject;
  }

  static async getProjectList({ user_id }) {
    const projectlist = await Project.findAll({ user_id })

    return projectlist
  }
  static async getProjects({ projects_id }) {
    const projects = await Project.findById({ projects_id })
    console.log(projects);
    return projects
  }

  static async setProjects({ projects_id, toUpdate }) {
    // 해당 certi_id 존재하는지 확인
    const projects = await Project.findById({ projects_id })

    // db 에서 찾지 못한 경우, 에러 메세지 반환
    if (!projects) {
      const errorMessage = "해당 프로젝트이력은 존재하지 않습니다."
      return { errorMessage }
    }

    // db 에서 업데이트
    const updatedProjects = await Project.update({ projects_id, toUpdate })
    return updatedProjects

  }
}

export { ProjectService };
