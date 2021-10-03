
const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');




app.use(express.static(__dirname + '/Public'))


app.use('/views', require('./routes/views'));





app.listen(port,(err)=>{

  if (err) console.log(err);
  else
  console.log(`The server is running, please open your browser at http://localhost:${port}/views`);
});
