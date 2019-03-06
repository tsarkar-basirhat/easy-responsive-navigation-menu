(function ( $ ) {

    $.fn.easyResponsiveNav = function( options ) {

        var settings = $.extend({
            divSelector: "dropActive",
            showArrowOnDesktop:true,
            navBreakPoint:991
        }, options );

        return this.each( function() {

// Add class 'dropActive' to selected navigation div

          if ( settings.divSelector ) {
            $(this).addClass(settings.divSelector);

            $(".dropActive ul li a").each(function(){
                if($(this).parent().find('ul').length > 0){
                 $(this).parent().prepend('<span class="subDrop">▼</span>');
                 $(this).parent().addClass('hasDropdown');
                }else{
                 //console.log('Nope, no ul');
                }
            });

            $('.dropActive').wrap("<div class='dropWrap'></div>");
          }

// Add class 'dropActive' to selected navigation div


// When showArrowOnDesktop == false -- 1.subDrop(display:none), 2.remove class 'hasDropdown' from li

          if( settings.showArrowOnDesktop == false ){
            $('.subDrop').css('display' , 'none');
            $(".dropActive>ul>li>a").each(function(){
                if($(this).parent().find('ul').length > 0){
                 $(this).parent().removeClass('hasDropdown');
                }else{
                 //console.log('Nope, no ul');
                }
            });
          }

// When showArrowOnDesktop == false -- 1.subDrop(display:none), 2.remove class 'hasDropdown' from li


          $('.subDrop').click(function(){
            $(this).parent().children("ul").slideToggle();
          });

          $('.dropWrap').prepend('<span class="dropToggle"></span>');


// Responsive CSS media query bottom of <head> tag

          var content = ({
            opt1: '.dropToggle' + '{ display: block;}'
          });

          var content_string =
          '@media' + '(max-width:' + settings.navBreakPoint + 'px' + ') {' +
             content.opt1
          '}';

          $('head').append('<style>' + content_string + '</style>');

// Responsive CSS media query bottom of <head> tag


// Click to expand navigation on responsive

        $('.dropToggle').click(function(){
          $('.dropActive').toggleClass('open');
        });

// Click to expand navigation on responsive


        });

    };



}( jQuery ));
