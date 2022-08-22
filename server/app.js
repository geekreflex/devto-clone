require('dotenv').config();
require('./configs/db')();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');

const { notFound, errorHandler } = require('./middlewares/errorMiddleware');

const app = express();

const authRoute = require('./routes/auth.route');
const userRoute = require('./routes/user.route');
const postRoute = require('./routes/post.route');
const tagRoute = require('./routes/tag.route');

app.use(cookieParser());
app.use(express.json());

app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
  })
);

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/posts', postRoute);
app.use('/api/tags', tagRoute);

// client handler
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
} else {
  app.get('/', (req, res) => {
    res.send('API is running...');
  });
}

app.use(notFound);
app.use(errorHandler);

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
