import { Component, OnInit, Renderer2 } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-std02-gender-nouns-worksheet7',
  templateUrl: './std02-gender-nouns-worksheet7.component.html',
  styleUrls: ['./std02-gender-nouns-worksheet7.component.scss']
})
export class Std02GenderNounsWorksheet7Component implements OnInit {

  constructor(private renderer: Renderer2) {
    this.renderer.setStyle(document.body, 'background-color','#00b0e3');
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
      var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
      if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0) {
          newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
      }
    }
    // toggleClass
    function toggleClass(elem, className) {
      var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, " ") + ' ';
      if (hasClass(elem, className)) {
        while (newClass.indexOf(" " + className + " ") >= 0) {
          newClass = newClass.replace(" " + className + " ", " ");
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
      } else {
        elem.className += ' ' + className;
      }
    }
    theToggle.onclick = function () {
      toggleClass(this, 'on');
      $('.menu-block #menu').show();
      $('#toggle span img').toggleClass('up');
      return false;
    }

    var inputField;
    var clickAnswer = [];
    var inputValue = "";
    var inputs = $('.musculine');

    $(inputs).on('click', function () {

      inputField = $(this);
      inputValue = $(this).text();
      $(inputs).removeClass("bd");
      $(this).addClass('bd');

      clickAnswer = $.grep(clickAnswer, function (value) {
        return value != inputValue;
      });
      $(".stone").filter(function () {
        var textchwck = $(this).text();
        return $(this).find('span').text() === inputValue;
      }).removeClass('click');
      var initial_text = $(this).attr('data-text')
      $(this).text(initial_text);
      $(this).removeClass('count_replace_word');
    });
    $('input').attr('readonly', 'readonly');
    var Text = '';
    var HelpBox = [];

    $('.stone').each(function () {
      $(this).on('click', function (event) {
        inputValue = $(inputField).text();
        if (inputField !== undefined) {
          Text = $(this).text().trim();
          HelpBox.push(Text);
          if (HelpBox.indexOf(inputValue) > -1 && clickAnswer.indexOf(Text) < 0) {
            $(".stone").filter(function () {
              return $(this).find('span').text() === inputValue;
            }).removeClass('click');
          }
          $(this).addClass('click');
          if (clickAnswer.indexOf(Text) > -1) {
          }
          else {
            clickAnswer = $.grep(clickAnswer, function (value) {
              return value != inputValue;
            });
            $(inputField).text(Text);
            $(inputField).addClass('count_replace_word');
            //$(inputField).val(Text);
            clickAnswer.push(Text);
          }
        }
      });


    });
    $('.button').click(function () {
      if ($('.button').hasClass('playAgain')) {
        window.location.href = window.location.href;
      }
      else {
        var Correct_Answers_Count = 0;
        if ($('.count_replace_word').length >= 4) {
          $(inputs).removeClass("bd");
          var Correct_answers = ["duck", "stewardess", "daughter", "headmistress", "giantess", "actress", "girl guide", "sow"];
          $(inputs).each(function (i) {
            if ($(this).text().trim() !== Correct_answers[i]) {
              $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
              $(this).siblings('.correct_answer').css('visibility', 'visible')
            }
            else {
              $(this).css({ 'font-weight': 'bold', 'color': '#20bb15' })
              Correct_Answers_Count++;
            }
          });
          $('.musculine').removeClass('.count_replace_word');
          // $('.answer-div').css('display','inline-block');
          $('input,.Question_Row .musculine,.Option_Container .stone').css('pointer-events', 'none');
          var percentage = (Correct_Answers_Count * 100) / 8;
          var ImgURL = '';
          var DisplayResult = "";
          if (percentage > 80) {
            DisplayResult = '.outstanding';
          }
          else if (percentage > 60) {
            DisplayResult = '.brilliant';
          }
          else if (percentage >= 50) {
            DisplayResult = '.good-work';
          }
          else if (percentage < 50) {
            DisplayResult = '.keep-practicing';
          }

          setTimeout(function () {
            $('.result').css('display', 'flex');
            $('.result .TextBox').hide();
            $(DisplayResult).removeClass('hide');
            $('.result .imgBox').show();
            $('.result').delay(2000).fadeOut('slow');
            $('.close').hide();
          }, 500);

          setTimeout(function () {
            $('.button').addClass('playAgain');
            $('.button.playAgain').text('solve again');
          }, 500);

        }
        else {
          setTimeout(function () {
            $('.result').css('display', 'flex');
            $('.result .TextBox h1').text('Please solve at least 4 boxes before submitting');
          }, 500);
        }
      }
    });

    $('.result,.close').click(function () {
      $('.result').fadeOut();
      $('.close').show();
    });
    function setImages() {
      var AllImages = ['assets/images/keep-practicing.gif', 'assets/images/outstanding.gif', 'assets/images/brilliant.gif',
        'assets/images/good-work.gif', 'assets/images/fabulous.gif'];
      $('.imgBox img').each(function (i) {
        var t = new Date().getTime();
        $(this).attr("src", AllImages[i] + '?' + t);
      });
    }
  }

}
