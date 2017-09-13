var http = require('http');
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var Sequelize = require('sequelize');
var sequelize = new Sequelize('toc', 'root', 'sameer',{ host: 'localhost', dialect: 'mysql',pool: {max: 5,min: 0,idle: 10000}});

const cluster = require('cluster');

var Product = sequelize.define('product', {
  id: {type: Sequelize.INTEGER,field: 'product_id'},
  sku: {type: Sequelize.STRING,field: 'product_sku',primaryKey:true},
	name: {type: Sequelize.STRING,field: 'product_name'},
	cost: {type: Sequelize.FLOAT,field: 'product_cost'},
	freight: {type: Sequelize.FLOAT,field: 'product_freight'},
}, {
  freezeTableName: false
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "http://localhost:3000");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Methods", "GET,PUT,POST,OPTION,DELETE");
	next();
});




app.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

app.get('/api/product', function(req, res) {
    Product.count().then((count)=>{
			Product.findAll({attributes: ['id','sku', 'name','cost','freight'],limit: 10 }).then( (products)=>res.json({ 
				status:200, 
				data: products,
				cols:['sku', 'name','cost','freight'],
				total:count
			}));
		});
});

app.get('/api/product/:id', function(req, res) {
    Product.findOne({ attributes: ['id','sku', 'name','cost','freight'],where: {id:req.params.id} }).then( (products)=>res.json({ status:200, data: products }))
});

app.post('/api/product', function(req, res) {
	console.log(req.body)
    Product.create({ sku: req.body.sku, 
										name: req.body.name, 
										cost: req.body.cost,
										freight: req.body.freight})
			.then( ( result )=>res.json({ status:200, data: result }))
});

app.put('/api/product/:id', function(req, res) {
    Product.update({ sku: req.body.sku, 
										name: req.body.name, 
										cost: req.body.cost, 
										freight: req.body.freight}
									 ,{ where: {id:req.body.id} }
									)
			.then( ( result )=>res.json({ status:200, data: result }))
});
app.delete('/api/product/:id', function(req, res) {
    Product.destroy({ where: {id:req.params.id} }).then( ( result )=>res.json({ status:200, data: result }))
});

var port = process.env.PORT || 3001; 
http.createServer(app).listen(port,function(){console.log("Express server listening on port " + port);});