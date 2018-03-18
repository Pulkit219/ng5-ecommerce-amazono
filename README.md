# ng5-ecommerce-amazono
Practice Angular 5 building e-commerce platform



<li>
npm init
install depedencies --save 
express morgan body-parse mongoose

basic set up
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(morgan('dev'));
</li>