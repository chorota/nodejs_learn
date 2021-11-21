const roundTo = require("round-to");

//少数第３位を四捨五入。結果を３桁の文字列にする。
var padding = function(value){
  if(isNaN(parseFloat(value))){
    return "-";
  }
  return roundTo(value,2).toPrecision(3);
};
//少数第３位を四捨五入。
var round = function(value){
  return roundTo(value, 2);
};

module.exports = {
  padding,
  round
};