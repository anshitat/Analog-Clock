const deg = 6;
		const hr = document.querySelector('#hr');
		const mn = document.querySelector('#mn');
		const sc = document.querySelector('#sc');

		setInterval(()=>{
			let day = new Date();
			let h = day.getHours();
			if(h > 12){
				h = h-12;
			}
			let hh = h *30;
			let mm = day.getMinutes() * deg;
			let ss  = day.getSeconds() *deg;
			

			hr.style.transform = `rotateZ(${hh}deg)`;
			mn.style.transform = `rotateZ(${mm}deg)`;
			sc.style.transform = `rotateZ(${ss}deg)`;
		});


		/* Theme-Toggler */
			let checkbox  = document.querySelector('input[name=mode]');
		checkbox.addEventListener('change', function(){
			if(this.checked)
			{
				document.documentElement.setAttribute('data-mode', 'light');
			}
			else{
				document.documentElement.setAttribute('data-mode', 'dark');
			}
		})