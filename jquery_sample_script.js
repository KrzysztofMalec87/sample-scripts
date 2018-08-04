// VARIABLES
var regissterForm = $('#registerform');

/*
FUNCTIONS
subscribe to mailchimg when register form checkbox is checked
*/
function registerUserSubscribe($thisForm){
	//get form datas
	var userName = $thisForm.find('#register-name').val().trim();
	var userEmail = $thisForm.find('#register-email').val();
	var isCheckboxChecked = $thisForm.find('#acceptance_second').is(':checked');
	var isFormValid = $thisForm.valid();

	// do ajax when form is valid and acceptance checkbox ich checked
	if(isFormValid && isCheckboxChecked){
		//send data to mailchimp
    $.ajax({
    	type: "GET",
    	url: "//group.us19.list-manage.com/subscribe/post?u=037149ca4e25a58627bca3618&amp;id=af1b71b71c",
    	data: {
    		FNAME: userName,
    		EMAIL: userEmail
    	},
    	dataType: "jsonp",
    });
	}
}


/*
ACTIONS
subscribe to mailchimg after submit
form is working also with php so I not use preventDefault()
*/

regissterForm.on('submit', function(){
	var thisForm = $(this); 
	
	// will send data to mailchimp
	registerUserSubscribe(thisForm);
});