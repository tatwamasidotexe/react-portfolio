const express = require('express');
const router = express.Router;
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use('/', router);

app.listen(5000, () => console.log('Express server running.'));
// console.log(process.env.EMAIL_USER  )