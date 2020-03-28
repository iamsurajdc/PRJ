import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';

@Component({
  selector: 'app-std01-proper-noun-worksheet2',
  templateUrl: './std01-proper-noun-worksheet2.component.html',
  styleUrls: ['./std01-proper-noun-worksheet2.component.scss']
})
export class Std01ProperNounWorksheet2Component implements OnInit {

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

    $(document).ready(function () {
      var inputField;
      var inputValue;
      var ClickAnswer = [];
      var HelpBox = [];
      var Text = "";
      var Correct_Answers_Count = 0;
      var inputDataText = "";
      var optionDataText = "";
      var inputs = $('input');
      $(inputs).attr('readonly', 'readonly');
      $(inputs).css('cursor', 'pointer');

      $(inputs).click(function () {
        inputField = $(this);
        $(inputs).removeClass('bd');
        $(this).addClass('bd');
        inputValue = $(inputField).val();
        inputDataText = $(inputField).attr('data-text');
        ClickAnswer = $.grep(ClickAnswer, function (value) {
          return value != inputDataText;
        });
        $(".option").filter(function () {
          return $(this).attr('data-text') === inputDataText;
        }).removeClass('click');
        $(inputField).attr('data-text', "");
        $(this).val("");
      });
      $('.option').click(function () {
        if (inputField !== undefined) {
          inputValue = $(inputField).val();
          inputDataText = $(inputField).attr('data-text');
          Text = $(this).text().trim();
          optionDataText = $(this).attr('data-text');
          HelpBox.push(optionDataText);
          if (HelpBox.indexOf(inputDataText) > -1 && ClickAnswer.indexOf(optionDataText) < 0) {
            $(".option").filter(function () {
              return $(this).attr('data-text') === inputDataText;
            }).removeClass('click');
          }
          $(this).addClass('click');
          if (ClickAnswer.indexOf(optionDataText) > -1) {

          }
          else {
            ClickAnswer = $.grep(ClickAnswer, function (value) {
              return value != inputDataText;
            });
            $(inputField).val(Text);
            $(inputField).attr('data-text', optionDataText);
            ClickAnswer.push(optionDataText);
          }
        }
      });

      $('.button').click(function () {
        if ($('.button').hasClass('playAgain')) {
          globalThis.commonWorksheet.reloadComponent();
        }
        else {
          var Correct_Answers_Count = 0;
          var inputCount = $('input[type="text"]').filter(function () {
            return !!$(this).val();
          }).length;
          if (inputCount >= 4) {
            $(inputs).removeClass('bd');
            var Correct_Answers = ["S", "M", "T", "W", "T", "F", "S"];
            $(inputs).each(function (i) {
              if ($.trim($(this).val().toString()) !== Correct_Answers[i]) {
                $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
                $(this).siblings('.correct_answer').css('display', 'inline-block');
              }
              else {
                Correct_Answers_Count++;
              }
            });
            var percentage = (Correct_Answers_Count * 100) / 7;
            var ImgURL = "";
            var DisplayResult = "";
            if (percentage > 80) {
              DisplayResult = '.outstanding';
            }
            else if (percentage > 60) {
              DisplayResult = '.brilliant';
            }
            else if (percentage > 50) {
              DisplayResult = '.good-work';
            }
            else if (percentage <= 50) {
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
            $('input,.option').css('pointer-events', 'none');
          }
          else {
            setTimeout(function () {
              $('.result').css('display', 'flex');
              $('.result .TextBox h1').text('Please solve at least 4 blanks before submitting');
            }, 500);
          }

          $('.result,.close').click(function () {
            $('.result').fadeOut();
            $('.close').show();
          });
        }
      });

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
