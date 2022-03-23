import is from "@sindresorhus/is";
import { Router } from "express";
import { login_required } from "../middlewares/login_required";
import { ProjectService } from "../services/projectService";

const projectRouter = Router();

projectRouter.post("/project/create", async function (req, res, next) {
  try {
    if (is.emptyObject(req.body)) {
      throw new Error(
        "headers의 Content-Type을 application/json으로 설정해주세요"
      );
    }

    // req (request) 에서 데이터 가져오기
    // console.log(req.body);
    const user_id = req.body.user_id;
    const title = req.body.title;
    const description = req.body.description;
    const from_date = req.body.from_date;
    const to_date = req.body.to_date;

    // 위 데이터를 유저 db에 추가하기
    //Cannot read properties of undefined (reading 'addProject') 에러발생
    const newProject = await ProjectService.addProject({
      user_id,
      title,
      description,
      from_date,
      to_date,
    });
    if (newProject.errorMessage) {
      throw new Error(newProject.errorMessage);
    }

    res.status(201).json(newProject);
  } catch (error) {
    next(error);
  }
});

projectRouter.get(
  "/projectlist/:id",
  login_required,
  async function (req, res, next) {
    try {
      // URI로부터 사용자 id를 추출함.
      console.log(req.params);
      const user_id = req.params.id;
      console.log(user_id);

      const project_list = await ProjectService.getProjectList({ user_id });
      res.status(200).send(project_list);
    } catch (error) {
      next(error);
    }
  }
);

projectRouter.get(
  "/projects/:id",
  login_required,
  async function (req, res, next) {
    try {
      const projects_id = req.params.id;
      // console.log(projects_id);

      const projects = await ProjectService.getProjects({ projects_id });
      res.status(200).send(projects);
    } catch (error) {
      next(error);
    }
  }
);


export { projectRouter };
