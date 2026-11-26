const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2026');

var schema = mongoose.Schema({ name: String });

// Добавляем метод
schema.methods.explode = function() {
  console.log(this.name + " взорвался!");
}

const Explosive = mongoose.model('Explosive', schema);

const item = new Explosive({ name: 'Dynamite' });
item.save().then(() => item.explode());