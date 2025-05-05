var mongoose = require('mongoose');
var Item = require('../../models/items');

mongoose.connect('mongodb://127.0.0.1:27017/ims-db')
	.then(()=>{
		console.log('Connection Open')
	})
	.catch(err =>{
		console.log("Error");
		console.log(err);
	})

// List of all Items
exports.items = async(req, res) =>{
	var items = await Item.find({});
	res.render ('index', {items})
}

//Create Item
exports.addItem = async(req,res)=>{
	const item = new Item(req.body);
	await item.save();	
	console.log("Item Successfully added");
	res.redirect('/items');
}

//view Item
exports.viewItem = async(req,res)=>{
	const item = await Item.findById(req.params.id);
	res.render('item-show',{item});	
}
//update Item
exports.updateItem = async(req,res)=>{
	const {id} = req.params;
	const item = await Item.findByIdAndUpdate(id,{...req.body});
	res.redirect(`/items/${id}`);
	console.log('Item Updated Successfully')
}
//Delete
exports.deleteItem = async(req,res)=>{
	const {id} = req.params;
	console.log(`Item Deleted - ${id}`)
	await Item.findByIdAndDelete(id);
	res.redirect('/items');
}