"use strict";$(document).ready(function(){$(".button[filter]").click(function(){"off"==$(this).attr("val")&&($(".button[filter]").attr("val","off").removeClass("focused"),$(this).attr("val","on").addClass("focused"),$(".filter > div").hide(300),$(".filter > div[filter="+$(this).attr("filter")+"]").show(300),"all"==$(this).attr("filter")&&($(".button[filter]").attr("val","off").removeClass("focused"),$(this).attr("val","on").addClass("focused"),$(".filter > div").show(300)))}),$(".multiple-items").slick({infinite:!0,slidesToShow:3,slidesToScroll:3,arrows:!1,dots:!0,dotsClass:"dots-style",responsive:[{breakpoint:1025,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),$('ul.menu a[href^="#"').click(function(){var t=$(this).attr("href");return $("html, body").animate({scrollTop:$(t).offset().top},500),$('ul.menu a[href^="#"').css({color:"#212121"}),$(this).css({color:"#004bee"}),!1}),$(".menu-icon").click(function(){$("nav").slideToggle(500),$("ul.menu").css({display:"flex","flex-direction":"column"}),'<i class="fas fa-bars"></i>'==$(".menu-icon").html()?$(this).html('<i class="fas fa-times"></i>'):$(this).html('<i class="fas fa-bars"></i>')}),$(window).scroll(function(){0!=$(this).scrollTop()?$("#toTop").fadeIn():$("#toTop").fadeOut()}),$("#toTop").click(function(){$("body,html").animate({scrollTop:0},800)})});for(var btn=document.querySelectorAll("button"),i=0;i<btn.length;i++)btn[i].style.outline="none";