/* eslint-disable func-names */
import mongoose from 'mongoose';

// Заполнить базу, добавить норм полей
const tabletSchema = new mongoose.Schema(
  {
    title: { type: String },
    link: { type: String },
    color: { type: String },
    sensitivityLvls: { type: Number },
    resolution: { type: Number },
    cost: { type: Number },
    image: { type: String },
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
