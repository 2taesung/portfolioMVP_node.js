import { ProjectModel } from "../schemas/project";

class Project {
  static async create({ newProject }) {
    const createdNewProject = await ProjectModel.create(newUser);
    return createdNewProject;
  }
}

export { Project };
