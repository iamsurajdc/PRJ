import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-std02-articles-worksheet6',
  templateUrl: './std02-articles-worksheet6.component.html',
  styleUrls: ['./std02-articles-worksheet6.component.scss']
})
export class Std02ArticlesWorksheet6Component implements OnInit {

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
  var inputField;
  var HelpBox=[];
  var inputValue;
  var Text="";
  var inputNumber="";
  var optionNumber="";
  var Correct_Answers_Count=0;
  var inputs=$('input');
  $(inputs).attr('readonly','readonly');
  $(inputs).css('cursor','pointer');

  $(inputs).click(function(){
      inputField=$(this);
      $(inputs).removeClass('bd');
      $(this).addClass('bd');
      inputValue=$(inputField).val();
      $(this).closest('.Question').find(".option").filter(function() {
          return $(this).text().trim() === inputValue;
      }).removeClass('click');
      inputNumber=$(this).closest('.Question').find('.number span').text();
      $(this).val("");
  });
  $('.option').click(function(){
      optionNumber=$(this).closest('.Question').find('.number span').text();
      if(inputField !== undefined && optionNumber==inputNumber){
          inputValue=$(inputField).val();
          Text=$(this).text().trim();
          HelpBox.push(Text);
          if(HelpBox.indexOf(inputValue) > -1){
              $(this).closest('.Question').find(".option").filter(function() {
                  return $(this).text().trim() === inputValue;
              }).removeClass('click');
          }
          $(this).addClass('click');
          $(inputField).val(Text);
      }
  });
  
  $('.button').click(function(){
      if($(this).hasClass('playAgain')){
          window.location.href=window.location.href;
      }
      else{
          var Correct_Answers_Count=0;
          var inputCount=$('input[type="text"]').filter(function () {
                              return !!$(this).val();
                          }).length;
          if(inputCount >= 4){
              $(inputs).removeClass('bd');
              var Correct_Answers=["the","an","a","the","the","an","a","the"];
              $(inputs).each(function(i){
                  if($.trim($(this).val().toString()) !== Correct_Answers[i]){
                      if(i == 6){
                          $(this).addClass('left');
                      }
                      $(this).css({'color':'#ed1a1a','border-color':'#000'});
                      $(this).siblings('.correct_answer').css('visibility','visible');
                  }
                  else{
                      Correct_Answers_Count++;
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
              $('input,.option').css('pointer-events','none');
          }
          else{
              setTimeout(function(){
                  $('.result').css('display','flex');
                  $('.result .TextBox h1').text('Please solve at least 4 blanks before submitting');
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
  var AllImages = ['assets/images/keep-practicing.gif', 'assets/images/outstanding.gif', 'assets/images/brilliant.gif',
  'assets/images/good-work.gif', 'assets/images/fabulous.gif'];
  $('.imgBox img').each(function(i){
      var t=new Date().getTime();
      $(this).attr("src", AllImages[i]+'?'+t);
  });
}
  }

}