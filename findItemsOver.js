module.exports = function findItemsOver(item2, threshold){
    //you functions logic here
   // function findItemsOver(item2, threshold){
        var list = item2;
        var thresh = threshold;
        var hold = [];
       for(var i = 0;i< list.length;i++){
         if(list[i].qty > thresh){
           hold.push(list[i]);
           }
       }
        return hold;
     // }
}