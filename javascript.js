//varibles
			var userdata = {
			'name' : "",
			'title' : "",
			'email' : "",
			'mousex' :[],
			'mousey' :[],
			'height' : "",
			'width' : "",
			'browser' : ""
			};
			//clears consol
			function showResults() {
				console.clear();
				console.log(userdata);
			}
			
			var results = document.getElementById('showResults');
			
			results.addEventListener("click", showResults);
			
		
			//sends users input for fullname
		var fullname = document.getElementById('fullname');
			function getname(){
				userdata.name = fullname.value;
				
			}
			document.addEventListener('click', getname);

			//sends users input email to consol
		var email = document.getElementById('email');
			function getemail(){
				userdata.email = email.value;
				
			}
			document.addEventListener('click', getemail);


		
		//recored mouse movement up to 100 for the X and Y
		function onMouseMove(e){	
			userdata.mousex.push(e.clientX);
			userdata.mousey.push(e.clientY);
			
			
			if (userdata.mousex.length > 100){
				document.removeEventListener('mousemove', onMouseMove);
			
			}
			if (userdata.mousey.length > 100){
				document.removeEventListener('mousemove', onMouseMove);
			}
		}
			
			document.addEventListener('mousemove', onMouseMove);
		
			
		//sends the title od page to console	
		function windowLoad() {
		userdata.title = document.title;
		}
			window.addEventListener('load', windowLoad);
			
		//sends the height of the screen to console
		function getheight(){
		userdata.height = window.innerHeight;
		
		}	
			window.addEventListener('load', getheight);
						
		//sends the width of the screen to console				
		function getwidth(){
		userdata.width = window. innerWidth;
		
		}	
			window.addEventListener('load', getwidth);		

		//as soon as the page opens the browser loads to console
		function getbrowser(){
		userdata.browser = window. navigator. userAgent;
		
		}	
			window.addEventListener('load', getbrowser);
						
	
