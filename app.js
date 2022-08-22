const computerChoice = document.getElementById('computer');
const userChoice= document.getElementById('user');
const result = document.getElementById('result');
const choices = document.querySelectorAll('button');

let users;
let computers;
let results;

choices.forEach(choice => choice.addEventListener('click', (e) => {
	users = e.target.id;
	userChoice.innerHTML = users;
	compChoice();
	// computerChoice.innerHTML = computers;
	getResult();
	// result.innerHTML = results;
}))

var Choice = ["Scissors", "Paper", "Rock"]
function compChoice(){
	x = Math.floor(Math.random()*Choice.length);
	computers = Choice[x];
	computerChoice.innerHTML = computers;
}

function getResult(){
	if (users == "Paper"){
		if (computers == "Scissors"){
			results = "YOU WIN"
		}else if (computers == "Rock"){
			results = "YOU LOSE"
		}else{
			results = "IT'S A DRAW"
		}
	} else if (users == "Rock"){
		if (computers == "Scissors"){
			results = "YOU WIN"
		}else if (computers == "Paper"){
			results = "YOU LOSE"
		}else{
			results = "IT'S A DRAW"
		}
	} else {
		if (computers == "Paper"){
			results = "YOU WIN"
		}else if (computers == "Rock"){
			results = "YOU LOSE"
		}else{
			results = "IT'S A DRAW"
		}
	}
	result.innerHTML = results;
};