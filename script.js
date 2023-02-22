document.getElementById('apply-btn').addEventListener('click', function(){
    const amountOfMoney = document.getElementById('price');
    const amountOfMoneyString = amountOfMoney.value;
    const price = parseInt(amountOfMoneyString);

    // added with pay 
    const payment = document.getElementById('total-price');
    const totalPaymentString = payment.innerText;
    const totalPayment = parseInt(totalPaymentString);

    //discount 
    const coupon = document.getElementById('coupon');
    const couponValueString = coupon.value;
    if(couponValueString === 'DISC30'){
        const converting = price - price * 0.3;
        payment.innerText = converting;
        return converting
    }else{
        const pricePayment = totalPayment + price;
        payment.innerText = pricePayment;
    }
})