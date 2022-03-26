import { AwardModel } from "../schemas/award";

class Award {
  static async create({ newAward }) {
    const createdNewAward = await ProjectAward.create(newAward);
    return createdNewAward;
  }

  static async findAll({ user_id }) {
    const userAwardList = await AwardModel.find({ user_id: user_id });
    return userAwardList;
  }

  static async findById({ awards_id }) {
    const userAwards = await AwardModel.findOne({ id: awards_id });
    console.log(userAwards);
    return userAwards;
  }
}

export { Award };
