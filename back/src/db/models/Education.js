import { EducationModel } from "../schemas/education";

class Education {
  static async create({ newEducation }) {
    const createdNewEducation = await EducationModel.create(newEducation);
    return createdNewEducation;
  }

  static async findById({ education_id }) {
    const post = await EducationModel.findOne({ id: education_id });
    return post;
  }

  // static async update({education_id, toUpdate}){

  //     console.log(toUpdate)
  //     const filter = {id: education_id}
  //     const newValue = {
  //         school: toUpdate.school,
  //         major: toUpdate.major,
  //         position: toUpdate.position
  //         }

  //     return await EducationModel.findOneAndUpdate(filter, newValue, {new: true})
  // }

  static async update({ education_id, fieldToUpdate, newValue }) {
    const filter = { id: education_id };
    const update = { [fieldToUpdate]: newValue };
    const option = { returnOriginal: false };

    const updatedEducation = await EducationModel.findOneAndUpdate(
      filter,
      update,
      option
    );
    return updatedEducation;
  }

  static async findAll({ user_id }) {
    const educations = await EducationModel.find({ user_id });
    return educations;
  }
}

export { Education };
