import { ProjectModel } from "../schemas/project";

class Project {
  static async create({ newProject }) {
    const createdNewProject = await ProjectModel.create(newProject);
    return createdNewProject;
  }

  static async findAll({ user_id }) {
    const userProjects = await ProjectModel.find({ id: user_id });
    return userProjects;
  }
}

export { Project };
