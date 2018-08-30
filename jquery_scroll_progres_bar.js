/*
Function will add scroll progres bar.
Author: Krzysztof Malec
Email: max@bluestudio.pl
*/


// variables
const progresBar = $("<div class='progres-bar'></div>");
const progresBarInsertTo = $("body");


/*
functions
get scroll position
*/
function progresBarScrollPosition(){
  return $(document).scrollTop();
}


// get document height
function progresBarDocuentHeight(){
  return $(document).height() - $(window).height();
}


// set progres bar width
function progresBarWidth(){
  // count width procent
  const barWidth = (100 * progresBarScrollPosition() / progresBarDocuentHeight()).toFixed(0);
  
  // set width
  progresBar.css('width', barWidth + "%");
}


// progres bar init
function progresBarInsert(){
  // insert progres bar into body tag
  const checkProgresBarExist = $(document).find(progresBar).length;

  if(checkProgresBarExist){
    progresBarWidth();
  }else{
    progresBar.prependTo(progresBarInsertTo).promise().done(function(){
      progresBarWidth();
    });
  }
}


// ini function on events
$(document).ready(function(){ 
  $(window).on('load scroll resize', function(){
    progresBarInsert();
  })
});