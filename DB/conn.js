const mongoose = require('mongoose');

    mongoose.connect(process.env.mongourl, {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }).then(() => {
        console.log('DataBase Connect SuccessFull');
    }).catch((e) => {
        console.log(e);
    });