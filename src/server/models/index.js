import mongoose from 'mongoose';
import Product from './product';

const db = 'mongodb://<dbuser>:<dbpassword>@ds345937.mlab.com:45937/andersen';

export const connectDb = () => {
  return mongoose.connect(db, { useNewUrlParser: true, ssl: true, dbName: 'andersen' });
};

export default {
  Product,
};
