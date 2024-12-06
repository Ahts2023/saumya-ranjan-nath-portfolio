if (window.matchMedia("(max-width: 991px)").matches) {
    $('.desk-menu .social').insertBefore('.mobile_cta .link');
    $('.main_menu').insertAfter('.mobile_cta .link');
    // $('.footlink').insertBefore('.phone-link');
   
   
   }
   
   /* Navigation */
   $(document).ready(function(e) {
   
   
   
       $(".menu ul").each(function() {
           var me = $(this);
           var myparent = me.parent("li");
           me.prepend("<li><button class='menu-back'>Back</button></li>");
           myparent.append("<span class='toggle-submenu'></span>");
           myparent.addClass("has-sub");
           me.addClass("sub-menu");
       });
       $(".navigation-open").click(function() {
           $("body").addClass("menu-action");
           $(".sub-menu").removeClass("show");
       });
       $(".navigation-close").click(function() {
           $("body").removeClass("menu-action");
           $(".sub-menu").removeClass("show");
       });
       $(".toggle-submenu").click(function() {
           var me = $(this);
           me.prev("ul").addClass("show");
       });
       $(".menu-back").click(function() {
           var me = $(this);
           me.parents().eq(1).removeClass("show");
       });
       $(".has-sub").click(function() {
           var me = $(this);
           me.addClass("hovered");
       });
       // Sidebar
       $('#dismiss, .overlay').on('click', function () {
               // hide sidebar
               $('#sidebar').removeClass('active');
               // hide overlay
               $('.overlay').removeClass('active');
       });
   
       $('#sidebarCollapse').on('click', function () {
               // open sidebar
               $('#sidebar').addClass('active');
               // fade in the overlay
               $('.overlay').addClass('active');
               $('.collapse.in').toggleClass('in');
               $('a[aria-expanded=true]').attr('aria-expanded', 'false');
       });
       
       
   
   
   
   });
   $(window).on('click touchend', function(e) {
       if (!$(e.target).hasClass("navigation-open") && !$(e.target).hasClass("navigation-close") && !$(e.target).hasClass("navigation") && $(e.target).parents(".navigation").length === 0) {
           $("body").removeClass("menu-action");
           $(".sub-menu").removeClass("show");
       }
       if (!$(e.target).hasClass("hovered") && $(e.target).parents(".hovered").length === 0) {
           $(".has-sub").removeClass("hovered");
       }
   });
   
   
   // main_slider
   
   (function () {
     var carousels = function () {
       $("#main_slider").owlCarousel({
         loop: true,
         center: true,
         dots:true,
         margin: 0,
         nav: false,
         items:1,
         autoplay:true,
         autoplayTimeout:8000,
         autoplayHoverPause:true,
          animateIn: 'fadeIn', 
         animateOut: 'fadeOut'
       });
     };
     (function ($) {
       carousels();
     })();
   })();
   
   
   
   
   // for search
   
   function openSearch() {
     document.getElementById("searchOverlay").style.display = "block";
   }
   function closeSearch() {
     document.getElementById("searchOverlay").style.display = "none";
   }
   
   //  
   
   
   $(document).ready(function() {
     
     $(".sub-menu li a[href='#book']").click(function() {
         $("html, body").animate({ 
             scrollTop: $("#book").offset().top
         }, 1000 );
         return false;
     });
     $(".sub-menu li a[href='#book']").click(function() {
         $("html, body").animate({ 
             scrollTop: $("#book").offset().top
         }, 1000 );
         return false;
     });
     $(".sub-menu li a[href='#opini']").click(function() {
         $("html, body").animate({ 
             scrollTop: $("#opini").offset().top
         }, 1000 );
         return false;
     });
     $(".sub-menu li a[href='#teach']").click(function() {
         $("html, body").animate({ 
             scrollTop: $("#teach").offset().top
         }, 1000 );
         return false;
     });
     $(".sub-menu li a[href='#book1']").click(function() {
         $("html, body").animate({ 
             scrollTop: $("#book1").offset().top
         }, 1000 );
         return false;
     });
     $(".sub-menu li a[href='#edit']").click(function() {
         $("html, body").animate({ 
             scrollTop: $("#edit").offset().top
         }, 1000 );
         return false;
     });
     $(".sub-menu li a[href='#papers']").click(function() {
         $("html, body").animate({ 
             scrollTop: $("#papers").offset().top
         }, 1000 );
         return false;
     });
   
   
     $(".navbar-nav .sub-menu").each(function () {
       $(this).before('<span class="icon-submenu"></span>');
     });
     $(document).on('click', '.icon-submenu', function(){
         $(this).next('.sub-menu').toggleClass('active');
         $(this).toggleClass('active');
     });
   });
   
   
   // 
   
   $(document).ready(function() {
      $(".heroimg").each(function() {
           var atr = $(this).attr("src"); 
           if(atr == "") {
               $(this).addClass("hiddenimg");
           } else {
               $(this).removeClass("hiddenimg");
           }
       });
   });









   function toggleAchievementsMenu(event) {
    // Prevent the default link behavior
    event.preventDefault();

    // Find the submenu associated with the clicked item
    const parentItem = event.target.closest('.menu-item');
    const submenu = parentItem.querySelector('.sub-menu');

    // Toggle the submenu's visibility
    if (submenu) {
        submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
    }
}







document.addEventListener("DOMContentLoaded", function () {
    // Select all menu items with submenus
    const menuItems = document.querySelectorAll(".navigation ul.menu li.has-sub > a");

    menuItems.forEach(item => {
        // Add click event listener to each menu item
        item.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default link behavior

            // Find the submenu related to this menu item
            const submenu = this.nextElementSibling;

            if (submenu) {
                // Toggle the 'show' class to display/hide the submenu
                submenu.classList.toggle("show");
            }
        });
    });
});
