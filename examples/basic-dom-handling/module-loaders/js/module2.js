var _ = require('lodash');


// npm install underscore
// npm install lodash --save

var employers = [

	{
	    "EmployerName":"Matson & Isom Technology Consulting",
	    "Position":"Intern"
	},
	{
	    "EmployerName":"California State University, Chico",
	    "Position":"Teaching Associate"
	},
	{
	    "EmployerName":"California State University,Chico - Research Foundation",
	    "Position":"Graduate Student Research Assistant"
	},
	{
	    "EmployerName":"Accenture",
	    "Position":"Software Engineering Senior Analyst"
	},
	{
	    "EmployerName":"Atos Worldline",
	    "Position":"Application Engineer"
	},
	{
	    "EmployerName":"Godrej Efacec",
	    "Position":"Software Engineer"
	},
	{
	    "EmployerName":"Aurionpro Solutions",
	    "Position":"Software Engineer"
	}

];


var myvar = _.filter(employers,{Position:"Intern"}); // this function returns an array

console.log(myvar[0].EmployerName);

console.log('module2.js');
