import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-std02-homophones-worksheet2',
  templateUrl: './std02-homophones-worksheet2.component.html',
  styleUrls: ['./std02-homophones-worksheet2.component.scss']
})
export class Std02HomophonesWorksheet2Component implements OnInit {

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
  $('.option').click(function(){
            if($(this).hasClass('img-shadow')){
      $(this).removeClass('img-shadow');
                $(this).find('img').attr('src','assets/std02-homophones-worksheet2/img/strawberry.png');
            }
            else{
                $(this).parent().find('img').attr('src','assets/std02-homophones-worksheet2/img/strawberry.png');
                $(this).parent().find('.option').removeClass('img-shadow');
      $(this).addClass('img-shadow');
                $(this).find('img').attr('src','assets/std02-homophones-worksheet2/img/strawberry_right.png');
            }
                
            });
  
  $('.button').click(function(){
    if($(this).hasClass('playAgain')){
      window.location.href=window.location.href;
    }
    else{
      if($('.img-shadow').length >= 5){
        var Correct_Answers_Count=$('.right.img-shadow').length;
        var percentage=	(Correct_Answers_Count * 100) / 10;
                    $('.right img').attr('src','assets/std02-homophones-worksheet2/img/strawberry_right.png');
                    $('.wrong.img-shadow img').attr('src','assets/std02-homophones-worksheet2/img/strawberry_wrong.png');
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
          $('.result .TextBox h1').text('Please colour at least 5 strawberries before submitting');
        },500);
      }
    }
    
  });
        
    });
    $('.result,.close').click(function(){
      $('.result').fadeOut();
      $('.close').show();
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
