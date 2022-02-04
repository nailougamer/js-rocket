var timer = null;
var countdownNumber = 10;

var ChangeState = function (state) {
	document.body.className = 'body-state'+ 
	state;
	clearInterval(timer);
	countdownNumber = 10;
document.getElementById('countdown').
		innerHTML = countdownNumber;

	if (state == 2)  {
		timer = setInterval(function () {
			countdownNumber = countdownNumber -1;
			document.getElementById('countdown').
		innerHTML = countdownNumber;
		
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

		}, 2000);
	}; 	

	};
