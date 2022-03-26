import { AwardModel } from "../schemas/Award";

class Award {
  static async create({ newAward }) {
    const createdNewAward = await AwardModel.create(newAward);
    return createdNewAward;
  }

  static async findAll({ user_id }) {
    const userAwardList = await AwardModel.find({ user_id });
    return userAwardList;
  }
  

  static async update({awards_id, toUpdate}) {
    const filter = {id: awards_id}
    const newValue = {
        title: toUpdate.title,
        description: toUpdate.description,     
    }
    return await AwardModel.findOneAndUpdate(filter, newValue, {new: true})
}

  static async findById({ awards_id }) {
    const userAwards = await AwardModel.findOne({ id: awards_id });
    return userAwards;
  }
}

export { Award };
