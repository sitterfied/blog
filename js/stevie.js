$(document).ready(function(){
  var total = $('#slider img').size() - 1;
  var current = 0;
  var caption = $('#slider img').first().attr('alt');  
  var photoset_total = 0;
  var photoset_current = 0;
  var photoset_caption = "";

  $('#slider img').hide();
  $('#slider img').first().show();
  $('#caption').append(caption).fadeIn(200);  

  $('#slider img').each(function(){
    $('#slides').append('<div class="slide"></div>');
  })

  $('#slides .slide').first().addClass('active');

  function slider(){ 

    if ( current === total ){
      $('#slider img').eq(current).fadeOut(400);
      $('#slides .slide').eq(current).removeClass('active');
      current = 0; 
      caption = $('#slider img').eq(current).attr('alt');     
      $('#slider img').eq(current).fadeIn(400);   
      $('#slides .slide').eq(current).addClass('active');
    }else{
      $('#slider img').eq(current).fadeOut(400); 
      $('#slides .slide').eq(current).removeClass('active');
      current++;                        
      caption = $('#slider img').eq(current).attr('alt');
      $('#slider img').eq(current).fadeIn(400);           
      $('#slides .slide').eq(current).addClass('active');
    } 

    $('#caption').text('');   

    if(caption.length > 1){
      $('#caption').append(caption).fadeIn(200);
    }else{
      $('#caption').fadeOut(200);
    }

  } 

  var slide_interval = setInterval(function() {
      slider();
  }, 5000);  

  $('#slides .slide').click(function(){
    $('#caption').text('');   
    $('#slider img').eq(current).fadeOut(400);
    $('#slides .slide').eq(current).removeClass('active');
    current = $(this).index();
    caption = $('#slider img').eq(current).attr('alt');     
    $('#slider img').eq(current).fadeIn(400);   
    $('#slides .slide').eq(current).addClass('active'); 
    if(caption.length > 1){
      $('#caption').append(caption).fadeIn(200);
    }else{
      $('#caption').fadeOut(200);
    }
  }) 


	$('.photoset').each(function(){
	    $(this).find('img').hide();
	    $(this).find('img').first().show();
		
		if ( $(this).find('img').first().attr('alt').length > 1){
			$(this).find('.photo-caption').text($(this).find('img').first().attr('alt')).fadeIn(0);
		}
	})

    $('.photoset-next').click(function(){ 
        photoset_total = $(this).parent().find('.photoset-photos img').size();
        $(this).parent().find('.photoset-photos img').each(function(){
            if ($(this).css('display') === 'none'){

            }else{
                photoset_current = $(this).index() + 1; 
                $(this).fadeOut(200);      
            }
        })

        if (photoset_current === photoset_total){
            photoset_current = 0;
        }  
        
		photoset_caption = $(this).parent().find('.photoset-photos img').eq(photoset_current).attr('alt');
		
		if ( photoset_caption.length > 1){
			$('.photo-caption').text(photoset_caption).fadeIn(200);
		}else{
			$('.photo-caption').fadeOut(200);
		}
		                    
        $(this).parent().find('.photoset-photos img').eq(photoset_current).fadeIn(200);                                         

    })

    $('.photoset-previous').click(function(){ 
        photoset_total = $(this).parent().find('.photoset-photos img').size();
        $(this).parent().find('.photoset-photos img').each(function(){
            if ($(this).css('display') === 'none'){

            }else{
                photoset_current = $(this).index() - 1; 
                $(this).fadeOut(200);
            }
        })

        if (photoset_current === -1){
            photoset_current = photoset_total - 1;
        }    

        $(this).parent().find('img').eq(photoset_current).fadeIn(200);                                         

    })

})