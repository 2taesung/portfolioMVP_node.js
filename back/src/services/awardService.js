import { Award, User } from "../db"; // from을 폴더(db) 로 설정 시, 디폴트로 index.js 로부터 import함.
import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken";

class awardService {
  static async addAward({ user_id, title, description}) {
    const user = await User.findById({user_id})
    if(!user) {
      const errorMessage = "사용자가 존재하지 않습니다"
      return { errorMessage }
    }

    const id = uuidv4();
    const newAward = { id, user_id, title, description}
    // db에 저장
    const createdNewAward = await Award.create({ newAward })
    createdNewAward.errorMessage = null  // 문제 없이 db 저장 완료되었으므로 에러가 없음.
    return createdNewAward
  }

  static async getAward({award_id}){
    const award = await Award.findById({award_id})

    if(!award) {
      const errorMessage = "해당 교육이력은 존재하지 않습니다"
      return { errorMessage }
    }
    return award
  } 

  static async setAward({ award_id, toUpdate }) {
    // 해당 education_id 존재하는지 확인
      const award = await Award.findById({ award_id })

    // db 에서 찾지 못한 경우, 에러 메세지 반환
      if (!award) {
        const errorMessage = "해당 수상내역은 존재하지 않습니다."
        return { errorMessage }
      }
      
      const updatedAward = await Award.update({award_id, toUpdate})
      return updatedAward
  }

    // db 에서 업데이트
    // const updatedEducation = await Education.update({education_id, toUpdate})
    // return updatedEducation

  static async getAwards({ user_id }) {
    const user = await User.findById({user_id})

    if(!user) {
      const errorMessage = "사용자가 존재하지 않습니다."
      return { errorMessage }
    }
    const awards = await Award.findAll({ user_id })
    return awards
    }
  }

export { awardService }
