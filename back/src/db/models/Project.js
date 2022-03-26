import { ProjectModel } from "../schemas/project";

class Project {
  static async create({ newProject }) {
    const createdNewProject = await ProjectModel.create(newProject);
    return createdNewProject;
  }

  static async findAll({ user_id }) {
    const userProjectList = await ProjectModel.find({ user_id: user_id });
    return userProjectList;
  }

  static async findById({ projects_id }) {
    const userProjects = await ProjectModel.findOne({ id: projects_id });
    console.log(userProjects);
    return userProjects;
  }

  static async update({ projects_id, toUpdate }) {
    const filter = { id: projects_id }
    const newValue = {
      title: toUpdate.title,
      description: toUpdate.description,
      from_date: toUpdate.from_date,
      to_date: toUpdate.to_date,
    }
    return await ProjectModel.findOneAndUpdate(filter, newValue, { new: true })
  }
}

export { Project };
