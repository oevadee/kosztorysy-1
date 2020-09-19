import express from 'express';
import fs from 'fs';

const app = express();
const port = process.env.PORT || 8000

//Middlewares
app.use(express.json());


//Data
const galleries = JSON.parse(fs.readFileSync('./data/galleries.json'))


//Routes
app.get('/', (req, res, next) => {
  res.status(200).json({ message: "Hello wrld" })
});

app.post('/sendForm', (req, res) => {
  console.log(req.body);
  res.send("zajebiscie");
});

app.get('/galleries', (req, res) => {
  res.status(200).json(galleries);
});

app.get('/gallery/:id', (req, res) => {
  const gallery = galleries.reduce((acc, el) => {
    return (el.id === parseInt(req.params.id)) ? [...acc, el] : acc;
  }, []);
  res.status(200).json(gallery[0].images);
});

app.listen(port, () => console.log(`slucham ciebie na ${port}`));
