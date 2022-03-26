import is from "@sindresorhus/is"
import { Router } from "express"
import { awardService } from "../services/awardService"
import { login_required } from "../middlewares/login_required"


const awardRouter = Router();

awardRouter.post("/award/create", async function (req, res, next) {
  try {
    if (is.emptyObject(req.body)) {
      throw new Error("headers의 Content-Type을 application/json으로 설정해주세요")
    }

    const {user_id, title, description} = req.body
    
    const newAward = await awardService.addAward({
      user_id,
      title,
      description,      
    })

    if (newAward.errorMessage) {
      throw new Error(newAward.errorMessage)
    }
    res.status(201).json(newAward)
  } catch (error) {
    next(error)
  }
})


awardRouter.get("/awards/:id", login_required, async function (req, res, next) {
    try {
      const award_id = req.params.id
      const award = await awardService.getAward({ award_id })

      if(award.errorMessage) {
        throw new Error(award.errorMessage)
      }      
      res.status(200).send(award)
    } catch (error) {
      next(error)
    }
  }
)

awardRouter.put("/awards/:id", login_required, async function (req, res, next) {
    try {
      const award_id = req.params.id
      const { title, description } = req.body
      const toUpdate = { title, description }

      // 해당 eudcation_id 로 db에서 정보 찾아 업데이트
      const updatedAward = await awardService.setAward({
        award_id,
        toUpdate,
      })

      if (updatedAward.errorMessage) {
        throw new Error(updatedAward.errorMessage)
      }
      res.status(200).json(updatedAward)
    } catch (error) {
      next(error)
    }
  }
)

awardRouter.get("/awardlist/:user_id", login_required, async function (req, res, next) {
    try {
      // URI로부터 사용자 id를 추출함.
      
      const user_id = req.params.user_id
      const awardlist = await awardService.getAwardList({ user_id })

      if(awardlist.errorMessage) {
        throw new Error(awardlist.errorMessage)
      }
      res.status(200).send(awardlist)
    } catch (error) {
      next(error)
    }
  }
)

export { awardRouter }
