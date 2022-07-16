import 'dotenv/config';
import express from 'express';

const app = express();

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
