 //header
 $(".split").each(function () {
    let text = $(this).text();
    let split = text.split("").join("</span><span aria-hidden='true'>");
    split = "<span aria-hidden='true'>" + split + "</span>";
    $(this).html(split).attr("aria-label", text);
  });
  
  //sec1
  setTimeout(() => {
  
    gsap.to(".sec1-tit strong span", { opacity: 1, stagger: 0.03, y: 0, rotate: 0, duration: 1.3 })
    gsap.to(".sec1-img", {opacity: 1, y:0, duration: 0.3, delay: 1.6})
    gsap.to(".sec1-und strong span", { opacity: 1, y: 0, stagger: 0.03, duration: 0.3, delay: 2.0 })
    gsap.to("#header", { top: 0, duration: 0.3, delay: 2.5 })
  }, 2500);
  
  //sec2

  $(window).scroll(function () {   
    let scroll = $(window).scrollTop() 
    // let offset = scroll - $('#script').offset().top;

    const sTop = $(window).scrollTop() + $(window).height();
    const winH =$(window).height()/2; 
    const win2H =$(window).height()/1.5; 

    // if(scroll >= $(".sec2").offset().top - $(window).height()*2){
        if( sTop-winH >  $(".sec2").offset().top){
        //첫번째 줄
        gsap.to(".flex-box .t-flex1 .img", { opacity: 1, stagger: 0.03, scale: 1.9, duration: 1.3 })
        gsap.to(".flex-box .t-flex1 .text strong span", { opacity: 1, stagger: 0.03, duration: 0.3, delay: 0.5 })
        gsap.to(".flex-box .t-flex1 .textIta strong span", { opacity: 1, stagger: 0.03, duration: 0.3, delay: 0.7 })
        gsap.to(".flex-box .t-flex1 .img1-1", { opacity: 1, stagger: 1, rotate: 360, delay: 0.7 })
        //두번째 줄
        gsap.to(".flex-box .t-flex2 .img1-1 ", { opacity: 1, scale: 1, duration: 0.3, delay: 1 })
        gsap.to(".flex-box .t-flex2 .text strong span", { opacity: 1, stagger: 0.03, delay: 1.4 })
        gsap.to(".flex-box .t-flex2 .img", { opacity: 1, stagger: 0.03, delay: 1.7 })
        gsap.to(".flex-box .t-flex2 .text.text2 strong span", { opacity: 1, stagger: 1, delay: 1.9 })
        //세번째 줄
        gsap.to(".flex-box .t-flex3 .img", { opacity: 1, scale: 1, duration: 0.3, delay: 2.1 })
        gsap.to(".flex-box .t-flex3 .text1 strong span", { opacity: 1, stagger: 0.03, delay: 2.4 })
        gsap.to(".flex-box .t-flex3 .text strong span", { opacity: 1, stagger: 0.03, delay: 2.6 })
        //네번째 줄
        gsap.to(".flex-box .t-flex4 .text strong span", { opacity: 1, scale: 1, duration: 0.3, delay: 3.0 })
        gsap.to(".flex-box .t-flex4 .img", { opacity: 1, stagger: 0.03, delay: 3.4 })
        gsap.to(".flex-box .t-flex4 .img1-1", { opacity: 1, stagger: 0.03, delay: 3.7 })
        gsap.to(".flex-box .t-flex4 .text2 strong span", { opacity: 1, stagger: 0.03, delay: 4.2 })
        //다섯번째 줄
        gsap.to(".flex-box .t-flex5 .text strong span", { opacity: 1, scale: 1, duration: 0.3, delay: 3.9 })
        gsap.to(".flex-box .t-flex5 .img", { opacity: 1, stagger: 0.03, delay: 4.2 })
        gsap.to(".flex-box .t-flex5 .text1 strong span", { opacity: 1, stagger: 0.03, delay: 4.6 })
        gsap.to(".flex-box .t-flex5 .img1-1", { opacity: 1, stagger: 0.03, delay: 5.1 })
        //여섯번째 줄
        gsap.to(".flex-box .t-flex6 .text strong span", { opacity: 1, scale: 1, duration: 0.3, delay: 5.1 })
        gsap.to(".flex-box .t-flex6 .img1-1", { opacity: 1, stagger: 0.03, delay: 5.9 })
        gsap.to(".flex-box .t-flex6 .text1 strong span", { opacity: 1, stagger: 0.03, delay: 5.7 })
        gsap.to(".flex-box .t-flex6 .img1-2", { opacity: 1, stagger: 0.03, delay: 6.1 })
        gsap.to(".flex-box .t-flex6 .img1-3", { opacity: 1, stagger: 0.03, delay: 6.6 })
        //일곱번째 줄
        gsap.to(".flex-box .t-flex7 .img", { opacity: 1, scale: 1, duration: 0.3, delay: 6.7 })
        gsap.to(".flex-box .t-flex7 .text strong span", { opacity: 1, stagger: 0.03, delay: 7.1 })
        //여덟번째 줄
        gsap.to(".flex-box .t-flex8 .text strong span", { opacity: 1, stagger: 0.03, delay: 7.3 })
        gsap.to(".flex-box .t-flex8 .img", { opacity: 1, stagger: 0.03, delay: 7.9 })
        //about
        gsap.to(".underbar", { opacity: 1, stagger: 0.03, delay: 8.8 })
    }; 

    // const sTop = $(window).scrollTop() + $(window).height();
    // const winH =$(window).height()/2; 

    if( sTop-winH >  $(".sec4").offset().top){
        gsap.to(".first-inner .awward", { opacity: 1, stagger: 0.03, duration: 0.3 })
        gsap.to(".first-inner .stext", { opacity: 1, stagger: 0.03, duration: 1.0 })
    } else if ( sTop-winH <  $(".sec4").offset().top) {
        gsap.to(".first-inner .awward", { opacity: 0, stagger: 0.03, duration: 0.3 })
        gsap.to(".first-inner .stext", { opacity: 0, stagger: 0.03, duration: 1.0 })
    };

    //design-font
    // if( sTop-winH >  $(".a-inner").offset().top){  
    //     gsap.to(".a-inner .rightbox1", { opacity: 1, stagger: 0.03, y: 0, duration: 0.8 })        
    // };

    if( sTop-winH >  $(".leftbox.box1").offset().top){
        //안중근비누
        gsap.to(".leftbox.box1 .mtext", { opacity: 1, stagger: 0.03, y: 0, duration: 1.3 })
        gsap.to(".leftbox.box1 .undertext", { opacity: 1, stagger: 0.03, y: 0, duration: 2.5 })     
    }
    else if ( sTop-winH <  $(".leftbox.box1").offset().top){
        gsap.to(".leftbox.box1 .mtext", { opacity: 0, stagger: 0.03, y: 0, duration: 1 })
        gsap.to(".leftbox.box1 .undertext", { opacity: 0, stagger: 0.03, y: 0, duration: 1 })     
    }; 
    if( sTop-winH >  $(".leftbox.box2").offset().top){
        //움초
        gsap.to(".leftbox.box2 .mtext", { opacity: 1, stagger: 0.03, y: 0, duration: 1.3 })
        gsap.to(".leftbox.box2 .undertext", { opacity: 1, stagger: 0.03, y: 0, duration: 2.5 })
    }
    else if ( sTop-winH <  $(".leftbox.box2").offset().top){
        gsap.to(".leftbox.box2 .mtext", { opacity: 0, stagger: 0.03, y: 0, duration: 1 })
        gsap.to(".leftbox.box2 .undertext", { opacity: 0, stagger: 0.03, y: 0, duration: 1 })
    };  
    if( sTop-winH >  $(".leftbox.box3").offset().top){
        //7days
        gsap.to(".leftbox.box3 .mtexte", { opacity: 1, stagger: 0.03, y: 0, duration: 1.3 })
        gsap.to(".leftbox.box3 .undertext", { opacity: 1, stagger: 0.03, y: 0, duration: 2.5 })
        }
    else if ( sTop-winH <  $(".leftbox.box3").offset().top){
        gsap.to(".leftbox.box3 .mtexte", { opacity: 0, stagger: 0.03, y: 0, duration: 1 })
        gsap.to(".leftbox.box3 .undertext", { opacity: 0, stagger: 0.03, y: 0, duration: 1 })
        };  
    if( sTop-winH >  $(".leftbox.box4").offset().top){
        //7days
        gsap.to(".leftbox.box4 .mtexte", { opacity: 1, stagger: 0.03, y: 0, duration: 1.3 })
        gsap.to(".leftbox.box4 .undertext", { opacity: 1, stagger: 0.03, y: 0, duration: 2.5 })
        }
    else if ( sTop-winH <  $(".leftbox.box4").offset().top){
        gsap.to(".leftbox.box4 .mtexte", { opacity: 0, stagger: 0.03, y: 0, duration: 1 })
        gsap.to(".leftbox.box4 .undertext", { opacity: 0, stagger: 0.03, y: 0, duration: 1 })
        };  
    if( sTop-winH >  $(".leftbox.box5").offset().top){
        //7days
        gsap.to(".leftbox.box5 .mtexte", { opacity: 1, stagger: 0.03, y: 0, duration: 1.3 })
        gsap.to(".leftbox.box5 .undertext", { opacity: 1, stagger: 0.03, y: 0, duration: 2.5 })
        }
    else if ( sTop-winH <  $(".leftbox.box5").offset().top){
        gsap.to(".leftbox.box5 .mtexte", { opacity: 0, stagger: 0.03, y: 0, duration: 1 })
        gsap.to(".leftbox.box5 .undertext", { opacity: 0, stagger: 0.03, y: 0, duration: 1 })
    };  
    if( sTop-winH >  $(".leftbox.box6").offset().top){
        //7days
        gsap.to(".leftbox.box6 .mtexte", { opacity: 1, stagger: 0.03, y: 0, duration: 1.3 })
        gsap.to(".leftbox.box6 .undertext", { opacity: 1, stagger: 0.03, y: 0, duration: 2.5 })
        }
    else if ( sTop-winH <  $(".leftbox.box6").offset().top){
        gsap.to(".leftbox.box6 .mtexte", { opacity: 0, stagger: 0.03, y: 0, duration: 1 })
        gsap.to(".leftbox.box6 .undertext", { opacity: 0, stagger: 0.03, y: 0, duration: 1 })
        };  

    //section5    
    if( sTop-winH >  $(".sec5").offset().top){
        gsap.to(".section-comment h4", { opacity: 1, stagger: 0.03, duration: 0.7 })
        }
    else if ( sTop-winH <  $(".sec5").offset().top){
        gsap.to(".section-comment h4", { opacity: 0, stagger: 0.03, duration: 0.5})
        };

    //section6
    if( sTop-winH >  $(".sec6").offset().top){
            gsap.to(".sec-about .btext strong span", { opacity: 1, stagger: 0.03, duration: 0.3, delay: 0.5 })
            gsap.to(".sec-about .under-text", { opacity: 1, stagger: 0.03, duration: 0.3, delay: 1.5 })
            gsap.to(".sec-about .circlephoto", { opacity: 1, stagger: 0.03, scale:2, duration: 0.7, delay: 2.5 })
            gsap.to(".sec-about .myek strong span", { opacity: 1, stagger: 0.03, duration: 0.3, delay: 2.9 })
        };

    //section7
    if( sTop-winH >  $(".sec7").offset().top){
            gsap.to(".work-text .maintext strong span", { opacity: 1, stagger: 0.03, duration: 0.3, delay: 0.5 })
            gsap.to(".work-text .subtext", { opacity: 1, stagger: 0.03, duration: 1.0, delay: 1.5 })
        }
    else if ( sTop-winH <  $(".sec7").offset().top){
            gsap.to(".work-text .maintext strong span", { opacity: 0, stagger: 0.03, duration: 0.3, delay: 0.5 })
            gsap.to(".work-text .subtext", { opacity: 0, stagger: 0.03, duration: 1.0, delay: 1.5 })
        };

    //section8
    if( sTop-winH >  $(".text.one").offset().top){
        //1
        gsap.to(".text.one .mtext", { opacity: 1, stagger: 0.03, y: 0, duration: 1.0 })
        gsap.to(".text.one .under", { opacity: 1, stagger: 0.03, y: 0, duration: 2.3 })     
    } 
    else if ( sTop-winH <  $(".text.one").offset().top){
        gsap.to(".text.one .mtext", { opacity: 0, stagger: 0.03, y: 0, duration: 0.5 })
        gsap.to(".text.one .under", { opacity: 0, stagger: 0.03, y: 0, duration: 0.5 })     
    }; 

    if( sTop-winH >  $(".text.two").offset().top){
        //2
        gsap.to(".text.two .mtext", { opacity: 1, stagger: 0.03, y: 0, duration: 1.0 })
        gsap.to(".text.two .under", { opacity: 1, stagger: 0.03, y: 0, duration: 2.3 })     
    } 
    else if ( sTop-winH <  $(".text.two").offset().top){
        gsap.to(".text.two .mtext", { opacity: 0, stagger: 0.03, y: 0, duration: 0.5 })
        gsap.to(".text.two .under", { opacity: 0, stagger: 0.03, y: 0, duration: 0.5 })    
    }; 

    if( sTop-winH >  $(".text.three").offset().top){
        //3
        gsap.to(".text.three .mtext", { opacity: 1, stagger: 0.03, y: 0, duration: 1.0 })
        gsap.to(".text.three .under", { opacity: 1, stagger: 0.03, y: 0, duration: 2.3 })     
    }
    else if ( sTop-winH <  $(".text.three").offset().top){
        gsap.to(".text.three .mtext", { opacity: 0, stagger: 0.03, y: 0, duration: 0.5 })
        gsap.to(".text.three .under", { opacity: 0, stagger: 0.03, y: 0, duration: 0.5 })    
    }; 

    if( sTop-winH >  $(".text.four").offset().top){
        //4
        gsap.to(".text.four .mtext", { opacity: 1, stagger: 0.03, y: 0, duration: 1.0 })
        gsap.to(".text.four .under", { opacity: 1, stagger: 0.03, y: 0, duration: 2.3 })     
    } 
    else if ( sTop-winH <  $(".text.four").offset().top){
        gsap.to(".text.four .mtext", { opacity: 0, stagger: 0.03, y: 0, duration: 0.5 })
        gsap.to(".text.four .under", { opacity: 0, stagger: 0.03, y: 0, duration: 0.5 })    
    }; 

    if( sTop-winH >  $(".text.five").offset().top){
        //5
        gsap.to(".text.five .mtext", { opacity: 1, stagger: 0.03, y: 0, duration: 1.0 })
        gsap.to(".text.five .under", { opacity: 1, stagger: 0.03, y: 0, duration: 2.3 })     
    } 
    else if ( sTop-winH <  $(".text.five").offset().top){
        gsap.to(".text.five .mtext", { opacity: 0, stagger: 0.03, y: 0, duration: 0.5 })
        gsap.to(".text.five .under", { opacity: 0, stagger: 0.03, y: 0, duration: 0.5 })    
    }; 

    //section10
    if( sTop-winH >  $(".s10").offset().top){
        gsap.to(".s10.s10_title .mtext strong span", { opacity: 1, stagger: 0.03, y: 0, duration: 1.0, delay: 0.5 })
        gsap.to(".s10.s10_title .stext", { opacity: 1, stagger: 0.03, y: 0, delay: 1.3 })     
        gsap.to(".s10_title .dettext1", { opacity: 1, stagger: 0.03, y: 0, delay: 1.3 })     
        gsap.to(".s10.s10_title .dettext2", { opacity: 1, stagger: 0.03, y: 0, delay: 1.3 })     
    } 
    else if ( sTop-winH <  $(".s10").offset().top){
        gsap.to(".s10.s10_title .mtext strong span", { opacity: 0, stagger: 0.03, y: 0, duration: 1.0, delay: 0.5 })
        gsap.to(".s10.s10_title .stext", { opacity: 0, stagger: 0.03, y: 0, delay: 0.5 })     
        gsap.to(".s10_title .dettext1", { opacity: 0, stagger: 0.03, y: 0, delay: 0.5 })     
        gsap.to(".s10.s10_title .dettext2", { opacity: 0, stagger: 0.03, y: 0, delay: 0.5 })     
    
    }; 

    if( sTop-winH >  $(".sec10").offset().top){
        gsap.to(".sec10 .box-group:nth-child(3)", { opacity: 1, stagger: 0.03, y: 0, delay: 1.5 })     
    }
    else if ( sTop-winH <  $(".s10").offset().top){
        gsap.to(".sec10 .box-group:nth-child(3)", { opacity: 0, stagger: 0.03, y: 0, delay:  0.5})    
    }; 
    if( sTop-winH >  $(".skillbox").offset().top){
        gsap.to(".title", { opacity: 1, stagger: 0.03, y: 0, delay: 2.5 }) 
        gsap.to(".cont", { opacity: 1, stagger: 0.03, y: 0, delay: 4.5 }) 
    }
    else if ( sTop-winH <  $(".skillbox").offset().top){
        gsap.to(".title", { opacity: 0, stagger: 0.03, y: 0, delay:  0.5 }) 
        gsap.to(".cont", { opacity: 0, stagger: 0.03, y: 0, delay:  0.5 }) 
    }; 
    
    //section11_
    if( sTop-winH >  $(".sec11").offset().top){
        //1
        gsap.to(".end-inner .underbar strong span", { opacity: 1, stagger: 0.03, y: 0, duration: 1.0, delay: 0.5 }) 
        gsap.to(".end-inner .undertext", { opacity: 1, stagger: 0.03, y: 0, duration: 2.3, delay: 1.3 })   
        gsap.to(".end-inner .s4_subtit", { opacity: 1, stagger: 0.03, y: 0, duration: 2.3, delay: 1.6 })       
        gsap.to(".end-inner .s4_cont ul", { opacity: 1, stagger: 0.03, y: 0, duration: 2.3, delay: 2.0 })       
    }; 

    //footer
    //foot1
    if( sTop-winH >  $(".foot1").offset().top){
        //1
        gsap.to(".firtext strong span", { opacity: 1, stagger: 0.03, y: 0, duration: 1.0, delay: 0.5 }) 
        gsap.to(".middle", { opacity: 1, stagger: 0.03, y: 0, duration: 2.3, delay: 1.3 })   
        gsap.to(".middle .contact", { opacity: 1, stagger: 0.03, y: 0, duration: 2.3, delay: 2.5 })       
        gsap.to(".email", { opacity: 1, stagger: 0.03, y: 0, duration: 2.3, delay: 2.9 })       
        gsap.to(".email a", { opacity: 1, stagger: 0.03, y: 0, duration: 2.3, delay: 2.9 })       
    };

    //foot2
    if( sTop-winH >  $(".foot2").offset().top){
        //1
        gsap.to("#scrollToTopBtn", { opacity: 1, stagger: 0.03, y: 0, duration: 1.0, delay: 0.5 }) 
        gsap.to(".circle", { opacity: 1, stagger: 0.03, y: 0, duration: 0.3, delay: 1.0 })   
        gsap.to(".footin1", { opacity: 1, stagger: 0.03, y: 0, duration: 0.3, delay: 1.3 })       
        gsap.to(".footin2", { opacity: 1, stagger: 0.03, y: 0, duration: 0.3, delay: 1.3 })       
        gsap.to(".footin3", { opacity: 1, stagger: 0.03, y: 0, duration: 0.3, delay: 1.3 })       
    }
    else if ( sTop-winH <  $(".foot2").offset().top){
        gsap.to("#scrollToTopBtn", { opacity: 0, stagger: 0.03, y: 0, duration: 1.0, delay: 0.5 }) 
        gsap.to(".circle", { opacity: 0, stagger: 0.03, y: 0, duration: 0.3, delay:  0.5 })   
        gsap.to(".footin1", { opacity: 0, stagger: 0.03, y: 0, duration: 0.3, delay:  0.5 })       
        gsap.to(".footin2", { opacity: 0, stagger: 0.03, y: 0, duration: 0.3, delay:  0.5 })       
        gsap.to(".footin3", { opacity: 0, stagger: 0.03, y: 0, duration: 0.3, delay:  0.5 })       
    };  
});