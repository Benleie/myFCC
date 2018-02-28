//console.log(RegExp.leftContext)  //D:\learnByDo\FCC\Algorithm\Advanced\
let cl = console.log;
+function() {
	let now = new Date().toString()
	let left = /2018\s/,
		right = /GMT/;
	left.exec(now)
	now = RegExp.rightContext;
	right.exec(now)
	cl(RegExp.leftContext)
}();





