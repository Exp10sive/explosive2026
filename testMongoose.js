const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2026');

const Explosive = mongoose.model('Explosive', { name: String });

const item = new Explosive({ name: 'Dynamite' });
item.save().then(() => console.log('Взрыв!'));