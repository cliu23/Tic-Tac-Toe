(function(){
angular
	.module('TTTApp')
	.controller('TTTController',TTTController);

	TTTController.$inject = ['$firebaseObject', '$firebaseArray'];

	//constructor function
	function TTTController ($firebaseObject, $firebaseArray) {
		var self = this;
		self.binding = getGame();
		self.click = click;
		self.playAgain = playAgain;
		self.player1Count = 0;
		self.player2Count = 0;
		self.p1wins = false;
		self.p2wins = false;
		self.tie = false;
		self.countClick = 0;

		function getGame() {
			var ref = new Firebase("https://tictactoe23.firebaseio.com/game");
			var binding = $firebaseObject(ref);
				binding.boxes = [
				{ boxId: "box1", active: false, move: ""},
				{ boxId: "box2", active: false, move: ""},
				{ boxId: "box3", active: false, move: ""},
				{ boxId: "box4", active: false, move: ""},
				{ boxId: "box5", active: false, move: ""},
				{ boxId: "box6", active: false, move: ""},
				{ boxId: "box7", active: false, move: ""},
				{ boxId: "box8", active: false, move: ""},
				{ boxId: "box9", active: false, move: ""}

			];
			binding.player1= false;
			binding.player2= false;
			binding.turnCounter = 0;
			binding.$save();
			return binding;
		}

		self.checkWinner = function() {
			var win1 = self.binding.boxes[0].move + self.binding.boxes[1].move + self.binding.boxes[2].move;
			var win2 = self.binding.boxes[3].move + self.binding.boxes[4].move + self.binding.boxes[5].move;
			var win3 = self.binding.boxes[6].move + self.binding.boxes[7].move + self.binding.boxes[8].move;
			var win4 = self.binding.boxes[0].move + self.binding.boxes[3].move + self.binding.boxes[6].move;
			var win5 = self.binding.boxes[1].move + self.binding.boxes[4].move + self.binding.boxes[7].move;
			var win6 = self.binding.boxes[2].move + self.binding.boxes[5].move + self.binding.boxes[8].move;
			var win7 = self.binding.boxes[2].move + self.binding.boxes[4].move + self.binding.boxes[6].move;
			var win8 = self.binding.boxes[0].move + self.binding.boxes[4].move + self.binding.boxes[8].move;
			
			

			if(win1 === "XXX" || win2 ==="XXX" || win3 ==="XXX" || win4 ==="XXX" || win5 ==="XXX" || win6 ==="XXX" || win7 ==="XXX" || win8 ==="XXX") {
			
			alert("you win");
			self.player1Count +=1;
			self.p1wins = true;
			self.p2wins = false;

			} else if (win1 === "OOO" || win2 ==="OOO" || win3 ==="OOO" || win4 ==="OOO" || win5 ==="OOO" || win6 ==="OOO" || win7 ==="OOO" || win8 ==="OOO") {
			
			self.player2Count +=1;
			self.p2wins = true;
			self.p1wins = false;
			
			} else if (self.countClick === 9){

			self.tie = true;
			}


		};

		function click($index) {
			if (self.binding.boxes[$index].active === "true") {
				alert("Pick another BOX!");
				return false;
			}
			if (self.binding.turnCounter === 0) {
				self.binding.boxes[$index].move = "X";
				self.binding.turnCounter = 1;
				self.binding.boxes[$index].active = "true";
				self.countClick +=1;
				
				self.binding.$save();

			}
			else if (self.binding.turnCounter === 1) {
				self.binding.boxes[$index].move = "O";
				self.binding.turnCounter = 0;
				self.binding.boxes[$index].active = "true";
				self.countClick +=1;
				self.binding.$save();
			}
			self.checkWinner();
		}
		
		function playAgain() {
			self.player1Count = 0;
			self.player2Count = 0;
			self.p1wins = false;
			self.p2wins = false;
			self.tie = false;
			self.countClick = 0;

		}



	}

})();
