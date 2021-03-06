import { User, Certificate} from "../db"; // from을 폴더(db) 로 설정 시, 디폴트로 index.js 로부터 import함.
import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken";

class certificateService {
    static async addCerti({ user_id, title, description, when_date }){
        // 우선 user_id 존재 여부 확인 
        const user = await User.findById({user_id})
        if (!user) {
            const errorMessage = "사용자가 존재하지 않습니다."
            return { errorMessage }
        } 

        // id 는 유니크 값 부여
        const id = uuidv4();
        const newCerti = { id, user_id, title, description, when_date }
        
        // db 에 저장
        const createdNewCerti = await Certificate.create({newCerti})
        createdNewCerti.errorMessage = null;
        return createdNewCerti

    }

    static async getCerti({certi_id}){
        // 해당 certi_id 로 db에서 찾기 
        const certi = await Certificate.findById({certi_id})
        console.log(certi_id)
        console.log(certi)
        // db 에서 찾지 못한 경우, 에러 메세지 반환
        if (!certi) {
            const errorMessage = "해당 교육이력은 존재하지 않습니다."
            return {errorMessage}
        }
        return certi
    }

    static async setCerti({certi_id, toUpdate}){
        // 해당 certi_id 존재하는지 확인 
        const certi = await Certificate.findById({certi_id})
       
        // db 에서 찾지 못한 경우, 에러 메세지 반환
        if (!certi) {
            const errorMessage = "해당 교육이력은 존재하지 않습니다."
            return {errorMessage}
      }

        // db 에서 업데이트 
        const updatedCerti = await Certificate.update({certi_id, toUpdate})
        return updatedCerti

    }

    static async getCertis({user_id}){
        // 우선 user_id 존재 여부 확인 
        console.log(3)
        const user = await User.findById({user_id})
        console.log(4, user)
       // user_id 없는 경우 에러 메세지 반환
       if (!user) {
           const errorMessage = "사용자가 존재하지 않습니다."
           return { errorMessage}
       } 
  
       // db에서 list 찾아서 반환
       const certis = await Certificate.findAll({user_id})
       return certis 
    }
}

export {certificateService}