function toggleCartt(){
    document.querySelector('.sidebar').classList.toggle('open-cart');
}
// cart increase 
$(document).ready(function(){
    var n = 0;
    var adultCounter = ".counter-adult";
    var childCounter = ".counter-child";

    $(adultCounter).val(n);
    $(childCounter).val(n);

    $(".plus-adult").on("click", function(){
            $(adultCounter).val(++n);
    })
    $(".minus-adult").on("click", function(){
            if (n > 0) {
                    $(adultCounter).val(--n);
            }
    })



    $(".plus-child").on("click", function(){
            $(childCounter).val(++n);
    })
    $(".minus-child").on("click", function(){
            if (n > 0) {
                    $(childCounter).val(--n);
            }
    })

    if ($(childCounter).val(n) > 0) {$(".minus-child").removeClass("de-active-counter")}
    
});
function increment() {
    document.getElementById('demoInput').stepUp();
  }
  function decrement() {
    document.getElementById('demoInput').stepDown();
  }