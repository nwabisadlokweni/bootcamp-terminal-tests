module.exports = function mostProfitableDepartment(place){
    //you functions logic here
   // function mostProfitableDepartment(place){
        var dep = place;
        var depart = '';
        var amount = 0;
        for(var i=0;i<dep.length;i++){
        if(dep[i].sales > amount){
           amount = dep[i].sales;
          depart = dep[i].department;
           }
        }
        //console.log(depart);
        return depart;
    //  }
}