
window.addEventListener("DOMContentLoaded", function() {



}, false); // Can Also Be Used To Trigger AJAX.


// Global Variables.
var baseCurrency         = ""
var Input_Currency_Value = ""   , Output_Currency_Value  = "" ;
var Input_Value          = null , Output_Value           = null;
var Input_Select         = null , Output_Select          = null;

var json_data = null;

loadScript("https://unpkg.com/axios/dist/axios.min.js", function(){

  // axios.get('http://data.fixer.io/api/latest?access_key=1a648cc69ff1561e5d6407585b107ea9')
  
 function call_fixer(){
	  axios.get('https://jsonplaceholder.typicode.com/todos/1')
	  .then(function (response) {
	    
	    json_data = response;
	    switch_interface_on();
	  })
	  .catch(function (error) {
	      console.log(err);
	      switch_interface_on();
	  });
 }

 Initialize_Project(call_fixer);





});


function Initialize_Project(callback) {

	Input_Value = document.getElementById("Input_Value");
	Output_Value = document.getElementById("Output_Value");
	
	Input_Select = document.getElementById("Input_Currency");
	Output_Select = document.getElementById("Output_Currency");
	
	Input_Currency_Value = Input_Select.options[Input_Select.selectedIndex].value;
	Output_Currency_Value = Output_Select.options[Output_Select.selectedIndex].value;
	
	// console.log('Output_Currency_Value',Output_Currency_Value);
	// console.log('Input_Currency_Value',Input_Currency_Value);
	// console.log('Output_Select',Output_Select);
	// console.log('Input_Select',Input_Select);
	// console.log('Output_Value',Output_Value);
	// console.log('Input_Value',Input_Value);

	callback();
}

 // if fixer data is not retrieved, interface is off.
function switch_interface_off() {
    Input_Value.disabled   = true;
    Input_Select.disabled  = true;
    Output_Select.disabled = true;
}

// if fixer data is retrieved, turning the interface  on.
function switch_interface_on() {
    Input_Value.disabled   = false;
    Input_Select.disabled  = false;
    Output_Select.disabled = false;
}

function calculate_currency_value(value) {
	console.log(json_data);
}


function set_input_currency(value){
	Input_Value = value;
	console.log('Input Value:',Input_Value);
	calculate_currency_value();
}

function set_output_currency(value){
	Output_Value = value;
	console.log('Output Value:',Output_Value);
	calculate_currency_value();

}



