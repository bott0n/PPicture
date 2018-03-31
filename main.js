



$(function(){

    var pwidth = 250+'px';
    var pheight = 250+'px';
    
    window.onload = function(){
        $('img').css('width',$('#pwidth').html()+'px')
        $('.container').css('width',$('img').css('width'))
        $('.container').css('height',$('img').css('height'))
        $('.word').css('top',$('#wtop').html())
        $('.word').css('left',$('#wleft').html())
        $('.word').css('font-size',$('#wsize').html()+'px')
    }
    // capture
    $('.btn').on('click',function(){
        html2canvas(document.querySelector(".container")).then(canvas => {
            document.body.appendChild(canvas)
        }).then(()=>{
            $('canvas').attr('id','canvas')
        });
       
       
    })

    //get file src
    $("input[type='file']").on('change', function () {
        console.log('fdf')
        var oFReader = new FileReader();
        var file = document.getElementById('img-input').files[0];
        oFReader.readAsDataURL(file);
        oFReader.onloadend = function(oFRevent){
            var src = oFRevent.target.result;
        
            
            $('.image').html("<img src="+src+">")
        }
    });
//word input 

    $('.input-word-btn').on('click',function(){
        $('.word').text($('.input-word').val())
    })

    $('.input-color-btn').on('click',function(){
        $('.word').css('color',$('.input-color').val())
    })

//silder
      
      var rangeSlider = function(){
        var slider = $('.range-slider'),
            range = $('.range-slider__range'),
            value = $('.range-slider__value');
          
        slider.each(function(){
      
          value.each(function(){
            var value = $(this).prev().attr('value');
            $(this).html(value);
          });
      
          range.on('input', function(){
            $(this).next(value).html(this.value);
            $('img').css('width',$('#pwidth').html()+'px')
            $('.container').css('width',$('img').css('width'))
            $('.container').css('height',$('img').css('height'))
            $('.word').css('top',$('#wtop').html())
            $('.word').css('left',$('#wleft').html())
            $('.word').css('font-size',$('#wsize').html()+'px')
            
          });
        });
      };
      
      rangeSlider();
      

  
})


