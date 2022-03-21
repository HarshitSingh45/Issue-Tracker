const express = require('express');
const port =8000;
const db = require('./config/mongoose');
const app = express();
app.use(express.urlencoded());
app.use(express.static('/assets'));
app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/', require('./routes/index'));
app.listen(port, err => {
    if(err){ console.log('Error in running the server'); return;}
    console.log(`Server is up and running on port: ${port}`);
});