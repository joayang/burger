
# Eat Da Burger!
Eat-Da-Burger Application With Node.js/Express/MySQL/Handlebars

## Description

This application demonstrates a simple full stack application with a front end implemented with HTML/CSS and elements from the framework and the backend implemented with Node.js and Express. HTML templating is done with the Handlebars.

The user may enter any burger name to add it to the menu. This adds the user burger entry into the MySQL database. The initial burger entry is added as *available* on the menu and placed on the left side of the screen. The user may then eat any burger by clicking on it, which moves it into the right column and updates its status in the database.

## Demo

The demo of the burger eating application can be found [here](https://burger.herokuapp.com/).

## Installation

To run the application locally, first clone this repository with the following command.

	git clone git@github.com:joayang/burger.git
	
Next, install the application dependencies.

	cd burger
	npm install
	
Then, run the node server locally.

	node server
	
Now, open the local application on port 3000 at the URL: `http://localhost:7000/`.

How The App Should Work Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat. There is Add A Burger button. When user clicks it, the burger name will display on the left side of the page waiting to be devoured. When the user clicks on the burger name, it will move it to the right side of the page. The app will store every burger in a database.
Have fun, enjoy and have a delious burger!







