module.exports = function countAllPaarl(regNumber){
    //you functions logic here
   // function allPaarl(regNumber){
        var number = regNumber.split(", ");
        var paarl = 0;
        for(var i=0;i<number.length;i++){
        var reg = number[i];
          if(reg.startsWith('CJ')){
          //paarl.push(reg);
          paarl++;
          }
        }
        return paarl;
      //}
}