// Write your Pizza Builder JavaScript in this file.

var pepperoniBtn =$(".btn-pepperonni");
var mushroomsBtn=$(".btn-mushrooms");
var greenPeppersBtn=$(".btn-green-peppers");
var whiteSauce=$(".btn-sauce");
var glutenFreeCrustBtn=$(".btn-crust");


function Pizza() {
    this.ingredients = {
    pepperoni : {
         on:true,
          price: 1
        },
    mushrooms :{
        on:true,
         price: 1
        },
    greenPeppers :{
        on:true,
         price: 1
        },
    whiteSauce : {
        on:true,
         price: 3
        },
    glutenFreeCrust :{
        on:true,
         price: 5
        },
    }
    
}

Pizza.prototype = { 
   
    clickBtn : function(eleChosen, inerKey, list,hide){
        var that=this;
           this.ingredients[inerKey].on = !this.ingredients[inerKey].on
           eleChosen.toggleClass(hide);
           list.toggleClass("hide");
            that.updatePrice();
    },
    updatePrice: function() {
        var that=this;
        var totalPriceElement = $("#total-price");
        var allPrices= 10;
        for (var item in that.ingredients){
                    if(that.ingredients[item].on) {
                        allPrices += that.ingredients[item].price;

        }
    }
        totalPriceElement.text(`$${allPrices}`);
        allPrices=10;
    }
}

var pizza = new Pizza();
var pepperoni=$(".pep");
var mushrooms=$(".mushroom");
var greenPeppers=$(".green-pepper");
var whiteSauce=$(".sauce-white");
var glutenFreeCrust=$(".crust-gluten-free")

$(".btn-pepperonni").click(function(){
    pizza.clickBtn(pepperoni, "pepperoni", $("#pepperonni-list"),"hide");
});
$(".btn-mushrooms").click(function(){
    pizza.clickBtn(mushrooms,"mushrooms", $("#mushroom-list"),"hide");
});;
$(".btn-green-peppers").click(function(){
    pizza.clickBtn(greenPeppers,"greenPeppers", $("#green-pepper-list","hide"));
});;
$(".btn-sauce").click(function(){
    pizza.clickBtn(whiteSauce,"whiteSauce", $("#sauce-white-list","hide"));
});
$(".btn-crust").click(function(){
    pizza.clickBtn(glutenFreeCrust,"glutenFreeCrust", $("#gluten-free-list"),"crust-gluten-free");
});