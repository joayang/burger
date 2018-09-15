// Pull in required dependencies
var express = require('express');
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require('../models/burger.js');

// Create the routes and associated logic, select all
router.get('/', function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    // console.log(hbsObject);
    res.render('index', hbsObject);
  });
});
// create burger
router.post('/burgers', function(req, res) {
  burger.create([
    'burger_name'
  ], [
    req.body.burger_name
  ], function(data) {
    res.redirect('/');
  });
});
// update burger
router.put('/burgers/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;

  burger.update({
    devoured: true
  }, condition, function(data) {
    res.redirect('/');
  });
});

// Export routes for server.js to use.
module.exports = router;
