import express from "express";
import multer from "multer";
import fs from "fs";
import mongoose from 'mongoose'

import Form from "./models/form.mjs";

mongoose.connect('mongodb+srv://OevADEE:admin@kosztoryscluster.bqj1n.mongodb.net/form?retryWrites=true&w=majority', { 
  useNewUrlParser: true,
  useUnifiedTopology: true 
})

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + file.originalname);
  }
})

const fileFilter = (req, file, cb) => {
  // reject file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(new Error('Error: file type not allowed'), false);
  }
}

const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 },
  fileFilter: fileFilter,
  dest: "uploads/"
});

const app = express();
const port = process.env.PORT || 8000;

//Middlewares
app.use('/uploads', express.static('uploads'));
app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Orifin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  if( req.method === 'OPTIONS'){
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, PATCH, DELETE');
    return res.status(200).json({});
  };
  next();
});

//Data
const galleries = JSON.parse(fs.readFileSync("./data/galleries.json"));

//Routes
app.get("/", (req, res, next) => {
  res.status(200).json({ message: "Hello wrld" });
});

app.post("/sendForm", upload.single("file"), (req, res) => {
  console.log(req.body);
  console.log(req.file);
  const form = new Form({
    _id: new mongoose.Types.ObjectId(),
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    file: req.file.path,
    message: req.body.message,
  });
  form
    .save()
    .then((result) => {
    console.log(result);
    res.status(201).json({
      info: "Formularz został prawidłowo wysłany",
      data: {
        firstName: result.firstName,
        lastName: result.lastName,
        email: result.email,
        message: result.message,
      },
    })
  });
});

app.get("/galleries", (req, res) => {
  res.status(200).json(galleries);
});

app.get("/gallery/:id", (req, res) => {
  const gallery = galleries.reduce((acc, el) => {
    return el.id === parseInt(req.params.id) ? [...acc, el] : acc;
  }, []);
  res.status(200).json(gallery[0].images);
});

app.post("/");

app.listen(port, () => console.log(`slucham ciebie na ${port}`));
