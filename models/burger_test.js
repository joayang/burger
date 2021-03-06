// Import the burger model to gain access to the database functions
var burger = require('./burger.js');

// Import the connection file directly, in order to terminate the connection at the end of the test run
var connection = require('../config/connection.js');

// Select all entries from the database
burger.all(function (data) {
	console.log('burger.all test...\n\n');

	console.log('----------Burger Menu-----------\n');

	for (var i = 0; i < data.length; i++) {
		console.log('Burger ID = ' + data[i].id);
		console.log('Burger Name = ' + data[i].burger_name);
		console.log('Available = ' + data[i].devoured);

		console.log('*************************************');
	}
});

// Insert a single entry into the database
burger.create(['burger_name', 'devoured'], 
	         	 ['Late Night Juicy Burger', false], 
	    		 function (data) {
					console.log('\n\nburger.insertOne test...\n\n');

					console.log('Inserted new row with ID = ' + data.insertId + '\n\n');
				 }
);

// Update a single entry in the database
burger.update({devoured: true}, 'id = 10', function (data) {
	console.log('\n\nburger.update test...\n\n');

	console.log('Result: ' + data.message);
});

connection.end();
