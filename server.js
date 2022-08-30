const express = require('express')
const bodyParser = require('body-parser')

const cors = require('cors')

const router = require('./routes/users')

const app = express();

app.use(cors());

app.use(router)
    


app.listen(5000)