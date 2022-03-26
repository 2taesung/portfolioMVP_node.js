import { Award } from "../db"; // from을 폴더(db) 로 설정 시, 디폴트로 index.js 로부터 import함.
import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken";

class awardService {
  static async addAward({ user_id, title, description}) {
    const id = uuidv4();
    const newAward = { id, user_id, title, description};
    // db에 저장
    const createdNewAward = await Award.create({ newAward });
    createdNewAward.errorMessage = null; // 문제 없이 db 저장 완료되었으므로 에러가 없음.

    return createdNewAward;
  }

  static async getAwardList({ user_id }) {
    const awardlist = await Award.findAll({ user_id })

    return awardlist
  }


  static async setAward({ award_id, toUpdate }) {
    // 해당 education_id 존재하는지 확인
    let award = await Award.findById({ award_id });

    // db 에서 찾지 못한 경우, 에러 메세지 반환
    if (!award) {
      const errorMessage = "해당 수상내역은 존재하지 않습니다.";
      return { errorMessage };
    }

    // db 에서 업데이트
    // const updatedEducation = await Education.update({education_id, toUpdate})
    // return updatedEducation

    if (toUpdate.title) {
      const fieldToUpdate = "title";
      const newValue = toUpdate.title;
      award = await Award.update({
        award_id,
        fieldToUpdate,
        newValue,
      });
    }

    if (toUpdate.description) {
      const fieldToUpdate = "description";
      const newValue = toUpdate.description;
      award = await Award.update({
        award_id,
        fieldToUpdate,
        newValue,
      });
    }

    
    return award;
  }





  static async getAwards({ awards_id }) {
    const awards = await Award.findById({ awards_id })
    console.log(awards);
    return awards
  }
}

export { awardService };
