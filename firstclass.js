function mul(a,b, callback) {
	console.log(a*b);
	callback();
}

mul(2,7, function(){
	console.log('This is a callback function');
	console.log('What this does is send a function as an argument');
});
mul(4,4, function(){
	console.log('This is a unique trait of JS');
});