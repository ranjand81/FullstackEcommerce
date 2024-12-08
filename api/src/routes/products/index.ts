import { Router } from 'express';

//product endpoints
const router = Router();

router.get('/', (req, res) => {
  res.send('List of products 123!');
});

router.get('/:id', (req, res) => {
  console.log(req.params);
  res.send('A product!');
});

router.post('/', (req, res) => {
  res.send('New product!');
});

export default router;