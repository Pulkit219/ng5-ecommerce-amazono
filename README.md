# ng5-ecommerce-amazono
Practice Angular 5 building e-commerce platform



<li>

BASIC APP SET UP WITH DATABASE FOR ###SERVER SIDE

```
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
```

</li>


<li>

Creating client side angular app 
```
ng new appName --routing --style=scss
npm install --save @ng-bootstrap/ng-bootstrap
```
copied bootstrap and font-awesome cdn to src/index.html

</li>