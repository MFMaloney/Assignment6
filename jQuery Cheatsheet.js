// jQuery Cheatsheet

/*Allows developers to "write Less and do more"
Its essentially a library of prewritten code developerscan reference to save
time.*/

// To do this reference it as follows:
<script src="jquery-2.2.3.js"></script>

// with jQuery you use $ to stand in for getElementById

//to select an element you would do the following
$("body") //be sure to include the ""'s in the parenthesis

//  to ensure the script doesnt fire until the page is loaded use:
$(document).ready()

// Anonymous functions play an important role in jQuery
// -can be given as an argument in a functions
// -can be returned by a function or block of code
// -can be assigned to a variable (var)

//they are written as follows
function() {
	alert("I am anonymous");
}

//anonymous funtion stored as a variable:
var anon_function = funtion(){alert("Hello World");}

// anon. functions are an essential part of callback
// a callback is an anon. function supplied to another function set to run
// when that function finishes running

var someOtherFunction = function(){ alert('hello world'); }
function someRunner(anyFunction){ console.log(2+2); anyFunction(); }
someRunner(someOtherFunction)

// you can show or hide elements using .hide and .show

$("body").hide();
$("body").show();

// similarly you can fade elements in and out

$("body").fadeOut(); //its important to use camelCasing
$("body").fadeIn();

// you can set a time for actions to take to play out. written in milliseconds

$("body").fadeOut(2000) //will fade out over 2 seconds

// you're also able to hide items by sliding them off the page

$("div").slideUp()
$("div").slideDown(1000)

// jQuery can be used to animate css as long as it has a numeric value

$(".my-element").animate( {   
	opacity: 0.25,   
	width: "70%" 
} , 2000 );

// code can also be set to run when clicked using .click
$("ul li a").click(   
	function(){    
		alert('imclicked!');   
	} 
);