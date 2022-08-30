const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

router.get('/', (req,res,next) => {
    console.log("get request")
    res.send({message:"Logged in successfully"});
})

module.exports= router;