const mongoose = require('mongoose');
const app = require('./app');
const env = require('dotenv');
env.config({ path: './config.env' });



/* DB connection is taken form the config.env file. Here the DB connection string is the Mongo Atlas connction */
//const DB = process.env.DATABASE.replace('<PASSWORD>',process.env.DATABASE_PASSWORD);
const DB = process.env.DATABASE_LOCAL;
mongoose.connect(DB, {
  useNewUrlParser:true,
  useCreateIndex: true,
  useFindAndModify: true
}).then(_con => {
  console.log(_con.connections);
  console.log('Mongo connection established!');
});


app.listen(process.env.PORT, () => {
    console.log(`Covid data service running on port ${process.env.PORT}`);
});