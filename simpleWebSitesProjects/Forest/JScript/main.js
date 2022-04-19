


$(document).ready(function(){
  // window size
  $(document).ready( function(){
    const windowWidthHeight=getWindowSize();
    headViewDimentions(windowWidthHeight);
    videoViewDimentions(windowWidthHeight);
    contactContainerAll(windowWidthHeight);
  });

  $(window).resize(function (){ 
    const windowWidthHeight=getWindowSize();
    headViewDimentions(windowWidthHeight);
    videoViewDimentions(windowWidthHeight);
    contactContainerAll(windowWidthHeight);
  });
  
  function headViewDimentions(windowWidthHeight){    
    $(".containerBox1").css("width",windowWidthHeight[0]+"px");
    $(".containerBox1").css("height",windowWidthHeight[1]+"px");
    $("#headerVideo").css("width",windowWidthHeight[0]+"px");
    $("#headerVideo").css("height",windowWidthHeight[1]+"px");
  }
  function videoViewDimentions(windowWidthHeight){
    $(".videoViewImg img").css("width",windowWidthHeight[0]/3.35 +"px");
    $(".videoViewImg img").css("height",windowWidthHeight[1]/2.8 +"px");  
    $(".videoViewImg").css("width",windowWidthHeight[0]/3.35 +"px");
    $(".videoViewImg").css("height",windowWidthHeight[1]/2.8 +"px"); 
  }
  function contactContainerAll(windowWidthHeight){
    $(".contactContainerAll").css("width",windowWidthHeight[0]/3.35 +"px");
    $(".contactContainerAll").css("height",windowWidthHeight[1]/2.8 +"px");
  }
  function getWindowSize(){
    const windowWidthHeight = [$(window).width(),window.innerHeight];
    return windowWidthHeight;
  }
  

  $(".videoViewImg .videoPlayer a").hover(
     function(){$(this).css("opacity",1);
    },function(){$(this).css("opacity",0);}
    );
  
 
});







// code Comment******************************************************
  //// const windowWidthHeight = [window.innerWidth,window.innerHeight,$(window).width(),screen.height,$( document ).height()];
  // windowHeight = $(window).height();
  // windowWidth = $(window).width();
  // documentHeight = $(document).height();
  // documentWidth = $(document).width();
  // screenHeight = screen.height;
  // screenWidth = screen.width;
  // $("#headerVideo").css("width",$(window).width());
  // $("#headerVideo").css("height",$(window).height());
   
    // var windowWidth=$(window).width();
    // var windowHeight=$(window).height();  
    // $(".videoView img").css("width",windowWidth/3.35 +"px");
    // $(".videoView img").css("height",windowHeight/3.35 +"px");  
    // video play
  // var windowWidth=$(window).width();
  // var windowHeight=$(window).height();  
  // $(".videoView img").css("width","50px");
    // $("#head").css("width",$(window).width());
    // $("#head").css("height",$(window).height());
    
// // Sets the height to preferred
// function heightSize(calledID){
//     document.getElementById(calledID).style.width=(window.innerWidth)+"px";
//     document.getElementById(calledID).style.height=(window.innerHeight)+"px";
//     document.getElementById(calledID).style.opacity=(1);
   
// }


// $(document).ready(function(){
 
//   var WindowsSize=function(){

//     $("#headerVideo").css("width",$(window).width(),"height",$(window).height());
// };
// $(document).ready(WindowsSize); 
// $(window).load(WindowsSize); 
  
//     });
 // $(".videoView img").hover(function () {
  //   $(this).animate({opacity: 0.95});
  //   let picWidth=$(this).css("width");
  //   picWidth=picWidth.slice(0,3);
  //   picWidth=Number(picWidth);
  //   $(this).css("width", picWidth+ 40 + "px");

  //   let picHeight=$(this).css("height");
  //   picHeight=picHeight.slice(0,3);
  //   picHeight=Number(picHeight);
  //   $(this).css("height",picHeight+40+"px");
  // }); 

  // $(".videoView img").mouseout(function () { 
  //   $(this).animate({
  //     opacity: 1
  // });
  // const windowWidthHeight=getWindowSize();
  //   headViewDimentions(windowWidthHeight);
  //   videoViewDimentions(windowWidthHeight);
  //   contactContainerAll(windowWidthHeight);
  // });


  // function(){$("#headContent").animate({left: '50px'});},
    // function(){$("#headContent").animate({left: '0px'});}

//   $("#headContent").hover(
//     function(){
//       var div = $("#headContent");
//       div.animate({top: '30px'}, "slow");
//       div.animate({left: '30px'}, "slow");
//       div.animate({left: '30px'}, "slow");
//       div.animate({left: '30px'}, "slow");
//     }
    


//     //     function(){
// //       var shake_start = {'left': '20px'};
// //       var shake_odd1 = {'left': '20px'};
// //       var shake_even1 = {'left': '20px'};
// //       var shake_odd2 = {'left': '20px'};
// //       var shake_even2 = {'left': '20px'};

// //       $.keyframe.define([{
// //         name: 'crazy',
// //         '0%': shake_start,
// //         '10%': shake_odd2,
// //         '20%': shake_even1,
// //         '30%': shake_odd2,
// //         '40%': shake_even2,
// //         '50%': shake_odd2,
// //         '60%': shake_even1,
// //         '75.3%': shake_odd1,
// //         '80.45%': shake_even2,
// //         '91.6%': shake_odd1
// //           }
// // ]);
//       // $("#headContent").effect( "shake", { direction: "left", times: 4, distance: 101}, 2000 )
//       // $("#headContent").effect("shake", { direction: "up", times: 4, distance: 10}, 1000 );
//       // $("#headContent").effect( 'shake', {times: 4}, 1000 );
     
      
    
// );
