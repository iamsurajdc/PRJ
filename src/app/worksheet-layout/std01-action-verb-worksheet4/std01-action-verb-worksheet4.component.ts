import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-std01-action-verb-worksheet4',
  templateUrl: './std01-action-verb-worksheet4.component.html',
  styleUrls: ['./std01-action-verb-worksheet4.component.scss']
})
export class Std01ActionVerbWorksheet4Component implements OnInit {

  constructor() { }

  ngOnInit() {
        
	window.onload = function () { 
    $('.loadingDiv').hide();
    setImages();
}
var theToggle = document.getElementById('toggle');
// hasClass
function hasClass(elem, className) {
    return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}
// addClass
function addClass(elem, className) {
    if (!hasClass(elem, className)) {
        elem.className += ' ' + className;
    }
}
// removeClass
function removeClass(elem, className) {
    var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
}
// toggleClass
function toggleClass(elem, className) {
    var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(" " + className + " ") >= 0 ) {
            newClass = newClass.replace( " " + className + " " , " " );
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    } else {
        elem.className += ' ' + className;
    }
}
theToggle.onclick = function() {
    toggleClass(this, 'on');
    $('.menu-block #menu').show();
    $('#toggle span img').toggleClass('up');
    return false;
}
$(document).ready(function(){
  $( ".content" ).each(function(i) {
      var text = $(this).text();
      var $words = text.split(" ");
      var $newText = "";
      var demoText=[];
      // $.each($words, function (i, val) {
      //     if(val.indexOf(".") > 0){
      //         demoText=val.split(".");
      //         $newText = $newText + '<span style="cursor:pointer">' + demoText[0] + '</span>'+".";
      //     }
      //     else{
      //         $newText = $newText + '<span style="cursor:pointer">' + val + '</span> ';
      //     }
      // });
      // $(this).html($newText);
  });
var inputField;
  var inputValue="";
  var ClickAnswer=[];
var HelpBox=[];
  var Text="";
  var Correct_Answers_Count=0;
$('.content span').click(function(){
      if($(this).hasClass('underlined')){
          $(this).removeClass('underlined');
      }
      else{
          $(this).parent().find('span').removeClass("underlined");
          $(this).addClass('underlined');
      }
  });

$('.button').click(function(){
if($(this).hasClass('playAgain')){
window.location.href=window.location.href;
}
else{
var Correct_Answers_Count=0;
if($('.underlined').length >= 4){
  var Correct_Answers=["stole","forgot","threw","knew","climbed","lost","taught","woke"];
              $('.Question_Row').each(function(i){
                  var isTrue=false;
                  var underlined=$(this).find('.underlined');
                  if(underlined !== undefined){
                      if(underlined.text() !==Correct_Answers[i] ){
                          $(underlined).css('color','red');
                      }
                      else{
                          Correct_Answers_Count++;
                      }
                  }
                  var Answer=$(this).find("span:contains("+Correct_Answers[i]+")");
                  if($(Answer).hasClass('underlined')){
                      $(Answer).addClass('colorgreen_bordered');
                  }
                  else{
                      $(Answer).addClass('colorgreen');
                  }
              });		
  var percentage=	(Correct_Answers_Count * 100) / 8;
  var DisplayResult="";
  if(percentage > 80){
    DisplayResult='.outstanding';
  }
  else if(percentage > 60){
    DisplayResult='.brilliant';
  }
  else if(percentage >= 50){
    DisplayResult='.good-work';
  }
  else if(percentage < 50){
    DisplayResult='.keep-practicing';
  }
  setTimeout(function(){
    $('.result').css('display','flex');
    $('.result .TextBox').hide();
    $(DisplayResult).removeClass('hide');
    $('.result .imgBox').show();
    $('.result').delay(2000).fadeOut('slow');
    $('.close').hide();
  },500);
  setTimeout(function(){
    $('.button').addClass('playAgain');
    $('.button.playAgain').text('solve again');
  },500);
  $('.content span').css('pointer-events','none');
}
else{
  setTimeout(function(){
    $('.result').css('display','flex');
    $('.result .TextBox h1').text('Please solve at least 4 sentences before submitting');
  },500);
}
}
$('.result,.close').click(function(){
$('.result').fadeOut();
$('.close').show();
});
});

});
function setImages(){
var AllImages=['assets/images/keep-practicing.gif','assets/images/outstanding.gif','assets/images/brilliant.gif',
'assets/images/good-work.gif','assets/images/fabulous.gif'];
$('.imgBox img').each(function(i){
      var t=new Date().getTime();
      $(this).attr("src", AllImages[i]+'?'+t);
});
}
  }

}
