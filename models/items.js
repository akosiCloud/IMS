var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemSchema = new Schema ({
    name:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    quantity:{
        type: Number,
        required: true,
        default: 1
    },
    price:{
        type: Number,
        required: true,
        default: 1
    },
    description:{
        type: String       
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Item', itemSchema)