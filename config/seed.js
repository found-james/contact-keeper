require('dotenv').config();
const connectDB = require('./db');

const User = require('../models/User');
connectDB();

(async function() {

  await User.deleteMany({});
  
  console.log("success")

  process.exit();

})();