const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
//mongoose.set('strictQuery', false);
//mongoose.set('strictQuery', true);
const app = express();

app.use('/api/auth', require('./routes/auth.routes'));

const PORT = config.get('port') || 5000;

async function start() {
  try {
    await mongoose.createConnection(config.get('mongoUri'), {
      /* useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false, */
    });
    app.listen(PORT, () =>
      console.log(`App has been started on port ${PORT}...`)
    );
  } catch (e) {
    console.log('Server Error', e.message);
    process.exit(1);
  }
}

start();
