import { Router } from 'express';
import Tablet from '../models/tablet';

const router = Router();

// Обработку ошибок лучше вынести в отдельный midlleware

router.get('/', async (req, res) => {
  try {
    const tablets = await Tablet.find();
    return res.send(tablets);
  } catch (err) {
    return res.status(500).send('Something broke!');
  }
});

router.post('/', (req, res) => {
  try {
    // Проверить на уникальность поля link если есть создать уникальную
    const tablet = new Tablet({ ...req.body });
    tablet.save();

    return res.status(201).send('Successful saved to database');
  } catch (err) {
    return res.status(400).send('Unable to save to database');
  }
});

router.get('/:id', async (req, res) => {
  try {
    const tablet = await Tablet.findByLink(req.params.id);

    if (!tablet) return res.status(404).send('Page not found');

    return res.send(tablet);
  } catch (err) {
    return res.status(500).send('Something broke!');
  }
});

router.put('/:id', async (req, res) => {
  try {
    const tablet = await Tablet.findOneAndUpdate({ link: req.params.id }, { ...req.body });

    return res.status(201).send(tablet);
  } catch (err) {
    return res.status(400).send(`Unable to update to database`);
  }
});

router.delete('/:id', async (req, res) => {
  const result = await Tablet.deleteOne({ link: req.params.id });

  return res.send(result);
});

export default router;
