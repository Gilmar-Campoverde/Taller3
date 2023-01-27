const express=require('express');
const app=express();
const morgan= require('morgan');
const cors=require('cors');
const {mongoose} = require('./database');

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api-user', require('./routes/server.routes'));

app.listen('3000');
