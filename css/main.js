// this for a manu
var myFullpage = new fullpage('#fullpage', {
    verticalCentered: false,
    anchors: ['home','community','shortstays','hospitality','culture','investment','maps']
});
$(document).on('click', '#home', function(){
    fullpage_api.moveTo('home', 1);
});
$(document).on('click', '#community', function(){
    fullpage_api.moveTo('community', 1);
});

$(document).on('click', '#shortstays', function(){
    fullpage_api.moveTo('shortstays', 1);
});

$(document).on('click', '#hospitality', function(){
    fullpage_api.moveTo('hospitality', 1);
});

$(document).on('click', '#culture', function(){
    fullpage_api.moveTo('culture', 1);
});

$(document).on('click', '#investment', function(){
    fullpage_api.moveTo('investment', 1);
});

$(document).on('click', '#maps', function(){
    fullpage_api.moveTo('maps', 1);
});
// End
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

// This is for Calendar 
$('#rangestart').calendar({
    type: 'date',
    endCalendar: $('#rangeend')
});
$('#rangeend').calendar({
    type: 'date',
    startCalendar: $('#rangestart')
});

function btnClk() {
    $('#cldershw').addClass('addclass');
}

function btnCls() {
    $('#cldershw').removeClass('addclass');
}
$(window).load(function() {
    $('#loading').hide();
});
//end
// This is for slick slider
$(document).on('ready', function() {
    $(".regular").slick({
        dots: true,
        infinite: false,
        slidesToShow: 2.5,
        slidesToScroll: 2,
        arrows: false
    });
});
// When the user scrolls down 20px from the top of the document, show the button
var mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
(function($) {
    $.fn.htmlNumberSpinner = function () {

        /* creating the counter buttons */
        $(this).append("<div class='btn decrementer'>-</div> <input class='number-input' type='number'/> <div class='btn incrementer'>+</div>");


        /* default value and variables and jquery elements*/
        var defaultValue = 0, inputValue;
        var numberInput$ = $(this).find('.number-input');
        var incrementerEl$ = $(this).find('.incrementer');
        var decrementerEl$ = $(this).find('.decrementer');

        /* hide the default number input spinner */
        $(this).append("<style>" +
            "input[type=number]::-webkit-inner-spin-button, \n" +
            "input[type=number]::-webkit-outer-spin-button { \n" +
            "    -webkit-appearance: none;\n" +
            "    -moz-appearance: none;\n" +
            "    appearance: none;\n" +
            "    margin: 0; \n" +
            "}</style>");

        /* styling the counter buttons */
        $(this).find('.btn').css({"display":"inline-block", "width":"38px", "height":"25px", "font-size":"18px", "text-align":"center", "vertical-align":"middle", "line-height":"16px", "cursor":"pointer", "user-select":"none"});
        incrementerEl$.css({"background-color":"#2a2a2a", "color":"white", "border": "1px solid #2a2a2a"});
        decrementerEl$.css({"background-color":"#2a2a2a", "color":"white", "line-height":"12px", "font-size":"18px", "border": "1px solid #2a2a2a"});
        numberInput$.css({
            "background-color":"white",
            "border": "1px solid",
            "color":"black",
            "text-align":"center",
            "width":"38px",
            "height":"25px",
            "font-size":"18px",
            "line-height":"12px",
            "padding":"0",
            "outline":"none",
            "border-left-color": "#2a2a2a",
            "border-right-color": "#2a2a2a",
            "border-top-color": "#2a2a2a",
            "border-bottom-color": "#2a2a2a"
        });


        /* props - dynamic attributes */
        var minAttributeValue = $(this).attr("min");
        var maxAttributeValue = $(this).attr("max");
        var stepAttributeValue = $(this).attr("step");

        if(minAttributeValue){
            numberInput$.attr("min",+minAttributeValue);
        }

        if(maxAttributeValue){
            numberInput$.attr("max", +maxAttributeValue);
        }

        if(stepAttributeValue){
            numberInput$.attr("step", +stepAttributeValue);
        }


        /* set the default value into the input */
        inputValue = minAttributeValue ? minAttributeValue: defaultValue;
        numberInput$.val(inputValue);

        /* incrementer functionality */
        incrementerEl$.click(function () {
            var parentEl = $(this).parent();
            inputValue = parentEl.find('.number-input').val();
            if(maxAttributeValue){
                if(maxAttributeValue==inputValue){
                    return;
                }
            }
            if(stepAttributeValue){
                inputValue = parentEl.find('.number-input').val();
                parentEl.find('.number-input').val((+inputValue)+(+stepAttributeValue));
                return;
            }
            inputValue = parentEl.find('.number-input').val();
            parentEl.find('.number-input').val(++inputValue);
        });

        /* decrementer functionality */
        decrementerEl$.click(function () {
            var parentEl = $(this).parent();
            inputValue = parentEl.find('.number-input').val();
            if(minAttributeValue){
                if(minAttributeValue==inputValue){
                    return;
                }
            }
            if(stepAttributeValue){
                inputValue = parentEl.find('.number-input').val();
                parentEl.find('.number-input').val((+inputValue)-(+stepAttributeValue));
                return;
            }
            inputValue = parentEl.find('.number-input').val();
            parentEl.find('.number-input').val(--inputValue);
        })

        numberInput$.change(function () {
            if(!maxAttributeValue || !minAttributeValue) return;
            var currentValue = $(this).val();
            if((+currentValue)>(+maxAttributeValue)){
                $(this).val(maxAttributeValue)
                return;
            }
            if((+currentValue)<(+minAttributeValue)){
                $(this).val(minAttributeValue)
                return;
            }
        })

    };

    $.fn.getSpinnerValue = function () {
        return $(this).find('.number-input').val();
    }

}(jQuery));


            /*Start Number Input Spinner Without Attributes*/
    
            $("#counter-one").htmlNumberSpinner();
            // $('.counter1-container').append("<p class='c1-p'>The Spinner Value is : <span class='c1-span'>-</span></p>");

            function onC1BtnClick() {
                var value = $("#counter-one").getSpinnerValue();
                $('.c1-p .c1-span').text(value);
            }
            /* End Number Input Spinner Without Attributes*/




            $(document).ready(function() {
                $('#show-count').click(function() {
                        $('.container-guest').slideToggle("fast");
                });
            });

            $("#counter-two").htmlNumberSpinner();
            function onC2BtnClick() {
                var value = $("#counter-two").getSpinnerValue();
                $('.c2-p .c2-span').text(value);
            }
            $("#counter-three").htmlNumberSpinner();
            function onC2BtnClick() {
                var value = $("#counter-three").getSpinnerValue();
                $('.c2-p .c2-span').text(value);
            }
             //search-box popup
             $(document).ready(function(){
                $(".input").focus(function() {
                });
                $(".input").focusout(function() {
                $(".input").val("");
                });
    
                $(".search-box").click(function() {
                $(".input").toggleClass("active");
                });
            })