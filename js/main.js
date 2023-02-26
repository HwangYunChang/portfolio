/* ===================================================================
 * Ceevee 2.0.0 - Main JS
 *
 * ------------------------------------------------------------------- */

(function(html) {

    "use strict";
    
    html.className = html.className.replace(/\bno-js\b/g, '') + ' js ';


   /* Preloader
    * -------------------------------------------------- */
    const ssPreloader = function() {

        const preloader = document.querySelector('#preloader');
        if (!preloader) return;

        window.addEventListener('load', function() {
            
            document.querySelector('body').classList.remove('ss-preload');
            document.querySelector('body').classList.add('ss-loaded');

            preloader.addEventListener('transitionend', function(e) {
                if (e.target.matches("#preloader")) {
                    this.style.display = 'none';
                }
            });

        });

        // force page scroll position to top at page refresh
        // window.addEventListener('beforeunload' , function () {
        //     window.scrollTo(0, 0);
        // });

    }; // end ssPreloader


   /* Parallax
    * -------------------------------------------------- */
    const ssParallax = function() { 

        const rellax = new Rellax('.rellax');

    }; // end ssParallax


   /* Move header menu
    * -------------------------------------------------- */
    const ssMoveHeader = function () {

        const hdr = document.querySelector('.s-header');
        const hero = document.querySelector('#hero');
        let triggerHeight;

        if (!(hdr && hero)) return;

        setTimeout(function(){
            triggerHeight = hero.offsetHeight - 170;
        }, 300);

        window.addEventListener('scroll', function () {

            let loc = window.scrollY;
           

            if (loc > triggerHeight) {
                hdr.classList.add('sticky');
            } else {
                hdr.classList.remove('sticky');
            }

            if (loc > triggerHeight + 20) {
                hdr.classList.add('offset');
            } else {
                hdr.classList.remove('offset');
            }

            if (loc > triggerHeight + 150) {
                hdr.classList.add('scrolling');
            } else {
                hdr.classList.remove('scrolling');
            }

        });

    }; // end ssMoveHeader


   /* Mobile Menu
    * ---------------------------------------------------- */ 
    const ssMobileMenu = function() {

        const toggleButton = document.querySelector('.s-header__menu-toggle');
        const headerNavWrap = document.querySelector('.s-header__nav-wrap');
        const siteBody = document.querySelector("body");

        if (!(toggleButton && headerNavWrap)) return;

        toggleButton.addEventListener('click', function(event){
            event.preventDefault();
            toggleButton.classList.toggle('is-clicked');
            siteBody.classList.toggle('menu-is-open');
        });

        headerNavWrap.querySelectorAll('.s-header__nav a').forEach(function(link) {
            link.addEventListener("click", function(evt) {

                // at 800px and below
                if (window.matchMedia('(max-width: 800px)').matches) {
                    toggleButton.classList.toggle('is-clicked');
                    siteBody.classList.toggle('menu-is-open');
                }
            });
        });

        window.addEventListener('resize', function() {

            // above 800px
            if (window.matchMedia('(min-width: 801px)').matches) {
                if (siteBody.classList.contains('menu-is-open')) siteBody.classList.remove('menu-is-open');
                if (toggleButton.classList.contains("is-clicked")) toggleButton.classList.remove("is-clicked");
            }
        });

    }; // end ssMobileMenu


   /* Highlight active menu link on pagescroll
    * ------------------------------------------------------ */
    const ssScrollSpy = function() {

        const sections = document.querySelectorAll(".target-section");

        // Add an event listener listening for scroll
        window.addEventListener("scroll", navHighlight);

        function navHighlight() {
        
            // Get current scroll position
            let scrollY = window.pageYOffset;
        
            // Loop through sections to get height(including padding and border), 
            // top and ID values for each
            sections.forEach(function(current) {
                const sectionHeight = current.offsetHeight;
                const sectionTop = current.offsetTop - 50;
                const sectionId = current.getAttribute("id");
            
               /* If our current scroll position enters the space where current section 
                * on screen is, add .current class to parent element(li) of the thecorresponding 
                * navigation link, else remove it. To know which link is active, we use 
                * sectionId variable we are getting while looping through sections as 
                * an selector
                */
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    document.querySelector(".s-header__nav a[href*=" + sectionId + "]").parentNode.classList.add("current");
                } else {
                    document.querySelector(".s-header__nav a[href*=" + sectionId + "]").parentNode.classList.remove("current");
                }
            });
        }

    }; // end ssScrollSpy

// var counter = ($counter, max) => {
//   let now = max;

//   const handle = setInterval(() => {
//     $counter.innerHTML = Math.ceil(max - now);
  
//     // 목표수치에 도달하면 정지
//     if (now < 1) {
//       clearInterval(handle);
//     }
    
//     // 증가되는 값이 계속하여 작아짐
//     const step = now / 10;
    
//     // 값을 적용시키면서 다음 차례에 영향을 끼침
//     now -= step;
//   }, 50);
// }

// let $win = $(window);
// $win.scroll (function(){
//     var resume = $('.s-resume').offset().top;
//     var before = $('.percent90::before')
//     if ($win.scrollTop() <= resume ){
//         before.css('animation','html 3s')
//     }
// })


//skill animation
$(window).scroll(function(){
    let windowTop = $(window).scrollTop()
    let aboutTop = $('#resume').offset().top

    if (windowTop >= aboutTop) {
        $('.progress').addClass('on')
    } else if (windowTop <= aboutTop) {
        $('.progress').removeClass('on')
    }
})



// // skill count

// $(function() {
//     var count0 = count1 = count2 = count3 = count4 = count5 = 0;
//     timeCounter();
//     function timeCounter() {

//         id0 = setInterval(count0Fn, 12.738853);
//         function count0Fn() {
//         count0++;
//         if (count0 > 90) {
//             clearInterval(id0);
//         } else {
//             $(".number").eq(0).text(count0);
//         }
//         }

//         id1 = setInterval(count1Fn, 10.13171226);
//         function count1Fn() {
//         count1++;
//         if (count1 > 85) {
//             clearInterval(id1);
//         } else {
//             $(".number").eq(1).text(count1);
//         }
//         }

//         id2 = setInterval(count2Fn, 28.57142857);
//         function count2Fn() {
//         count2++;
//         if (count2 > 80) {
//             clearInterval(id2);
//         } else {
//             $(".number").eq(2).text(count2);
//         }
//         }

//         id3 = setInterval(count3Fn, 28.57142857);
//         function count3Fn() {
//         count3++;
//         if (count3 > 80) {
//             clearInterval(id3);
//         } else {
//             $(".number").eq(3).text(count3);
//         }
//         }

//         id4 = setInterval(count4Fn, 28.57142857);
//         function count4Fn() {
//         count4++;
//         if (count4 > 80) {
//             clearInterval(id4);
//         } else {
//             $(".number").eq(4).text(count4);
//         }
//         }

//         id5 = setInterval(count5Fn, 28.57142857);
//         function count5Fn() {
//         count5++;
//         if (count5 > 80) {
//             clearInterval(id5);
//         } else {
//             $(".number").eq(5).text(count5);
//         }
//         }


//     }
// });


// 원하는 위치에서 스크롤 이벤트
$(window).bind('mousewheel', function(event) {
    if (event.originalEvent.wheelDelta <= 0) {
        if(!$('.progress').hasClass('percent90')){
            $('.progress').addClass('percent90');
        }
    } 
    });

   /* Swiper
    * ------------------------------------------------------ */ 
    const ssSwiper = function() {

        const mySwiper = new Swiper('.swiper-container', {

            slidesPerView: 1,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },          
            breakpoints: {
                // when window width is >= 401px
                401: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                // when window width is >= 801px
                801: {
                    slidesPerView: 2,
                    spaceBetween: 48
                }
            }
         });

    }; // end ssSwiper


   /* Lightbox
    * ------------------------------------------------------ */
    // const ssLightbox = function() {

    //     const folioLinks = document.querySelectorAll('.folio-item a');
    //     const modals = [];

    //     folioLinks.forEach(function(link) {
    //         let modalbox = link.getAttribute('href');
    //         let instance = basicLightbox.create(
    //             document.querySelector(modalbox),
    //             {
    //                 onShow: function(instance) {
    //                     //detect Escape key press
    //                     document.addEventListener("keydown", function(evt) {
    //                         evt = evt || window.event;
    //                         if(evt.keyCode === 27){
    //                         instance.close();
    //                         }
    //                     });
    //                 }
    //             }
    //         )
    //         modals.push(instance);
    //     });

    //     folioLinks.forEach(function(link, index) {
    //         link.addEventListener("click", function(e) {
    //             e.preventDefault();
    //             modals[index].show();
    //         });
    //     });

    // };  // end ssLightbox


   /* Alert boxes
    * ------------------------------------------------------ */
    const ssAlertBoxes = function() {

        const boxes = document.querySelectorAll('.alert-box');
  
        boxes.forEach(function(box) {

            box.addEventListener('click', function(e){
                if (e.target.matches(".alert-box__close")) {
                    e.stopPropagation();
                    e.target.parentElement.classList.add("hideit");

                    setTimeout(function() {
                        box.style.display = "none";
                    }, 500)
                }    
            });

        })

    }; // end ssAlertBoxes


   /* Smoothscroll
    * ------------------------------------------------------ */
    const ssSmoothScroll = function () {
        
        const triggers = document.querySelectorAll(".smoothscroll");

        triggers.forEach(function(trigger) {
            trigger.addEventListener("click", function() {
                const target = trigger.getAttribute("href");

                Jump(target, {
                    duration: 1200,
                });
            });
        });

    }; // end ssSmoothScroll


   /* back to top
    * ------------------------------------------------------ */
    const ssBackToTop = function() {

        const pxShow = 900;
        const goTopButton = document.querySelector(".ss-go-top");

        if (!goTopButton) return;

        // Show or hide the button
        if (window.scrollY >= pxShow) goTopButton.classList.add("link-is-visible");

        window.addEventListener('scroll', function() {
            if (window.scrollY >= pxShow) {
                if(!goTopButton.classList.contains('link-is-visible')) goTopButton.classList.add("link-is-visible")
            } else {
                goTopButton.classList.remove("link-is-visible")
            }
        });

    }; // end ssBackToTop



   /* initialize
    * ------------------------------------------------------ */
    (function ssInit() {

        ssPreloader();
        ssParallax();
        ssMoveHeader();
        ssMobileMenu();
        ssScrollSpy();
        ssSwiper();
        ssAlertBoxes();
        ssSmoothScroll();
        ssBackToTop();

    })();

    // 타이핑
    var typingBool = false; 
    var typingIdx=0; 
    var liIndex = 0;
    var liLength = $(".typing-txt>ul>li").length;

    // 타이핑될 텍스트를 가져온다 
    var typingTxt = $(".typing-txt>ul>li").eq(liIndex).text(); 
    typingTxt=typingTxt.split(""); // 한글자씩 자른다. 
    if(typingBool==false){ // 타이핑이 진행되지 않았다면 
        typingBool=true; 
        var tyInt = setInterval(typing,150); // 반복동작 
    } 
        
    function typing(){ 
    $(".typing ul li").removeClass("on");
    $(".typing ul li").eq(liIndex).addClass("on");
    if(typingIdx<typingTxt.length){ // 타이핑될 텍스트 길이만큼 반복 
        $(".typing ul li").eq(liIndex).append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
        typingIdx++; 
    } else{
        if(liIndex<liLength-1){
        //다음문장으로  가기위해 인덱스를 1증가
        liIndex++; 
        //다음문장을 타이핑하기위한 셋팅
            typingIdx=0;
            typingBool = false; 
            typingTxt = $(".typing-txt>ul>li").eq(liIndex).text(); 
        
        //다음문장 타이핑전 1초 쉰다
            clearInterval(tyInt);
            //타이핑종료
        
            setTimeout(function(){
            //1초후에 다시 타이핑 반복 시작
            tyInt = setInterval(typing,100);
            },1000);
            } else if(liIndex==liLength-1){
            
            //마지막 문장까지 써지면 반복종료
            clearInterval(tyInt);
            }
        } 
    }  
})(document.documentElement);