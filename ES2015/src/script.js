const money = [{
      currency: "UAH"
    }, {
      currency: "USD"
    }, {
      currency: "EUR"
    }];

	
	
const product = [{
	  id: "1",
	  shirt: "images/shirt1.jpg",
	  info: "Shirt Fred Perry",
	  price: [{
		  UAH:"850.00грн",
	      USD:"31.43$",
		  EUR:"29.58€"
		  }]
    },{
	  id: "2",
	  shirt: "images/shirt2.jpg",
      info: "Shirt Reserved",
	  price: [{
		  UAH:"625.00грн",
		  USD:"22.10$",
		  EUR:"20.89€"
		  }]
	},{
	  id: "3",
	  shirt: "images/shirt3.jpg",
      info: "Shirt Looh Kalinio",
	  price: [{
		  UAH:"550.00грн", 
		  USD:"21.01$", 
		  EUR:"19.56€"
		  }]
	},{
	  id: "4",
	  shirt: "images/shirt4.jpg",
      info: "Shirt Esperance",
	  price: [{
		  UAH:"785.00грн", 
	      USD:"30.01$", 
		  EUR:"28.40€"
		  }]
	}];	
	
	
window.onload = function() {
	
    function templateBuilder(tempSelector, buildSelector, name, obj){
		let tmpl = document.getElementById(tempSelector).innerHTML.trim();
        tmpl = _.template(tmpl);
		document.getElementById(buildSelector).innerHTML = tmpl({list: name, list1: obj});
	}
	
	    templateBuilder('grid-template', 'currency', money); 
        templateBuilder('content-template', 'products', product, product1); 
		
        $('.ui.dropdown').dropdown();
		   

       /* let activeCur = $("div.jsCur"), price = $('.price');
           activeCur.click(function() {
           let cur = $(this).data("cur");
           price.each(function(indx, element) {
               !$(this).data('price') && $(this).data('price', +$(this).text());
               $(this).text(($(this).data('price') / rates[cur]).toFixed(2) + ' ' + cur)
           });
        }).first().click();	 */

}
	
	


function modalOpenBasket(){
    $('.ui.modal').modal('show');
}
function removeSalePage(){
    $('#sale-page').hide();
	$('#menu a').removeClass('active-page');
	$('#content').removeAttr('style');
	$('#buy-page').fadeIn(600);
}
function showPage(){
    $('#sale-page').fadeIn(500);
	$('#menu a.sale').addClass('active-page');
	$('#content').css({'backgroundColor':'#f8f8fa'});
	$('#buy-page').hide();
}	


