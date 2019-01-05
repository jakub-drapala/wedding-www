let weddingTime = new Date();
	weddingTime.setFullYear(2019);
	weddingTime.setMonth(8);
	weddingTime.setDate(7);
	weddingTime.setHours(14);
	weddingTime.setMinutes(0);
	weddingTime.setSeconds(0);
	let weddingTimeInMilis = weddingTime.getTime();
	
	
	
		function countdown(){
		var currentTime = new Date();
		let currentTimeInMiliS = currentTime.getTime();
		
		let difference = weddingTimeInMilis - currentTimeInMiliS;
		let differenceInDays = Math.floor(difference/86400000);
		let restHours = Math.floor((difference - differenceInDays*86400000)/3600000);
		let restMinutes = Math.floor((difference - differenceInDays*86400000 - restHours*3600000)/60000);
		let restSeconds = Math.floor((difference - differenceInDays*86400000 - restHours*3600000 - restMinutes*60000)/1000);
		
		
		/*document.getElementById('timer').innerHTML=  'Days: ' + differenceInDays + '<br/>Hours: ' + restHours + '<br/>Minutes: ' + restMinutes + '<br/>Seconds: ' + restSeconds;*/
		
		document.getElementById('timer').innerHTML= differenceInDays + ' dni ' + restHours + ' godzin ' + restMinutes + ' minut ' + restSeconds + ' sekund';
		
		setTimeout("countdown()", 1000)
		}
		
		window.onload = countdown;