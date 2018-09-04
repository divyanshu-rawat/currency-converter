
window.addEventListener("DOMContentLoaded", function() {}, false); // Can Also Be Used To Trigger AJAX.

var json_response = null;

loadScript("https://unpkg.com/axios/dist/axios.min.js", function(){

  // axios.get('http://data.fixer.io/api/latest?access_key=1a648cc69ff1561e5d6407585b107ea9')
  
 function call_fixer(){
	  axios.get('http://data.fixer.io/api/latest?access_key=1a648cc69ff1561e5d6407585b107ea9')
	  .then(function (response) {

	  	// console.log(response)
	  	json_response = response;
	    switch_interface_on();
	  })
	  .catch(function (error) {
	      console.log(error);
	      switch_interface_on();
	  });
 }

 call_fixer();

});

 // if fixer data is not retrieved, interface is off.
function switch_interface_off() {

    let get = get_currency_type_value();

    get.Input_currency_value.disabled   = true;
    get.Input_currency_type.disabled    = true;
    get.Output_currency_value.disabled  = true;
    get.Output_currency_type.disabled   = true;
}

// if fixer data is retrieved, turning the interface  on.
function switch_interface_on() {

	let get = get_currency_type_value();

    get.Input_currency_value.disabled   = false;
    get.Input_currency_type.disabled    = false;
    get.Output_currency_value.disabled  = false;
    get.Output_currency_type.disabled   = false;
}

function calculate_currency_value() {
	let get  = get_currency_type_value();

	if(json_response){

		console.log('!!!!!',get.Input_currency_type.value,get.Output_currency_type.value)

	    let Input_currency_rate   = json_response.data.rates[get.Input_currency_type.value];
	    let Output_currency_rate  = json_response.data.rates[get.Output_currency_type.value];

	    console.log(Input_currency_rate, Output_currency_rate);

	    let Output_currency_value = (get.Input_currency_value.value * Output_currency_rate / (Input_currency_rate)).toFixed(2);

	    console.log('calculation',Output_currency_value);
	    document.getElementById("Output_Value").value = Output_currency_value;

	}
	


}


function get_currency_type_value(){

	let Input_currency_type   = document.getElementById("Input_Currency");
	let Output_currency_type  = document.getElementById("Output_Currency");
	let Input_currency_value  = document.getElementById("Input_Value");
	let Output_currency_value = document.getElementById("Output_Value");

	return {
		Input_currency_type   : Input_currency_type,
		Output_currency_type  : Output_currency_type,
		Input_currency_value  : Input_currency_value,
		Output_currency_value : Output_currency_value
	}
}




