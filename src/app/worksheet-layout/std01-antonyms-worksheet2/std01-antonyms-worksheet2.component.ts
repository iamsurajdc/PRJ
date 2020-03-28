import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';
@Component({
  selector: 'app-std01-antonyms-worksheet2',
  templateUrl: './std01-antonyms-worksheet2.component.html',
  styleUrls: ['./std01-antonyms-worksheet2.component.scss']
})
export class Std01AntonymsWorksheet2Component implements OnInit {

  constructor(private commonWorksheet: CommonWorksheetService){}

  ngOnInit() {
 this.commonWorksheet.reuseRoute();
        
    $('.loadingDiv').hide();
    setImages();
	window.onload = function () { 
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
  $('.option').click(function(){
            $(this).toggleClass("click");
            var numItems = $(this).parent().find('.click').length;
            if(numItems > 2){
                alert('please deselect any one');
                $(this).removeClass('click');
            }
        });
  
  $('.button').click(function(){
            var ClickCount=0;
            $('.Question').each(function(){
                if($(this).find('.click').length == 2){
                    ClickCount++;
                }
            });
    if($(this).hasClass('playAgain')){
      window.location.href=window.location.href;
    }
    else{
      if(ClickCount >= 4){
        var Correct_Answers_Count=0;
                    $('.Question').each(function(){
                        if($(this).find('.right.click').length == 2){
                            Correct_Answers_Count++;
                        }
                    });
                    $('.right').css('background-color','#0ec100');
                    $('.wrong.click').css('background-color','#e40037');
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
        $('.option').css('pointer-events','none');
      }
      else{
        setTimeout(function(){
          $('.result').css('display','flex');
          $('.result .TextBox h1').text('Please colour at least 8 boxes before submitting');
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
