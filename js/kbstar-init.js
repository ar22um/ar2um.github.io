//kbstar-init.js
$(function(){
    
    $('.visual-items').bxSlider({
        mode:'fade',
        onSlideBefore:function($slideElement, oldIndex, newIndex){
            $('.visual-container-wrap').css('background-color','#d2efff')
        }
    });
    $('#btn_quick_view').on('click',function(){
        $(this).parent().animate({height:300},function(){
            $('#btn_quick_close').addClass('on')
            //$('#btn_quick_view').hide()
            $('#btn_quick_view').addClass('off')
        })
    })
    $('#btn_quick_close').on('click',function(){
        $(this).parent().animate({height:56},function(){
            $('#btn_quick_close').removeClass('on')
            $('#btn_quick_view').removeClass('off')
        })
    })
    
})