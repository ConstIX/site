function ibg(){$.each($(".ibg"),(function(t,i){$(this).find("img").length>0&&$(this).css("background-image",'url("'+$(this).find("img").attr("src")+'")')}))}$(".icon-menu").click((function(t){$(this).toggleClass("active"),$(".menu__body").toggleClass("active"),$("body").toggleClass("lock")})),ibg(),$(".team__body").slick({dots:!0,infinite:!1,autoplaySpeed:3e3,slidesToShow:3,adaptiveHeight:!0,nextArrow:'<button type="button" class="slick-next"></button>',prevArrow:'<button type="button" class="slick-prev"></button>',responsive:[{breakpoint:992.98,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:767.98,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(document).ready((function(){$(".filter__item").click((function(){var t=$(this).attr("data-filter"),i=$(".portfolio__column");return"all"==t?$(i).show("500"):($(i).not("."+t).hide("500"),$(i).filter("."+t).show("500")),$(".filter__item").removeClass("active"),$(this).addClass("active"),!1}))}));