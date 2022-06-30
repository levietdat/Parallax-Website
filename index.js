    $(function() {
        $(document).on('scroll',function() {
            let scrollValue = $(this).scrollTop();
            console.log(   scrollValue)
            if(scrollValue > 30 & scrollValue < 56) {
                $('.container').addClass('paral')
            }
            else {
                $('.container').removeClass('paral')
            }

            if(scrollValue > 57) {
                $('.container').addClass('paral-')
            }
            else {
                $('.container').removeClass('paral-')
            }
          
        })
    })