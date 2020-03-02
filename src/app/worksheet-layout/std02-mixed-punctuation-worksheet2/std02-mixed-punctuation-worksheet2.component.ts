import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-std02-mixed-punctuation-worksheet2',
  templateUrl: './std02-mixed-punctuation-worksheet2.component.html',
  styleUrls: ['./std02-mixed-punctuation-worksheet2.component.scss']
})
export class Std02MixedPunctuationWorksheet2Component implements OnInit {

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
        var inputValue;
        var Text="";
        var isFill=false;
        var Correct_Answers_Count=0;
        var inputs=$('input');
        $(inputs).attr('readonly','readonly');
  $(inputs).css('cursor','pointer');

        $(inputs).click(function(){
            inputField=$(this);
            $(inputs).parent().removeClass('bd');
            $(this).parent().addClass('bd');
    inputValue=$(inputField).val();
    $(this).val("");
        });
  $('.option').click(function(){
            if(inputField !== undefined){
                inputValue=$(inputField).val();
      Text=$(this).text().trim();
                $(inputField).val(Text);
            }
        });
  
  $('.button').click(function(){
    if($(this).hasClass('playAgain')){
      window.location.href=window.location.href;
    }
    else{
      var Correct_Answers_Count=0;
      var inputCount=0;
                var QuestionInputCount=0;
                $('.Question').each(function(i){
                    QuestionInputCount=$(this).find('input').filter(function () {
                                            return !!$(this).val();
                                        }).length;
                    if(i==7){
                        if(QuestionInputCount == 2){
                            inputCount++;
                        }
                    }
                    else{
                        if(QuestionInputCount == 1){
                            inputCount++;
                        }
                    }
                });
      if(inputCount >= 5){
        $(inputs).parent().removeClass('bd');
        var Correct_Answers=["?","!",".","?",".","!","?","!","?","."];
                    $('.Question').each(function(i){
                        var isTrue=true;
                        var QuestionInput=$(this).find('input');
                        if(i==7){
                            $(QuestionInput).each(function(x){
                                if($.trim($(this).val().toString()) !== "!"){
                                    $(this).css({'color':'#ed1a1a','border-color':'#000'});
                                    $(this).siblings('.correct_answer').css('visibility','visible');
                                    isTrue=false;
                                }
                            });
                        }
                        else{
                            if($.trim($(QuestionInput).val().toString()) !== Correct_Answers[i]){
                                $(QuestionInput).css({'color':'#ed1a1a','border-color':'#000'});
                                $(QuestionInput).siblings('.correct_answer').css('visibility','visible');
                                isTrue=false;
                            }
                        }
                        if(isTrue){
                            Correct_Answers_Count++;
                        }
                    });
        var percentage=	(Correct_Answers_Count * 100) / 10;
        var DisplayResult="";
        if(percentage > 80){
          DisplayResult='.outstanding';
        }
        else if(percentage > 60){
          DisplayResult='.brilliant';
        }
        else if(percentage > 50){
          DisplayResult='.good-work';
        }
        else if(percentage <= 50){
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
          $('.result .TextBox h1').text('Please solve at least 5 sentences before submitting');
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