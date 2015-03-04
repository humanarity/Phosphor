
z = document.createElement('div');
z.id = "COVERALL";
var ctr = setInterval(function () {
	if(!!document.body) { 
	document.body.appendChild(z);
	clearInterval(ctr);
	}
	},10);
