// validation build
var Validation = {
  init: function ()
	{
 /**
  * You can easily turn off individual components.
  * Just add two backslashes before component.
  * Sample -> //Validation.formLoginValidation();
 */
		Validation.formLoginValidation();
		Validation.formRegisterValidation();
		Validation.formRemindsValidation();
		Validation.formResetValidation();
		Validation.formAddGroupValidation();
	}, 

	
 // validation for login form
	formLoginValidation: function () {
		var loginForm = $("#loginform");
		if (loginForm.length){
			loginForm.validate({
				rules: {
					login_password: "required",
					login_email: {
						required: true,
						email: true
					},
				},
				messages: {
					login_password: "Podaj hasło.",
					login_email: {
						required: "Podaj adres email.",
						email: "podaj poprawny adres email."
					},
				},
				errorPlacement: function (error, element) {
					$("").appendTo(element.parent().find(".error-log"));
					error.appendTo(element.parent().find(".error-log"));
				}
			});
		}
	},
	
	
	// validation for registration form
	formRegisterValidation: function () {
		var registerForm = $("#registerform");
		if (registerForm.length){
			registerForm.validate({
				rules: {
					register_name: "required",
					register_nickname: "required",
					register_password: {
						required: true,
						minlength: 6
					},
					register_password_repeat: {
						required: true,
						equalTo: "#register-password"
					},
					register_email: {
						required: true,
						email: true
					},
				},
				messages: {
					register_name: "Podaj imię.",
					register_nickname: "Podaj nick.",
					register_password: {
						required: "Podaj hasło.",
						minlength: "Hasło jest zbyt krótkie"
					},
					register_password_repeat:	{
						required: "Podaj hasło.", 
						equalTo: "Powtórz wpisane hasło."	
					},
					register_email: {
						required: "Podaj adres email.", 
						email: "podaj poprawny adres email."
					},
				},
				errorPlacement: function (error, element) {
					$("").appendTo(element.parent().find(".error-log"));
					error.appendTo(element.parent().find(".error-log"));
				}
			});
		}
	},
	
	// validation for password reminder form
	formRemindsValidation: function () {
		var remindForm = $("#remindform");
		if (remindForm.length){
			remindForm.validate({
				rules: {
					remind_email: {
						required: true,
						email: true
					},
				},
				messages: {
					remind_email: {
						required: "Podaj adres email.", 
						email: "podaj poprawny adres email."
					},
				},
				errorPlacement: function (error, element) {
					$("").appendTo(element.parent().find(".error-log"));
					error.appendTo(element.parent().find(".error-log"));
				}
			});
		}
	},
	
	
	// validation for reset password form
	formResetValidation: function () {
		var resetForm = $("#resetpassword");
		if (resetForm.length){
			resetForm.validate({
				rules: {
					reset_password: {
						required: true,
					},
					reset_password2: {
						required: true,
						equalTo: "#reset-password"
					},
				},
				messages: {
					reset_password: {
						required: "Podaj nowe hasło.", 
					},
					reset_password2:	{
						required: "Podaj nowe hasło.", 
						equalTo: "Powtórz wpisane hasło."	
					},
				},
				errorPlacement: function (error, element) {
					$("").appendTo(element.parent().find(".error-log"));
					error.appendTo(element.parent().find(".error-log"));
				}
			});
		}
	},
	
	
	// amy account - add group validation form
	formAddGroupValidation: function () {
		var addGroupForm = $("#addgroupform");
		if (addGroupForm.length){
			addGroupForm.validate({
				rules: {
					groupname: {
						required: true,
						minlength: 10
					},
					groupdate: {
						required: true,
					},
					addgropupclubs_auto: {
						required: true,
						minlength: 10
					},
					addgroupevent_auto: {
						required: true,
						minlength: 10
					},

				},
				messages: {
					groupname: {
						required: "Pole tytułu nie może być puste.", 
						minlength: "tytuł musi być dłuższy niż 10 znaków.", 
					},
					groupdate: {
						required: "Pole wymagane, format daty: <b>dd.mm.yyyy H:i</b>",
					},
					addgropupclubs_auto: {
						required: "Pole wymagane, <b>wybierz z listy.</b>.",
						minlength: "<b>Wybierz z listy.</b>.",
					},
					addgroupevent_auto: {
						required: "Pole wymagane, <b>wybierz z listy.</b>.",
						minlength: "<b>Wybierz z listy.</b>.",
					},
				},
				errorPlacement: function (error, element) {
					$( "" ).appendTo( element.parent().find( ".error-log" ) );
					error.appendTo( element.parent().find( ".error-log" ) );
				}
			});
		}
	}
	
};


// INIT VALIDATIONd
Validation.init();
