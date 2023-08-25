function calculate(){    
    const quantity = document.getElementById("quantity").value;//grab value from input
    
//Conditonal Setting    
    var discountPercent=0;

    if(quantity < 5 && quantity>0){
        discountPercent=0;
    }else if(quantity >=5 && quantity <=10){
        discountPercent = 10;
    }else if(quantity > 10){
        discountPercent=20;
    }else{
        console.log("invalid");
    }
//Calculation
    const quantityPrice = quantity *10;
    var discountAmount = (quantityPrice * discountPercent)/100;
    console.log(quantityPrice);
    const totalAmount = quantityPrice - discountAmount;
    document.getElementById('famount').value = quantityPrice;
    document.getElementById('discountp').value = discountPercent;
    document.getElementById('discount').value = discountAmount;
    document.getElementById('total').value = totalAmount;
}