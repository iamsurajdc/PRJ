import { Component, OnInit, Renderer2 } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-std03-vocabulary-worksheet10',
  templateUrl: './std03-vocabulary-worksheet10.component.html',
  styleUrls: ['./std03-vocabulary-worksheet10.component.scss']
})
export class Std03VocabularyWorksheet10Component implements OnInit {

    constructor(private renderer: Renderer2) {
        this.renderer.setStyle(document.body, 'background-color','#5dcbef');
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
    
    
      
    $(".question").each(function (i) {
        $(this).attr('id', 'question' + i);
        var id = $(this).attr('id', 'question' + i);
    });
    var inputField;
    var clickAnswer = [];
    var inputValue;
    var inputs = $('input');
    
    $(inputs).on('click', function () {
        inputField = $(this);
        inputValue = $(this).val();
        $('input').parent().removeClass('bd');
        $(this).parent().addClass('bd');
    
        clickAnswer = $.grep(clickAnswer, function (value) {
            return value != inputValue;
        });
        $(".helpbox").filter(function () {
            return $(this).find('span').text().trim() === inputValue;
        }).removeClass('click');
        $(this).val("");
    
    
    });
    $('input').attr('readonly', 'readonly');
    var Text = '';
    var HelpBox = [];
    
    $('.helpbox').each(function () {
        $(this).on('click', function (event) {
    
            inputValue = $(inputField).val();
            if (inputField !== undefined) {
                Text = $(this).find('span').text().trim();
                HelpBox.push(Text);
                if (HelpBox.indexOf(inputValue) > -1 && clickAnswer.indexOf(Text) < 0) {
                    $(".helpbox").filter(function () {
                        return $(this).find('span').text().trim() === inputValue;
                    }).removeClass('click');
                }
                $(this).addClass('click');
                if (clickAnswer.indexOf(Text) > -1) {
                }
                else {
                    clickAnswer = $.grep(clickAnswer, function (value) {
                        return value != inputValue;
                    });
                    $(inputField).val(Text);
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
            var Correct_answers_count = 0;
            $('input').parent().removeClass('bd');
            var Correct_answer = ["ice", "lightening", "ox", "feather", "giraffe", "cucumber", "coal", "owl", "ABC", "mouse", "knife", "lion"];
            var inputCount = $('input[type="text"]').filter(function () {
                return !!$(this).val();
            }).length;
            if (inputCount >= 6) {
                var ctr = 0;
                $('.question input').each(function (i) {
                    if($.trim($(this).val().toString()) !== Correct_answer[i]){
                        $(this).css({'color':'#ed1a1a','border-color':'#000'});
                        $(this).parent().siblings('.answer').css('visibility', 'visible');
                    }
                    else {
                        Correct_answers_count++;
                    }
                    ctr++;
                });
                // $('.answer').css('display','initial');
                var percentage = (Correct_answers_count * 100) / 12;
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
                $('.helpbox,input').css('pointer-events', 'none');
            }
            else {
                setTimeout(function () {
                    $('.result').css('display', 'flex');
                    $('.result .TextBox h1').text('Please solve at least 6 blanks before submitting');
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
