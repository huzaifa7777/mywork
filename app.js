"use strict"

	var resultdiv=document.getElementById("results");
	resultdiv.innerHTML="<p>Message injected by js</p>";
	
	var result={
		title:"java",
		instructor:"saurabh",
		level:"Beginner"
	};
console.log(result);
result.premium =false;

result.showTotal = function(a,b){
return a+b;
}
var results= [{
		title:"java",
		instructor:"saurabh",
		level:"Beginner"
	},{
		title:"java",
		instructor:"saurabh",
		level:"Beginner"
	},{
		title:"java",
		instructor:"saurabh",
		level:"Beginner"
	},{
		title:"java",
		instructor:"saurabh",
		level:"Beginner"
	}];
results.push(result);
console.log(result);