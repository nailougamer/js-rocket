        var ball = {
        	make: 'boing',
        	type: 'bouncy',
        	color: 'red',
        	isBouncing: false,
        	numberOfblueDots: 20,
        	poles: ['north','east','south','west'],

        	turnOn: function () {this.isBouncing = true; },
       		
       		turnOff: function () {this.isBouncing = false; },
       		
       		bounce: function (boing) {
       			console.log('bounce ' +boing);
       			if (boing == true) {
       			this.isBouncing = true;		
       			} else {
       				this.isBouncing = false;
       			}
       		}

        };


        console.log('hello humans');