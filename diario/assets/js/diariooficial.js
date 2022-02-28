$(document).ready(function(){
    let isDesktop = window.matchMedia("only screen and (min-width: 800px)").matches;
    let searchBox = $("header.header-gov-inst .search-box");
    let searchBoxElements = $(".search-tabs input, form#formportexto input, form#formportexto select, form#formportexto button");
    let searchBtn = $("header.header-gov-inst .search-btn");
    console.log(searchBoxElements);

    $(searchBtn).on("click", function(){
        $(searchBox).toggleClass("show-search-box");
        $(this).prop("aria-expanded", "true");
        setTimeout(() => {
            $(".search-box input[type=radio]:checked").focus();
        }, 300);
        if  ($(searchBox).hasClass("show-search-box")){
            $("body").css("overflow", "hidden");
        } else {
            $("body").css("overflow", "unset");
        }
        $(searchBox).on("keydown", menuKeyboardHandler);
    });

    function menuKeyboardHandler(e) {
        let fElement = searchBoxElements[0];
        let lElement = searchBoxElements[searchBoxElements.length - 1];
        if (e.keyCode === 9){
            if(e.shiftKey){
                console.log("SHIFT+TAB");
                if (document.activeElement === fElement){
                    console.log("FIRST");
                    e.preventDefault();
                    $(lElement).focus();
                }
            }
            else{
                console.log("TAB");
                if (document.activeElement === lElement){
                    console.log("LAST");
                    e.preventDefault();
                    $(fElement).focus();
                }
            }
        }
        // ESC
        if (e.keyCode == 27) {
            $(searchBox).prop("aria-expanded", "false");
            $(searchBox).removeClass("show-search-box");
            $("body").css("overflow", "unset");
            searchBtn.focus();
        }
    }

    $("header.header-gov-inst .menu-btn").on('click', function(e){
        e.preventDefault();
        $(this).toggleClass("show-menu");
        let menu = $("header.header-gov-inst .menu");
        $(menu).toggleClass("show-menu");
        if (!$(menu).hasClass("show-menu")){
            $("li.has-children").removeClass("show-submenu");
        }
        $(".menu").animate({
            scrollTop: 0
        }, 100);
        $(".main-menu").focus();
    });

    $(document).click(function(e) {
        let menu = $("header.header-gov-inst .menu");
        let menubtn = $("header.header-gov-inst .menu-btn");
        let searchBox = $("header.header-gov-inst .search-box");
        let searchOverlay = $("header.header-gov-inst .search-box-overlay");
        
        if (!searchBox.is(e.target) 
            && !searchBtn.is(e.target)
            && searchBtn.has(e.target).length === 0
            && searchBox.has(e.target).length === 0
            && $(searchBox).hasClass("show-search-box")
            || searchOverlay.is(e.target) )
        {
            e.preventDefault();
            $(searchBox).removeClass("show-search-box");
            $("body").css("overflow", "unset");
        }

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


    $("header.header-gov-inst .menu-content .main-menu li.has-children .submenu-header .submenu-accordion-switch").on({
        click: function(e){
            // if (!isDesktop) {
                e.preventDefault();
                $("li.has-children").not($(this).parent().parent()).removeClass("show-submenu");
                $(this).parent().parent().toggleClass("show-submenu");

                gotoSubitem($('.menu'), $(this));
                
            // }
        }
    });

    $(".search-box .search-tabs input[type=radio]").on("click", function () {
        var doetab = $(this).attr("data-tab");
        $(".search-box .search-tabs label").removeClass("checked");
        $(this).closest("label").addClass("checked");
        $(".search-box form").hide();
        $("form#" + doetab).fadeIn(300);
        searchBoxElements = $(".search-tabs input:checked, form#" + doetab + " input, form#" + doetab + " select, form#" + doetab + " button");
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
        let $container = $(box), $scrollTo = $(subitem);
        $container.animate({
            scrollTop: $scrollTo.offset().top - $container.offset().top + $container.scrollTop()
        }, speedanimation)
    }

});