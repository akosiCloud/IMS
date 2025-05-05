var mongoose = require('mongoose');
var Item = require('../models/users');

mongoose.connect('mongodb://127.0.0.1:27017/user')
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
		name: 'ming3',
		adminRole: '2',
        userName: 'meow24',
        password: 'akosiMing23'
	})
	await items.save();
}
seedDB().then(()=>{
	mongoose.connection.close();
})

