var express = require('express');
var myApp = express();
var bodyparser = require('body-parser');
var quantity = require('./controller/controller');

myApp.use(bodyparser.urlencoded({ extended: true }));
myApp.use(bodyparser.json());
myApp.use(express.static('public'));

myRouter = express.Router();



myRouter.use(function(req, res, next) {

    // log each request to the console
    console.log(req.method, req.url);

    // continue doing what we were doing and go to the route
    next();
});

myRouter.get('/multiple', function (req, res) {
    quantity.find({}, function (err, quantityData) {
        if(!err){
            res.json(quantityData);
            console.log(quantityData)
        }
        else {
            res.send("No Data found")
        }
    })
});

myRouter.post('/save', function (req, res) {
    var newData = new quantity({
        quantity: req.body.quantity,
        quantityCow: req.body.quantityCow,
        date: req.body.date
    });
    newData.save(function (err) {
        if(!err){
            res.contentType('Conent-Type', "application/json");
            res.send(JSON.stringify({
                success: true,
                data:"User saved Successfully"
            }));
            // console.log("Data Saved in DB");
            // res.send("Data Saved")
        }
        else {
            res.contentType('Conent-Type', "application/json");
            res.send(JSON.stringify({
                success: false,
                data: "This date already exist"
            }));

        }
    })
});

var port = 3030;
myApp.listen(port, function () {
    console.log("Server is listing on port: " + port)
});

myApp.use('/', myRouter);
