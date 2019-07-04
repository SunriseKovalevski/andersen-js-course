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

const Product = mongoose.model('Product', productSchema);

export default Product;
