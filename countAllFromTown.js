module.exports = function countAllFromTown(registration){
    //you functions logic here
    //function allFromTown(registration, location){
        //console.log(registration);
        var reg = registration.split(",");
          var town = 0;
          for(var i=0;i<reg.length;i++){
            var trimReg = reg[i].trim();
            if(trimReg.startsWith("CY")){
           // town.push(trimReg);
           return 0;
            } 
            if (trimReg.startsWith("CA")){
              town++;
            }
          }
         //console.log(town);
         return town;
      //  }
}