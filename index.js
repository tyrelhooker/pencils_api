const express = require('express');
const db = require('./db.json');
const app = express();

app.use(express.json());

const pencils = db;

app.get('/api/pencils', (req, res) => {
  res.json(pencils);
});

app.get('/api/pencils/:company', (req, res) => {
  console.log(req.params.company);
  const company = req.params.company;
  console.log(company);
  const companyName = pencils.find(companyName => companyName.company === company);
  console.log(companyName);
  res.json(companyName);
})

const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))