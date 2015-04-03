(function () {
angular
	.module('TTTApp')
	.controller('TTTController',TTTController);

	//constructor function
	function TTTController () {
		var self = this;

		//this is for the ng-show.
		self.p1wins = false;
		self.p2wins =false;
		self.tie = false;
		//determine whos turn it is.
		self.player1= true;
		self.player2= false;
		//this will either be 1 or 0 to show who's turn it is
		self.turn = 0;
		//this counts how many times both players have clicked the boxes.
		self.count = 0;

		//determine how many times a player has won.
		self.player1Wins = 0;
		self.player2Wins = 0;
		self.logIn = true;
		self.nextPage = false;
		self.player1Name = " ";
		self.player2Name = " ";


		self.boxes = [
			{ boxId: "box1", active: false, move: null},
			{ boxId: "box2", active: false, move: null},
			{ boxId: "box3", active: false, move: null},
			{ boxId: "box4", active: false, move: null},
			{ boxId: "box5", active: false, move: null},
			{ boxId: "box6", active: false, move: null},
			{ boxId: "box7", active: false, move: null},
			{ boxId: "box8", active: false, move: null},
			{ boxId: "box9", active: false, move: null}

		];


		

		self.checkWinner = function() {
			var win1 = self.boxes[0].move + self.boxes[1].move + self.boxes[2].move;
			var win2 = self.boxes[3].move + self.boxes[4].move + self.boxes[5].move;
			var win3 = self.boxes[6].move + self.boxes[7].move + self.boxes[8].move;
			var win4 = self.boxes[0].move + self.boxes[3].move + self.boxes[6].move;
			var win5 = self.boxes[1].move + self.boxes[4].move + self.boxes[7].move;
			var win6 = self.boxes[2].move + self.boxes[5].move + self.boxes[8].move;
			var win7 = self.boxes[2].move + self.boxes[4].move + self.boxes[6].move;
			var win8 = self.boxes[0].move + self.boxes[4].move + self.boxes[8].move;
			
			

			if(win1 === "XXX" || win2 ==="XXX" || win3 ==="XXX" || win4 ==="XXX" || win5 ==="XXX" || win6 ==="XXX" || win7 ==="XXX" || win8 ==="XXX") {
			
			self.player1Wins +=1;
			self.p1wins = true;
			// self.clear();
			} else if (win1 === "OOO" || win2 ==="OOO" || win3 ==="OOO" || win4 ==="OOO" || win5 ==="OOO" || win6 ==="OOO" || win7 ==="OOO" || win8 ==="OOO") {
			
			self.player2Wins +=1;
			self.p2wins = true;
			// self.clear();
			} else if (self.count === 9){
			
			self.tie = true;
			// self.clear();
			}


		};

		self.click = function($index) {

			if(self.boxes[$index].move!== null){
				return false;
			}
			var box = self.boxes[$index];

			if(self.player1 === true) {
				if (box.active === false) {
				box.move = "X";
				self.turn = 1;
				self.player1 = false;
				self.player2 = true;
				self.count +=1;
				
				}
				else if (box.active ===true){
					alert("This box is filled!");
				}
			}
			else if(self.player2 === true ) {
				if (box.active === false) {
					box.move = "O";
					self.turn = 0;
					self.player1 = true;
					self.player2 = false;
					self.count +=1;
					
				}
				else if (box.active ===true){
					alert("This box is filled!");

				}
			}
			self.checkWinner();

		};

		self.newGame = function() {
			self.player1 = true;
			self.player2= false;
			self.turn = 0;
			self.count = 0;
			self.p1wins = false;
			self.p2wins = false;
			self.tie = false;
			self.player1Wins = 0;
			self.player2Wins = 0;
			self.logIn = true;
			self.player1Name = " ";
			self.player2Name = " ";
			for (var i = 0; i < self.boxes.length; i++) {
				self.boxes[i].active = false;
				self.boxes[i].move = null;
			}

		};
			self.playAgain = function() {
			self.player1 = true;
			self.player2= false;
			self.turn = 0;
			self.count = 0;
			self.p1wins = false;
			self.p2wins = false;
			self.tie = false;

			for (var i = 0; i < self.boxes.length; i++) {
				self.boxes[i].active = false;
				self.boxes[i].move = null;
			}

		};
			self.signIn = function () {
				self.logIn = false;
				self.nextPage = true;
			};

			self.next = function() {
				self.nextPage = false;

			};
		}



}());