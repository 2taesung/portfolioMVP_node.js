import is from "@sindresorhus/is";
import { Router } from "express";
import { login_required } from "../middlewares/login_required";
import { AwardService } from "../services/awardService";

const awardRouter = Router();

awardRouter.post("/award/create", async function (req, res, next) {
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
    

    // 위 데이터를 유저 db에 추가하기
    //Cannot read properties of undefined (reading 'addProject') 에러발생
    const newAward = await AwardService.addAward({
      user_id,
      title,
      description,
      
    });
    if (newAward.errorMessage) {
      throw new Error(newAward.errorMessage);
    }

    res.status(201).json(newAward);
  } catch (error) {
    next(error);
  }
});

awardRouter.get(
  "/awardlist/:id",
  login_required,
  async function (req, res, next) {
    try {
      // URI로부터 사용자 id를 추출함.
      console.log(req.params);
      const user_id = req.params.id;
      console.log(user_id);

      const award_list = await AwardService.getAwardList({ user_id });
      res.status(200).send(award_list);
    } catch (error) {
      next(error);
    }
  }
);

awardRouter.get(
  "/awards/:id",
  login_required,
  async function (req, res, next) {
    try {
      const awards_id = req.params.id;
      // console.log(projects_id);

      const awards = await AwardService.getAwards({ awards_id });
      res.status(200).send(awards);
    } catch (error) {
      next(error);
    }
  }
);


export { awardRouter };
