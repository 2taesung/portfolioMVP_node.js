import is from "@sindresorhus/is";
import { Router } from "express";
import { certificateService } from "../services/certificateService";
import { login_required } from "../middlewares/login_required";

// req.body 형식 
// {
//     "user_id":"af4ff0af-2a5f-4eea-99f2-d18b42aba419",
//     "title":"운전면허증",
//     "description":"2종 보통입니다.",
//     "when_date":"2021-03-20"
// }

//test user id :184fb386-57a2-4a8d-bb6e-4241298e9455
// test id: 461189c3-2ee4-4aa7-b7b3-9ec4827931e0

const certificateRouter = Router()

certificateRouter.post('/certificate/create', async function (req, res, next) {
    try{
        if (is.emptyObject(req.body)){
            throw new Error ("headers의 Content-Type을 application/json으로 설정해주세요")
        }

        // req 에서 데이터 가져오기
        const {user_id, title, description, when_date} = req.body

        // 위 데이터를 certificate db에 추가
        const newCerti = await certificateService.addCerti({
            user_id,
            title,
            description,
            when_date
        })

        if (newCerti.errorMessage) {
            throw new Error(newCerti.errorMessage)
        }

        res.status(201).json(newCerti)
    } catch (error) {
        next(error)
    }
})

certificateRouter.get('/certificates/:id', login_required, async function (req, res, next) {
    try{
      // URL 로 부터 id를 추출
        const certi_id = req.params.id
        const certi = await certificateService.getCerti({certi_id})  
        
        if (certi.errorMessage) {
            throw new Error(certi.errorMessage)
        }
        res.status(200).send(certi)
    } catch (error) {
        next(error)
    }
})

certificateRouter.put('/certificates/:id', login_required, async function (req, res, next) {
    try{
        const certi_id = req.params.id

        const {title, description, when_date} = req.body
        const toUpdate = {
            title,
            description,
            when_date
        }
     
        const updatedCerti = await certificateService.setCerti({ certi_id, toUpdate})

        if (updatedCerti.errorMessage){
            throw new Error(updatedCerti.errorMessage)
        }
 
        res.status(200).json(updatedCerti)

     } catch (error) {
        next(error)
    }

})

certificateRouter.get('/certificatelist/:user_id', login_required, async function (req, res, next) {
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