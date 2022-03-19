import is from "@sindresorhus/is";
import { Router } from "express";
import { awardService } from "../services/awardService";
import { login_required } from "../middlewares/login_required";
ㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹ
// req.body 형식 
// {
//     "user_id":"af4ff0af-2a5f-4eea-99f2-d18b42aba419",
//     "title":"운전면허증",
//     "description":"2종 보통입니다.",
//     "when_date":"2021-03-20"
// }

//test user id :184fb386-57a2-4a8d-bb6e-4241298e9455
// test id: 461189c3-2ee4-4aa7-b7b3-9ec4827931e0

const awardRouter = Router()

awardRouter.post('/award/create', async function (req, res, next) {
    try{
        if (is.emptyObject(req.body)){
            throw new Error ("headers의 Content-Type을 application/json으로 설정해주세요")
        }

        // req 에서 데이터 가져오기
        const {user_id, title, description} = req.body

        // 위 데이터를 certificate db에 추가
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

awardRouter.get('/awards/:id', login_required, async function (req, res, next) {
    try{
      // URL 로 부터 id를 추출
        const award_id = req.params.id
        const award = await awardService.getAward({award_id})  
        
        if (award.errorMessage) {
            throw new Error(award.errorMessage)
        }
        res.status(200).send(award)
    } catch (error) {
        next(error)
    }
})

awardRouter.put('/awards/:id', login_required, async function (req, res, next) {
    try{
        const award_id = req.params.id

        const {title, description} = req.body
        const toUpdate = {
            title,
            description,
        
        }
     
        const updatedAward = await awardService.setAward({ award_id, toUpdate})

        if (updatedAward.errorMessage){
            throw new Error(updatedAward.errorMessage)
        }
 
        res.status(200).json(updatedAward)

     } catch (error) {
        next(error)
    }

})

awardRouter.get('/awardlist/:user_id', login_required, async function (req, res, next) {
    try{
        // URL 로부터 user_id 추출 
        const user_id = req.params.user_id
        const certis = await certificateService.getCertis({user_id})

        if (certis.errorMessage){
            throw new Error(certis.errorMessage)
        }

        res.status(200).send(certis)
    } catch (error) {
        next(error)
    }
})

export { certificateRouter }
