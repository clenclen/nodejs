function placeOrder(orderNumber){

	console.log("Customer order:", orderNumber); 

	cookAndDeliverFood(function(){
		console.log("Delivered food:", orderNumber);
	});
}

//Simulate 5 sec operation 

function cookAndDeliverFood(callback){
	setTimeout(callback, 5000);
}


//Simulate user web requests 

placeOrder(1);
placeOrder(2);
placeOrder(3);
placeOrder(4);
placeOrder(5);
