
window.addEventListener("DOMContentLoaded", function() {}, false); // Can Also Be Used To Trigger AJAX.


// Global Variables.
var baseCurrency   = ""
var Input_Currency = ""   , outputCurrency  = "" ;
var Input_Value    = null , Output_Value    = null;
var Input_Select   = null , Output_Select   = null;

var currencyJSONData = null;

loadScript("https://unpkg.com/axios/dist/axios.min.js", function(){

	  // axios.get('http://data.fixer.io/api/latest?access_key=1a648cc69ff1561e5d6407585b107ea9')
	  
	 function call_fixer(){
		  axios.get('http://www.reddit.com/r/technology/.json')
		  .then(function (response) {
		    console.log(response);
		  })
		  .catch(function (error) {
		      console.log(err);
		  });
	 }

	 Initialize_Project(call_fixer);

});


	 function Initialize_Project(callback) {
	   
	    Input_Value = document.getElementById("Input_Value");
	    console.log('Input_Value',Input_Value);
	    
	    Output_Value = document.getElementById("Output_Value");
	    console.log('Output_Value',Output_Value);
	   
	    Input_Select = document.getElementById("Input_Currency");
	    console.log('Input_Select',Input_Select);
	    Output_Select = document.getElementById("Output_Currency");
	    console.log('Output_Select',Output_Select);

	    Input_Currency_Value = Input_Select.options[Input_Select.selectedIndex].value;
	    console.log('Input_Currency_Value',Input_Currency_Value);

	    Output_Currency_Value = Output_Select.options[Output_Select.selectedIndex].value;
	    console.log('Output_Currency_Value',Output_Currency_Value);

	    callback();
	}

