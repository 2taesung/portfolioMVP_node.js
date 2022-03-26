import { Schema, model } from "mongoose"

const CertificateSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    user_id: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'User',
      type: String,
      required: true,
      index: true
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    when_date: {
      type: Date,
      required: false
    },
  },
  {
    timestamps: true,
  }
);

const CertificateModel = model("Certificate", CertificateSchema)

export { CertificateModel }
