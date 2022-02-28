document.addEventListener('DOMContentLoaded', function () {
    document.querySelector("#skip-to-main").addEventListener("click", function (e) {
        e.preventDefault();
        var main = this.getAttribute("href");
        var target = document.querySelector(main);
        target.setAttribute('tabindex', "-1");
        target.focus();
    });
    
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems);


    let menuTriggers = document.querySelectorAll(".dropdown-menu-trigger");
    let menuList;
    let menu;

    menuTriggers.forEach(function (menubtn) {
        menubtn.addEventListener("click", function (e) {
            e.preventDefault();
            e.stopPropagation();
            let expanded = (this.getAttribute("aria-expanded") === "true");
            this.setAttribute("aria-expanded", !expanded);
            this.closest("li").querySelector("ul").classList.toggle("open");
            this.classList.toggle("open");
            if(this.getAttribute("aria-expanded") === "true"){
                menuList = this.closest("li").querySelectorAll("ul.open li a");
                menu = document.querySelector("ul.open");
                menu.addEventListener("keydown", menuKeyboardHandler);
            }
        });
    });
    
    document.addEventListener(
        "click",
        function (event) {
            if (
                event.target.matches(".dropdown-menu-trigger.open") ||
                !event.target.closest("ul.open")
            ) {
                closeDropdown();
            }
        },
        false
    );
    
    function closeDropdown() {
        menuTriggers.forEach(function(trigger) {
            trigger.classList.remove("open");
            menu.classList.remove("open");
            trigger.setAttribute("aria-expanded", "false");
        });
    }

    function menuKeyboardHandler(e) {
        const firstItem = menuList[0];
        const lastItem = menuList[menuList.length - 1];
        
        if (e.keyCode == 27) {
            let menuBtn = document.querySelector(".dropdown-menu-trigger.open");
            menuBtn.setAttribute("aria-expanded", "false");
            menuBtn.classList.remove("open");
            menu.classList.remove("open");
            menuBtn.focus();
        }
    }
});