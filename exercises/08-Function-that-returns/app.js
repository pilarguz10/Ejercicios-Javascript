var dollarToEuro = function(dollarValue){
	return dollarValue * 0.89;
}
var euroToYen = function(euroValue){
	return euroValue * 124.15;
}
//***** YOUR CODE BELOW ******///

let calculoEuro = dollarToEuro(137);
let resultadoYen = euroToYen(calculoEuro);
console.log(resultadoYen);