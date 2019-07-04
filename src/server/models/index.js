import mongoose from 'mongoose';
import Product from './product';

const db = 'mongodb://Sunrise11:Sunrise11@ds345937.mlab.com:45937/andersen';

export const connectDb = () => {
  return mongoose.connect(db);
};

export default {
  Product,
};
