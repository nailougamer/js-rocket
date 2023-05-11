var timer = null;
var countdownNumber = 10;

var ChangeState = function (state) {
	document.body.className = 'body-state'+ 
	state;
	clearInterval(timer);
	countdownNumber = 10;
document.getElementById('countdown').
		innerHTML = countdownNumber;
//countdown
	if (state == 2)  {
		timer = setInterval(function () {
			countdownNumber = countdownNumber -1;
			document.getElementById('countdown').
		innerHTML = countdownNumber;
		
		if(countdownNumber > 4 && countdownNumber < 8) {
				//show the scared text
				document.getElementById('scared').className = 'scared show';
		 } else {

		 	document.getElementById('scared').className = 'scared';
		 }

		if(countdownNumber < 4 && countdownNumber > 1) {
				//show the why tho text
				document.getElementById('why-tho').className = 'why-tho show';
		} else {

			document.getElementById('why-tho').className = 'why-tho';
		}

		if (countdownNumber <= 0) {
			ChangeState(3);
		};
		}, 500);
	} else if (state == 3) {
		var success = setTimeout(function () {
			var randomNumber = Math.round(Math.random()*10);

			console.log('randomNumber:',randomNumber)

			if (randomNumber > 9) {
				ChangeState(4); // and this is a succesfull launch
			} else {
				ChangeState(5); // so this is a failed launch
			};

		}, 3000);
	}; 	

	};
