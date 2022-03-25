import { Award } from "../db"; // from을 폴더(db) 로 설정 시, 디폴트로 index.js 로부터 import함.
import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken";

class AwardService {
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
  static async getAwards({ awards_id }) {
    const awards = await Award.findById({ awards_id })
    console.log(awards);
    return awards
  }
}

export { AwardService };
