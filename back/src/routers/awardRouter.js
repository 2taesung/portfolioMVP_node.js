import is from "@sindresorhus/is";
import { Router } from "express";
import { login_required } from "../middlewares/login_required";
import { awardService } from "../services/awardService";

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
    

    
    const newAward = await awardService.addAward({
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
  "/awards/:id",
  login_required,
  async function (req, res, next) {
    try {
      const awards_id = req.params.id;
      // console.log(projects_id);
      const awards = await awardService.getAwards({ awards_id });
      
      res.status(200).send(awards);
    } catch (error) {
      next(error);
    }
  }
);


awardRouter.put(
  "/awards/:id",
  login_required,
  async function (req, res, next) {
    try {
      // URL 로 부터 id를 추출
      const award_id = req.params.id;
      const { title, description } = req.body; // 일단 null 은 고려 안함
      const toUpdate = { title, description };
      console.log(toUpdate);

      // 해당 eudcation_id 로 db에서 정보 찾아 업데이트
      const updatedAward = await awardService.setAward({
        award_id,
        toUpdate,
      });

      if (updatedAward.errorMessage) {
        throw new Error(updatedAward.errorMessage);
      }

      res.status(200).json(updatedAward);
    } catch (error) {
      next(error);
    }
  }
);


awardRouter.get(
  "/awardlist/:user_id",
  login_required,
  async function (req, res, next) {
    try {
      // URI로부터 사용자 id를 추출함.
      
      const user_id = req.params.user_id;
      const award_list = await awardService.getAwardList({ user_id });

      res.status(200).send(award_list);
    } catch (error) {
      next(error);
    }
  }
);

export { awardRouter };
