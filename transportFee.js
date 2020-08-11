module.exports = function transportFee(shift) {
  //you functions logic here
  //function transportFee(shift){
  switch (shift) {
    case "morning":
      //console.log(shift);
      return "R20";
    case "afternoon":
      return "R10";
    case "nightshift":
      return "free";
    default:
      return "no pay";
  }
  //  }
}