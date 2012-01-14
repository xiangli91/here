function createTopbar()
	  {
			var main= document.createElement("div");
			main.className="fill";
			var container= document.createElement("div");
			container.className="container";
			var brand = document.createElement("a");
			brand.className="brand";
			brand.href="#";
			brand.innerHTML=" ";
			var rightSide= document.createElement("div");
			rightSide.className="pull-right";
			
			main.appendChild(container);
			container.appendChild(brand);
			container.appendChild(rightSide);
			
			//if logged in
			if(false)
			{
				var div= document.createElement("div");
				var text = document.createElement("p");
				text.innerHTML="Logged in as ";
				var name = document.createElement("a");
				name.href="#";
				name.innerHTML="LUEshi";
				div.appendChild(text);
				text.appendChild(name);
				rightSide.appendChild(div);
			}
			else
			{
				var form = document.createElement("form");
				form.action="";
				
				var usernameInput = document.createElement("input");
				usernameInput.className="input-small";
				usernameInput.type="text";
				usernameInput.placeholder="Username";
				
				var passwordInput = document.createElement("input");
				passwordInput.className="input-small";
				passwordInput.type="password";
				passwordInput.placeholder="Password";
				
				var login = document.createElement("input");
				login.className="btn primary";
				login.type="submit";
				login.value="Sign in";
				
				form.appendChild(usernameInput);
				form.appendChild(passwordInput);
				form.appendChild(login);
				rightSide.appendChild(form);
			}
			document.getElementById("topbar").appendChild(main);
	  }