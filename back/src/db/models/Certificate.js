import { CertificateModel } from "../schemas/certificate";

// 해당 schema 로 할 수 있는 작업을 정의
class Certificate {
  static async create({ newCerti }) {
    const createNewCerti = await CertificateModel.create(newCerti);
    console.log(createNewCerti);
    return createNewCerti;
  }

  static async findById({ certi_id }) {
    const post = await CertificateModel.findOne({ id: certi_id });
    return post;
  }

  static async update({ certi_id, fieldToUpdate, newValue }) {
    const filter = { id: certi_id };
    const update = { [fieldToUpdate]: newValue };
    return await CertificateModel.findOneAndUpdate(filter, update, {
      new: true,
    });
  }

  static async findAll({ user_id }) {
    const certis = await CertificateModel.find({ user_id });
    console.log(certis);
    return certis;
  }
}

export { Certificate };
