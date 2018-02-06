
var a = 1;
console.log('Initial Global value is ', a);

function willNotChange() {
	var a = 5;
	console.log('local var a');
	console.log(a)
}

function willChange() {
	a = 5;
	console.log('local a');
	console.log(a)
}

console.log('Called function willnotchange');
willNotChange();


console.log('global a');
console.log(a);

console.log(' ');

console.log('Called function willchange ');
willChange();

console.log(' changed global a');
console.log(a);

console.log(' This happens because a new var was created in the first function');
console.log(' 2nd function looks in the global scope since it doesnt find anything in local ');