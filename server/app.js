require('dotenv').config();
require('./configs/db')();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();

const authRoute = require('./routes/auth.route');
const userRoute = require('./routes/user.route');

app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:3000',
  })
);
app.use(cookieParser());

app.use('/auth', authRoute);
app.use('/api/users', userRoute);

const PORT = process.env.PORT || 8400;
const start = (port) => {
  try {
    app.listen(port, () => {
      console.log(`Server running on ${port}`);
    });
  } catch (error) {
    console.error(error);
    process.exit();
  }
};

start(PORT);
