/* eslint-disable func-names */
import mongoose from 'mongoose';

// Заполнить базу, добавить норм полей
const tabletSchema = new mongoose.Schema(
  {
    modele: { type: String },
    link: { type: String },
    height: { type: Number },
    weight: { type: Number },
  },
  { collection: 'penTablets' }
);

tabletSchema.statics.findByLink = async function(link) {
  const tablet = await this.findOne({
    link,
  });

  return tablet;
};

const Tablet = mongoose.model('Tablet', tabletSchema);

export default Tablet;
