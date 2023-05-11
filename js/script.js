        //this function does this.

        var doCoolStuff = function () {
         var currentClassName = document.getElementById('cool').className;

         if  (currentClassName  == 'cool') {
          document.getElementById('cool').className = 'cool red';
         } else {
          //changing class name.
          document.getElementById('cool').className = 'cool';
        }
        }

        var ball = {
        	make: 'boing',
        	type: 'bouncy',
        	color: 'red',
        	isBouncing: false,
        	numberOfblueDots: 20,
        	poles: ['north','east','south','west'],

        	turnOn: function () {this.isBouncing = true; },
       		
       		turnOff: function () {this.isBouncing = false; },
       		
          bojoing: function () {alert('bojoing');
        },

       		bounce: function (boing) {
       			console.log('bounce ' +boing);
       			if (boing == true) {
       			this.isBouncing = true;		
       			} else {
       				this.isBouncing = false;
       			}
       		}

        };


        console.log('hello boomers');