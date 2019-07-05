/* eslint-disable func-names */
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    modele: { type: String },
    link: { type: String },
    height: { type: Number },
    weight: { type: Number },
  },
  { collection: 'penTablets' }
);

productSchema.statics.findByModele = async function(modele) {
  const product = await this.findOne({
    modele,
  });

  return product;
};

const Product = mongoose.model('Product', productSchema);

export default Product;
