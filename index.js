const express = require('express');
const app = express();
const router = require('../mongoose/routs/routs'); 

app.use(express.static('public')); 
app.set('view engine', 'ejs'); 
app.use(express.urlencoded({ extended: true }));   

app.use('/', router);

app.get('/', (req, res) => {
  res.render('form'); 
});


app.listen(45000, () => {
  console.log("this port runnig in 45000");
});
