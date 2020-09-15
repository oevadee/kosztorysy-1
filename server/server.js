const express = require("express");

const app = express();
const port = process.env.PORT || 8000

//Middlewares
app.use(express.json());

app.get('/', (req, res, next) => {
  res.status(200).json({ message: "Hello wrld" })
});

app.post('/sendForm', (req, res) => {
  console.log(req.body);
  res.send("zajebiscie")
});

app.listen(port, () => console.log(`slucham ciebie na ${port}`));
