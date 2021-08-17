/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import { getData, getCvById, addOrUpdateCv, deleteCv } from './app/dynamo';

const app = express();

app.get('/api', async (req, res) => {
  try {
    const data = await getData()
    res.json(data)
  }catch (err) {
    console.error(err);
    res.status(500).json({ err: 'Something went wrong' });
}
});

app.get('/api/:id', async (req, res) => {
  const id = req.params.id;
  try {
      const cv = await getCvById(id);
      res.json(cv);
  } catch (err) {
      console.error(err);
      res.status(500).json({ err: 'Something went wrong' });
  }
});

app.post('/api', async (req, res) => {
  const cv = req.body;
  console.log("holi", cv)

  try {
      const newCv = await addOrUpdateCv(cv);
      res.json(newCv);
  } catch (err) {
      console.error(err);
      res.status(500).json({ err: 'Something went wrong' });
  }
});

app.put('/api/:id', async (req, res) => {
  const cv = req.body;
  const { id } = req.params;
  cv.id = id;
  try {
      const newCv = await addOrUpdateCv(cv);
      res.json(newCv);
  } catch (err) {
      console.error(err);
      res.status(500).json({ err: 'Something went wrong' });
  }
});

app.delete('/api/:id', async (req, res) => {
  const { id } = req.params;
  try {
      res.json(await deleteCv(id));
  } catch (err) {
      console.error(err);
      res.status(500).json({ err: 'Something went wrong' });
  }
});


const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
