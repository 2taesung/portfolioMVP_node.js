import is from "@sindresorhus/is";
import { Router } from "express";
import { educationService } from "../services/educationService";
// import {login_required} from "../middlewares/login_required";

 
const educationRouter = Router()

// 토큰 발급용? 
//educationRouter.post('/user/login')

educationRouter.post('/education/create', async function (req, res, next) {
    try {
        if (is.emptyObject(req.body)) {
            throw new Error( "headers의 Content-Type을 application/json으로 설정해주세요")
        }

        // req 에서 데이터 가져오기 
        const {user_id, school, major, position} = req.body
        console.log(req.body)

        // 위 데이터를 education db에 추가하기
        const newEducation = await educationService.addEducation({
            user_id,
            school,
            major,
            position
        })
        
        if (newEducation.errorMessage) {
            throw new Error(newEducation.errorMessage)
        }

        res.status(201).json(newEducation)
    } catch (error) {
      next(error);
    }
})

educationRouter.get('/educations/:id', async function (req, res, next) {
    try {
        // URL 로 부터 id를 추출
        const education_id = req.params.id
        const educationInfo = await educationService.getEducation({education_id})

        if (educationInfo.errorMessage){
            throw new Error(educationInfo.errorMessage)
        }
        res.status(200).send(educationInfo)
    } catch (error) {
        next(error)
    } 
 })

educationRouter.put('/educations/:id', async function (req, res, next) {
    try {
        // URL 로 부터 id를 추출
        const education_id = req.params.id

        // body data 로부터 업데이트할 education 정보를 추출 
        // {
        //     "school": "나쁜학교",
        //     "major":"나쁜전공",
        //     "position":"박사졸업"
        // }
       const {school, major, position} = req.body // 일단 null 은 고려 안함 
       const toUpdate = {school, major, position}
       console.log(toUpdate)

       // 해당 eudcation_id 로 db에서 정보 찾아 업데이트 
       const updatedEducation = await educationService.setEducation({education_id, toUpdate})

       if (updatedEducation.errorMessage){
           throw new Error(updatedEducation.errorMessage)
       }

       res.status(200).json(updatedEducation)
    
    } catch (error) {
        next(error)
    }
})


educationRouter.get('/educationlist/:user_id', async function (req, res, next) {
    try {
        // URL 로 부터 user_id를 추출
        const user_id = req.params.user_id
        const educations = await educationService.getEducations({user_id})

        if (educations.errorMessage){
            throw new Error(educations.errorMessage)
        }

        res.status(200).send(educations)
    
    } catch (error) {
        next(error)
    }
})

export { educationRouter }