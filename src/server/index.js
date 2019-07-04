import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { connectDb } from './models';
import routes from './routes';

const app = express();
const PORT = 3000;

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

  app.listen(3000, () => console.log(`Example app listening on port ${PORT}!`));
})();
