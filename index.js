var express = require('express');
var methodOverride = require('method-override');
var path = require('path')
var itemRoutes = require('./server/routes/itemRoutes');
var itemIndex = require('./models/items');
var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'/views'));
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

app.use('/', itemRoutes)

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>
    console.log(`Currently listening to ${PORT}`)
)

