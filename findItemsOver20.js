module.exports = function findItemsOver20(item){
    //you functions logic here
  //  function findItemsOver20(item){
        var high = [];
          for(var i=0;i<item.length;i++){
            if(item[i].qty > 20){
               high.push(item[i]);
               }
          }
          return high;
       // }
}