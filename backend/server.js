const express = require('express');
const cors = require('cors');
const router = require('./routes/index.js');
const app = express();


app.use(cors());
app.use(express.json());

app.use('/api', router);

const PORT = 80;
app.listen(PORT, function(){
    console.log('server is running on http://localhost:80');
});