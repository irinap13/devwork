window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.oRequestAnimationFrame;

var imagesNo = 0,
    images = "",
    current_index = 0;


$(window).load(function () {
    $( '.bxslider' ).bxSlider();
});

$(document).ready(function () {
    FastClick.attach(document.body);

    var mouseX = 0,
        mouseY = 0,
        $window = $(window),
        $background = $(".page_bg"),
        $o_background = $(".page_bgb"),
        current_index = 0,
        imagesNo = $("#p_images").children('li:not(.bx-clone)').length,
        images = $(".p_item");

    $( ".nav span" ).on( "click", function () {
        $( this ).addClass( 'animated bounceIn' ).on( 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () { $( this ).removeClass( 'animated bounceIn' ); } );
    });

    $( "#panel_action" ).on( "click", function () {
        $( ".nav" ).toggleClass( "open" );
        if ( $( ".nav" ).hasClass( "open" ) ) {
            $( "#panel_action" ).html( '<img src="images/arr_left_m.png" alt="Close menu"/> <span>Close</span>' );
        }
        else {
            $( "#panel_action" ).html( 'Menu <img src="images/arr_right_m.png" alt="Open menu"/>' );
        }
    });

    $( ".nav" ).each( function () {
        $( this ).children().each( function () {
            $( this ).on( "click", function () {
                moveTo( ".main", $( this ).data( "index" ) );
                $( ".nav").removeClass( "open" );
                $( "#panel_action" ).html( 'Menu <img src="images/arr_right_m.png" alt="Open menu"/>' );
            });
        });
    });

    $( '.page_container' ).on( "touchstart", function (e) {
        if ( $( e.target ).is( $( '.page_container' ).find( '*' ) ) ) {
            e.stopPropagation();
        }
    });

    $( images ).mouseenter( function () {
        $( this ).addClass( 'animated pulse' );
    }).mouseleave( function () {
        $( this ).removeClass( 'animated pulse' );
    });

    $( images ).on( "click", function () {
        update_project( $( this ).data( "pid" ) );
    });
    
    $( "#proj_prev" ).on( "click", function () {
        if ( current_index == 0 ) {
            update_project( imagesNo - 1 );
            current_index = imagesNo - 1;
        }
        else {
            update_project( current_index - 1 );
            current_index--;
        }
    });

    $( "#proj_next" ).on( "click", function () {
        if ( imagesNo == current_index + 1 ) {
            update_project( 0 );
            current_index = 0;
        }
        else {
            update_project( current_index + 1 );
            current_index++;
        }
    });

    $( "#proj_close" ).on( "click", function () {
        $( "#project_view" ).animate({
            opacity : 0,
            width : "1px",
            height : "1px",
            left : "50%",
            top : "50%"
        }, 300);
        setTimeout( function () {$("#project_view").css("display", "none");}, 300 );
    });
}); 

function update_project(i) {
    current_index = i;
    $( "#project_view" ).css( "display" , "block" ).animate({
        opacity : 1,
        width : "100%",
        height : "100%",
        left : 0,
        top : 0
    }, 300);
    var current_set = $("li[data-set='" + current_index + "']");
    $( "#proj_title" ).html( current_set.find("span.proj_title").html() );
    $( "#proj_desc" ).html( current_set.find("span.proj_desc").html() );
    $( ".set" ).css( 'display' , 'none' );
    var set = $( ".set[data-setid='" + current_index + "']" );
    $( set ).css( 'display' , 'block' );

}; //END update_project function

/*$window.mousemove(function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

var update = function () {
    var finalblur,
        fbstr,
        transformval,
        blurX = mouseX / $window.width() * 100,
        blurY = mouseY / $window.height() * 100;
    
    blurX = (blurX > 50) ? 100 - blurX : blurX;
    blurX = (blurY > 50) ? 100 - blurY : blurY;

    blurX = (blurX / 10).toFixed(3);
    blurY = (blurY / 10).toFixed(3);

    finalblur = (blurX < blurY) ? blurX : blurY;
    fbstr = (finalblur / 2).toString();
    transformval = fbstr.slice(0, 1) + fbstr.slice(2, 4);
    
    $o_background.css({
       "opacity":(finalblur/5).toFixed(3),
       "transform": "scale(1." + transformval + ", 1." + transformval + ")"
    });
    $background.css({
       "transform": "scale(1." + transformval + ", 1." + transformval + ")"
    });

    requestAnimationFrame(update);
}; //END update function*/
