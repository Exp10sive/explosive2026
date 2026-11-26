const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2026');

var Explosive = require('./models/explosive.js').Explosive;

var item = new Explosive({
  title: "Dynamite",
  nick: "dynamite"
});

item.save().then(() => {
  console.log('Документ сохранён');
}).catch(err => {
  console.log(err.message);
});