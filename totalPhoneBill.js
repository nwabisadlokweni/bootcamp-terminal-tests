module.exports = function totalPhoneBill(phoneBill){
    //you functions logic here
    //function totalPhoneBill(phoneBill){
        var bill = phoneBill.split(", ");
        var total = 0;
        for(var i=0;i<bill.length;i++){
          if(bill[i].startsWith("call")){
             total += 2.75;
             }
          if(bill[i].startsWith("sms")){
             total += 0.65;
             }
        }
      return "R" + total.toFixed(2);
      //}
}