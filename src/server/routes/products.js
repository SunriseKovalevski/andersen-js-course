import { Router } from 'express';
import Product from '../models/product';

const router = Router();

router.get('/', async (req, res) => {
  const products = await Product.find();

  return res.send(products);
});

router.get('/:id', async (req, res) => {
  const product = await Product.find({ link: req.params.id });

  return res.send(product);
});

export default router;
