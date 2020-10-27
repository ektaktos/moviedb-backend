const express = require('express');
const app = express();
const cors = require('cors');
const config = require('./config');
const routes = require('./routes/index');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());
app.use('/api/',routes);

app.use(function(req,res){
  res.status(404).send({message: 'Path not found'});
});

app.listen(config.port, () =>{
  console.log(`Server running at ${config.port}`);
})

