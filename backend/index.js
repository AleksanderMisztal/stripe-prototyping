require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use((req, res, next) => {
  if (req.originalUrl === '/payments') {
    next();
  } else {
    express.json()(req, res, next);
  }
});

const usersRouter = require('./Routes/users');
const paymentsRouter = require('./Routes/payments');
app.use('/users', usersRouter);
app.use('/payments', paymentsRouter);

const port = 3000;
app.listen(port, () => console.log(`Listening on port ${port}!`));
