module.exports = function countRegNumber(registration){
    //you functions logic here
    //function countRegNumber(registration){//"CA 182736,CY 523519,CJ 812328")
  var regNumber = registration.split(",");    //"CA 182736", "CY 52351"
  return regNumber.length;//3
}