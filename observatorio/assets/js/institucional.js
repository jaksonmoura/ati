$(document).ready(function(){
    let isDesktop = window.matchMedia("only screen and (min-width: 800px)").matches;

    $(".search-btn").on("click", function(){
        $(".search-box").toggleClass("show-search-box");
        $("input#search-input").focus();
    });

    $("header.header-gov-inst .menu-btn").on('click', function(e){
        e.preventDefault();
        $(this).toggleClass("show-menu");
        var menu = $("header.header-gov-inst .menu");
        $(menu).toggleClass("show-menu");
        if (!$(menu).hasClass("show-menu")){
            $("li.has-children").removeClass("show-submenu");
        }
        $(".menu").animate({
            scrollTop: 0
        }, 100);
    });

    $(document).click(function(e) {
        var menu = $("header.header-gov-inst .menu");
        var menubtn = $("header.header-gov-inst .menu-btn");
        if (!menu.is(e.target) 
            && !menubtn.is(e.target)
            && menubtn.has(e.target).length === 0
            && menu.has(e.target).length === 0
            && $(menu).hasClass("show-menu"))
        {
            e.preventDefault();
            $("header.header-gov-inst .menu-btn").removeClass("show-menu");
            $(menu).removeClass("show-menu");
            $("li.has-children").removeClass("show-submenu");
        }
    });


    $("header.header-gov-inst .menu-content .main-menu li.has-children").on({
        click: function(e){
            // if (!isDesktop) {
                e.preventDefault();
                $("li.has-children").not($(this)).removeClass("show-submenu");
                $(this).toggleClass("show-submenu");

                gotoSubitem($('.menu'), $(this));
                
            // }
        }
    });



    // $("header.header-gov-inst .menu-content .main-menu li.has-children").on({
    // 	mouseenter: function(){
    // 		if (isDesktop) {
    // 			$(this).addClass("show-submenu");
    // 			gotoSubitem($('.children-content'), $(this).find("h5.submenu-title").first(), 0);
    // 		}
    // 	},
    // 	mouseleave: function(){
    // 		if (isDesktop) {
    // 			$(this).removeClass("show-submenu");
    // 		}
    // 	}
    // });

    // $("header.header-gov-inst .children-content").on({
    // 	mouseenter: function(){
    // 		if (isDesktop) {
    // 			$(this).parent().addClass("show-submenu");
    // 		}
    // 	},
    // 	mouseleave: function(){
    // 		if (isDesktop) {
    // 			$(this).parent().removeClass("show-submenu");
    // 		}
    // 	}
    // });

    function gotoSubitem(box, subitem, speedanimation){
        if (speedanimation === undefined){
            speedanimation = 300
        }
        var $container = $(box), $scrollTo = $(subitem);
        $container.animate({
            scrollTop: $scrollTo.offset().top - $container.offset().top + $container.scrollTop()
        }, speedanimation)
    }

});