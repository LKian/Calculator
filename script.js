
var decimal = document.getElementById("decimal");
var equal = document.getElementById("equal");
// var plus = document.getElementById("plus");
var clear = document.getElementById("clear");
var screen = document.getElementById("screen"); 
// var divide = document.getElementById("divide");
var solution = 0;
screen.textContent =  solution;




var numbers = document.getElementsByClassName("number");
for(var i=0; i<numbers.length; i++) {
	numbers[i].addEventListener("click", function() {
		screen.textContent += this.value;
		for (var x=0; x<opers.length; x++) {
			opers[x].classList.remove("disabled");
		}
	})
}


var opers = document.getElementsByClassName("oper");
for(var i=0; i<opers.length; i++) {
	opers[i].addEventListener("click", function() { 
		this.classList.add("disabled");
		for (var x=0; x<opers.length; x++) {
			opers[x].classList.add("disabled");
		}
		screen.textContent += this.value;
		})
}

equal.addEventListener("click", function() {
	solution = eval(screen.textContent);
	// console.log(solution);
	// console.log(typeof(solution));
	screen.textContent = solution;
})




clear.addEventListener("click", function() {
	reset();
})


decimal.addEventListener("click", function() {
	screen.textContent += this.value;
})

function reset() {
	solution = 0;
	screen.textContent = 0; }




// equal.addEventListener("click", function() { 
// 	solution = eval(screen.textContent);
// 	screen.textContent = solution;
// })
// Quick validation to start with
// if (answer == undefined || answer == null || answer.length <= 0) {
//     answer = 0; }
// else {
//     answer; }


