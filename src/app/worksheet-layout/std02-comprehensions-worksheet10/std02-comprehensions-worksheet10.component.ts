import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-std02-comprehensions-worksheet10',
  templateUrl: './std02-comprehensions-worksheet10.component.html',
  styleUrls: ['./std02-comprehensions-worksheet10.component.scss']
})
export class Std02ComprehensionsWorksheet10Component implements OnInit {

  loadAPI: Promise<any>;
  constructor() { 

    this.loadAPI = new Promise((resolve) => {
      this.loadScript();
      resolve(true);
  });

  }
  public loadScript() {   
        var dynamicScripts = ["https://code.jquery.com/jquery-3.3.1.min.js","https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"];
        for (var i = 0; i < dynamicScripts.length; i++) {
            let node = document.createElement('script');
            node.src = dynamicScripts [i];
            node.type = 'text/javascript';
            node.async = false;
            node.charset = 'utf-8';
            document.getElementsByTagName('head')[0].appendChild(node);
        }
}

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
$(document).ready(function () {
  var BackgroundImagesLandscapeArr = ["url(/assets/std02-comprehensions-worksheet10/img/slide1_bg.jpg)", "url(/assets/std02-comprehensions-worksheet10/img/slide2_bg.jpg)", "url(/assets/std02-comprehensions-worksheet10/img/slide3_bg.jpg)"];
  var BackgroundImagesPortraitArr = ["url(/assets/std02-comprehensions-worksheet10/img/slide1_bg_portrait.jpg)", "url(/assets/std02-comprehensions-worksheet10/img/slide2_bg_portrait.jpg)", "url(/assets/std02-comprehensions-worksheet10/img/slide3_bg_portrait.jpg)"];
  var BackgroundImagesArr = [];
  var orientation = window.screen.orientation;
  if (orientation.type == "landscape-primary") {
      BackgroundImagesArr = BackgroundImagesLandscapeArr;
  }
  else {
      BackgroundImagesArr = BackgroundImagesPortraitArr;
  }
  var ActiveSlideNumber;
  ActiveSlideNumber = $('li.active').attr('data-slide-to');
  ActiveSlideNumber = parseInt(ActiveSlideNumber);
  $('.carousel-control-next-icon').click(function () {
      ActiveSlideNumber++;
      if (ActiveSlideNumber > 2) {
          ActiveSlideNumber = 0;
      }
      $('.bg').css({
          'background': BackgroundImagesArr[ActiveSlideNumber] + ' no-repeat right bottom fixed',
          'background-size': 'cover',
          '-webkit-background-size': 'cover',
          '-moz-background-size': 'cover',
      });
  });
  $('.carousel-control-prev-icon').click(function () {
      ActiveSlideNumber--;
      if (ActiveSlideNumber < 0) {
          ActiveSlideNumber = 2;
      }
      $('.bg').css({
          'background': BackgroundImagesArr[ActiveSlideNumber] + ' no-repeat right bottom fixed',
          'background-size': 'cover',
          '-webkit-background-size': 'cover',
          '-moz-background-size': 'cover',
      });
  });
  $('.carousel-indicators li').click(function () {
      var ActiveList = $(this).text().trim();
      ActiveSlideNumber = parseInt(ActiveList) - 1;
      $('.bg').css({
          'background': BackgroundImagesArr[ActiveSlideNumber] + ' no-repeat right bottom fixed',
          'background-size': 'cover',
          '-webkit-background-size': 'cover',
          '-moz-background-size': 'cover',
      });
  });

  var inputField;
  var inputValue;
  var ClickAnswer = [];
  var HelpBox = [];
  var Text = "";
  var Correct_Answers_Count = 0;
  var inputs = $('input').not('.q4 input');
  var inputNumber = "";
  var optionNumber = "";
  $(inputs).attr('readonly', 'readonly');
  $(inputs).css('cursor', 'pointer');

  $('.Question_Block.one input').click(function () {
      inputField = $(this);
      $(inputs).parent().removeClass('bd');
      $(this).parent().addClass('bd');
      inputValue = $(inputField).val();
      ClickAnswer = $.grep(ClickAnswer, function (value) {
          return value != inputValue;
      });
      $(".Option_Row").filter(function () {
          return $(this).find('.number').text().trim() === inputValue;
      }).removeClass('blue');
      $(this).val("");
      inputNumber = $(this).closest('.Question_Block').find('.Main_Question_Row .number').text().trim();
  });
  $('.Option_Row').click(function () {
      optionNumber = $(this).closest('.Question_Block').find('.Main_Question_Row .number').text().trim();
      if (inputField !== undefined && optionNumber == inputNumber) {
          inputValue = $(inputField).val();
          Text = $(this).find('.number').text().trim();
          HelpBox.push(Text);
          if (HelpBox.indexOf(inputValue) > -1 && ClickAnswer.indexOf(Text) < 0) {
              $(".Option_Row").filter(function () {
                  return $(this).find('.number').text().trim() === inputValue;
              }).removeClass('blue');
          }
          $(this).addClass('blue');
          if (ClickAnswer.indexOf(Text) > -1) {

          }
          else {
              ClickAnswer = $.grep(ClickAnswer, function (value) {
                  return value != inputValue;
              });
              $(inputField).val(Text);
              ClickAnswer.push(Text);
          }
      }
  });
  $('.Question_Block.five input').click(function () {
      inputField = $(this);
      $(inputs).parent().removeClass('bd');
      $(this).parent().addClass('bd');
      inputValue = $(inputField).val();
      ClickAnswer = $.grep(ClickAnswer, function (value) {
          return value != inputValue;
      });
      $(".option_div").filter(function () {
          return $(this).text().trim() === inputValue;
      }).removeClass('click');
      $(this).val("");
      inputNumber = $(this).closest('.Question_Block').find('.Main_Question_Row .number').text().trim();
  });
  $('.option_div').click(function () {
      optionNumber = $(this).closest('.Question_Block').find('.Main_Question_Row .number').text().trim();
      if (inputField !== undefined && optionNumber == inputNumber) {
          inputValue = $(inputField).val();
          Text = $(this).text().trim();
          HelpBox.push(Text);
          if (HelpBox.indexOf(inputValue) > -1 && ClickAnswer.indexOf(Text) < 0) {
              $(".option_div").filter(function () {
                  return $(this).text().trim() === inputValue;
              }).removeClass('click');
          }
          $(this).addClass('click');
          if (ClickAnswer.indexOf(Text) > -1) {

          }
          else {
              ClickAnswer = $.grep(ClickAnswer, function (value) {
                  return value != inputValue;
              });
              $(inputField).val(Text);
              ClickAnswer.push(Text);
          }
      }
  });




  $('.page3 .option').click(function () {
      var checkText=$(this).find('.circle').next().text().trim();
      $('.page3 .input-text').text(checkText);
      $('.page3 .input-text').addClass('setAnswer')
  });

  $('.q4 .option').click(function () {
      var checkText=$(this).find('.circle').next().text().trim();
      $('.main-input-container input').val(checkText);
  });

  $('.options .option').click(function () {
    if($(this).hasClass('green'))
    {
      $(this).closest('.options').find('.option').removeClass('green');
      $(this).closest('.Question_Block').find('.input-text').text('');
      $(this).closest('.Question_Block').find('.main-input-container input').val('');
    }
    else{
      $(this).closest('.options').find('.option').removeClass('green');
      $(this).addClass('green');
    }
  });

  $('.button').click(function () {
      if($('.button').hasClass('playAgain'))
{
window.location.href = window.location.href;
}
else
{


          var inputCount = 0;
          $('.Question_Block').each(function (i) {
              if (i == 0 || i == 4) {
                  if ($(this).find('input').filter(function () { return !!$(this).val(); }).length > 0) {
                      inputCount++;
                  }
              }
              else {
                  if ($(this).find('.green').length > 0) {
                      inputCount++;
                  }
              }
          });
          console.log(inputCount);
          if (inputCount >= 3) {
              var Correct_Answers_Count = 0;
              $(inputs).parent().removeClass('bd');
              var Correct_Answers = ["3", "1", "2", "5", "4", "old", "lazy", "expensive", "happy", "remember"];
              var Wrong_Answers = [];
              var inputField_Array = [];
              var inputValues = [];
              $(inputs).each(function (i) {
                  if ($.trim($(this).val().toString()) !== Correct_Answers[i]) {
                      $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
                      $(this).siblings('.correct_answer').css('display', 'block');
                  }
                  else {

                  }
              });
              var Page3Text= $('.page3 .input-text').text();
              if(Page3Text.trim()!='four')
              {
                  $('.right-answer').css('display','inline-block');
                  $('.page3 .input-text').css('color','#ed1a1a')
                  if($('.page3 .input-text').hasClass('setAnswer'))
                  {
                      $('.page3 .input-text').removeClass('fourHidden');
                  }
              
              }

              var q4Text= $('.main-input-container input').val();
          
              if( q4Text.toString().trim()  != 'farming')
              {
                  var check='in if';
                  console.log(check);
                  $('.q4-right-answer').css('display','inline-block');
                  $('.main-input-container input').css('color','#ed1a1a')
                  // if($('.page3 .input-text').hasClass('setAnswer'))
                  // {
                  //     $('.page3 .input-text').removeClass('fourHidden');
                  // }
              
              }
              else{
                  var check='in else';
                  console.log(check);
              }
              $('.option.green .circle').not('.correct').css('background-color', '#ab2323');
              $('.option .circle.correct').css('background-color', '#20bb15');
              var DisplayResult=""; 
              DisplayResult='.fabulous';
              setTimeout(function(){
              $('.result').css('display','flex');
              $('.result .TextBox').hide();
              $(DisplayResult).removeClass('hide');
              $('.result .imgBox').show();
              $('.result').delay(2000).fadeOut('slow');
              $('.close').hide();
          },500);
              $('input,.option,.option-question,.option_div,.Option_Row').css('pointer-events', 'none');
              setTimeout(function(){
              $('.button').addClass('playAgain');
              $('.button.playAgain').text('solve again');
          },500);
          }
          else {
              setTimeout(function () {
                  $('.result').css('display', 'flex');
                  $('.result .TextBox h1').text('Please solve at least 3 questions before submitting');
              }, 500);
          }
}
  });

});
$('.result,.close').click(function () {
          $('.result').fadeOut();
          $('.close').show();
      });
      function setImages(){
var AllImages=['assets/images/fabulous.gif'];
$('.imgBox img').each(function(i){
      var t=new Date().getTime();
      $(this).attr("src", AllImages[i]+'?'+t);
});
}
  }

}
