const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config();
const cors = require('cors');
const cookieparse = require('cookie-parser');

const PORT = process.env.PORT || 3000

app.use(express.json());
app.use(express.urlencoded( {extended:true} ));
app.use(cors());
app.use(cookieparse());

require('./DB/conn');

app.use('/api/files', express.static(path.join(__dirname, '/uploads')))
app.use('*',express.static('Files/index.html'));
require('./mainroutes')(app);

app.listen(PORT,() => {
    console.log(`listening at port number ${PORT}`);
})