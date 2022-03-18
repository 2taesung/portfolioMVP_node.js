import { User, Education} from "../db"; // from을 폴더(db) 로 설정 시, 디폴트로 index.js 로부터 import함.
import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken";

// req.body 형식 
// {
//     "user_id":"af4ff0af-2a5f-4eea-99f2-d18b42aba419",
//     "school":"좋은학교",
//     "major":"좋은전공",
//     "position":"재학중"
// }

class educationService {
    static async addEducation ({user_id, school, major, position}) {
        // 우선 user_id 존재 여부 확인 
        const user = await User.findById({user_id})
        if (!user) {
            const errorMessage = "사용자가 존재하지 않습니다."
            return { errorMessage }
        } 

        // id 는 유니크 값 부여
        const id = uuidv4();
        const newEducation = { id, user_id, school, major, position }
        
        // db 에 저장
        const createdNewEducation = await Education.create({newEducation})
        createdNewEducation.errorMessage = null;
        return createdNewEducation
    }

    static async getEducation ({education_id}) {
        // 해당 education_id 로 db 에서 찾기 
        const education = await Education.findById({education_id})
        console.log(education_id)
        console.log(education)
        // db 에서 찾지 못한 경우, 에러 메세지 반환
        if (!education) {
            const errorMessage = "해당 교육이력은 존재하지 않습니다."
            return {errorMessage}
        }
        return education
    }
    
    static async setEducation({education_id, toUpdate}) {
        // 해당 education_id 존재하는지 확인 
        const education = await Education.findById({education_id})

        // db 에서 찾지 못한 경우, 에러 메세지 반환
        if (!education) {
            const errorMessage = "해당 교육이력은 존재하지 않습니다."
            return {errorMessage}
        }

        // db 에서 업데이트 
        const updatedEducation = await Education.update({education_id, toUpdate})
        return updatedEducation
    }

    static async getEducations ({user_id}) {
       // 우선 user_id 존재 여부 확인 
       const user = await User.findById({user_id})

       // user_id 없는 경우 에러 메세지 반환
       if (!user) {
           const errorMessage = "사용자가 존재하지 않습니다."
           return { errorMessage}
       } 

       // db에서 list 찾아서 반환
       const educations = await Education.findAll({user_id})
       return educations 
    }
}

export {educationService}