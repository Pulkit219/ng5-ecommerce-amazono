const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const config =require('./config');
const app = express();

mongoose.connect(config.database,err=>{
    if(err)
    {
        console.log("error connecting to database");
    }
    else{
        console.log("connected to teh database");
    }
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(morgan('dev'));
app.use(cors());

app.get('/',(req,res,next)=>{
    console.log("dafault");
})


app.listen(config.port,err=>{
    console.log(`running on port ${config.port}`);
})