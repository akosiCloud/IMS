var mongoose = require('mongoose');
var Item = require('../models/items');

mongoose.connect('mongodb://127.0.0.1:27017/ims-db')
	.then(()=>{
		console.log('Connection Open')
	})
	.catch(err =>{
		console.log("Error");
		console.log(err);
	})

var seedDB = async() => {
	//await Item.deleteMany({});
	var items = new Item({
		name: 'ming5',
		category: 'sphynx',
        quantity: '2',
        price: '150',
        description: 'Si ming ming #6'
	})
	await items.save();
}
seedDB().then(()=>{
	mongoose.connection.close();
})