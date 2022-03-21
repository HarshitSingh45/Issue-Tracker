const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/issueTrackerDevelopment');
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error in connecting to the db'));
db.once('open', function(){
    console.log('Connected to the database: Mongodb');
})
module.exports=db;