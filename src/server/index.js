import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import Product from './models/product';
import { connectDb } from './models';

import routes from './routes';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use('/products', routes.products);

(async () => {
  try {
    await connectDb();
  } catch (error) {
    console.error(error);
  }

  app.listen(port, () => console.log(`Andersen listening on port ${port}!`));
})();

app.post('/penTablets', (req, res) => {
  const product = new Product({ ...req.body });
  product.save();
  res.send('opa');
});

app.get('/penTablets', async (req, res) => {
  const products = await Product.find();
  return res.send(products);
});

app.delete('/:id', async (req, res) => {
  const result = await Product.deleteOne({ link: req.params.id });
  return res.send(result);
});
