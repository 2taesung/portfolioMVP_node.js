import { AwardModel } from "../schemas/Award"

class Award {
  static async create({ newAward }) {
    const createNewAward = await AwardModel.create(newAward)
    return createNewAward
  }

  static async findById({ award_id }) {
    const post = await AwardModel.findOne({ id: award_id })

    return post
  }
  

  static async update({awards_id, toUpdate}) {
    const filter = {id: awards_id}
    const newValue = {
        title: toUpdate.title,
        description: toUpdate.description,     
    }
    return await AwardModel.findOneAndUpdate(filter, newValue, {new: true})
}



  static async findAll({user_id}) {
    const awards = await AwardModel.find({user_id})
    return awards
  }

}

export { Award }
