
window.addEventListener("DOMContentLoaded", function() {}, false); // Can Also Be Used To Trigger AJAX.

var json_response = null;

// api call to fixer when DOM content is loaded.
loadScript("https://unpkg.com/axios/dist/axios.min.js", function(){

 function call_fixer(){

 	  // for CORS point of view.

 	  
 	  document.getElementById("data_loading").innerHTML = 'Loading....';
      axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

	  axios.
	  get('http://data.fixer.io/api/latest?access_key=1a648cc69ff1561e5d6407585b107ea9')
	  .then(function (response) {

	  	if(response.data.error){
	  		document.getElementById("err").innerHTML = response.data.error.info;
	  		switch_interface_off();
	  		document.getElementById("data_loading").innerHTML = '';
	  	}
	  	else{
	  		json_response = response;
	    	switch_interface_on();
	    	document.getElementById("data_loading").innerHTML = '';
	  	}
	
	  })
	  .catch(function (error) {
	      switch_interface_off();
	      document.getElementById("err").innerHTML = error;
	  });
 }

 call_fixer();

});

 // if fixer data is not retrieved, turning interface off.
function switch_interface_off() {

    let get = get_currency_type_value();

    get.Input_currency_value.disabled   = true;
    get.Input_currency_type.disabled    = true;
    get.Output_currency_value.disabled  = true;
    get.Output_currency_type.disabled   = true;
}

// if fixer data is retrieved, turning the interface on.
function switch_interface_on() {

	let get = get_currency_type_value();

    get.Input_currency_value.disabled   = false;
    get.Input_currency_type.disabled    = false;
    get.Output_currency_value.disabled  = false;
    get.Output_currency_type.disabled   = false;
}


// Used to convert currency.
function calculate_currency_value() {
	let get  = get_currency_type_value();

	if(json_response){

	    let Input_currency_rate   = json_response.data.rates[get.Input_currency_type.value];
	    let Output_currency_rate  = json_response.data.rates[get.Output_currency_type.value];

	    let Output_currency_value = (get.Input_currency_value.value * Output_currency_rate / (Input_currency_rate)).toFixed(2);
	    document.getElementById("Output_Value").value = Output_currency_value;

	}
}

// Returns all the input field, dropdown current values as an JS Object.
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




