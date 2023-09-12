"use strict";

const express = require('express');
const bodyParser= require('body-parser');
const firstRoute= require('./routes/')
const app = express();
const port= process.env.PORT;
app.use(bodyParser.json())
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/',firstRoute)


app.listen(port,()=>{
    console.log(`listening to port ${port}`);
})
