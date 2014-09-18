$(document).ready(function(e){
    // loop through each chapter title and place a footnote wrapper before it
    $('h1').each(function(key,elm){
        var _key = key+1;
        
        $(this).before('<p class="real_footnotes" />');
        
        // create the anchor point
        var aname = $('<a />');
            aname.attr('name','chapter' + _key);
        $(this).before( aname );

        
        // create the link/placeholder
        var li = $('<li />');
        var ahref = $('<a />');
            ahref.attr('href','#chapter' + _key);
            ahref.text( $(this).text() );
        
        li.html( ahref );
        
        // replace the original footnote with the placeholder
        $('.contents').append( li );        
    });
    
    // loop through each footnote
    $('.footnote').each(function(key,elm){
        var _key = key+1;
        
        // copy the text of the footnote
        var cloned = $(this).text() + ' <span class="back_up">^</span>';
        
        // create the anchor point
        var aname = $('<a />');
            aname.attr('name','footnote' + _key);
            aname.html( _key + ': ' + cloned );
            aname.addClass('foot_to_placeholder');
            aname.attr('data-id', _key );
        
        // find the footnote wrapper for that chapter and add the footnote to it
        $(this).parent().parent().nextAll('.real_footnotes').first().append( aname );
        $(this).parent().nextAll('.real_footnotes').first().append( aname );
        
        // create the link/placeholder
        var ahref = $('<a />');
            ahref.attr('href','#footnote' + _key);
            ahref.text( _key );
            ahref.addClass('placeholder_' + _key );
        
        // replace the original footnote with the placeholder
        $(this).html( ahref );
    });

    $('.foot_to_placeholder').on('click',function(e){
        var offset = $('.placeholder_' + $(this).attr('data-id') ).offset().top;
        $('html,body').animate({'scrollTop':offset + 'px'},0);
    });
});



    $(document).ready(function(){
    
    /**
    
    $('.footnote').each(function(key){
        $(this).attr('data-inc', key+1 );
    });
    
    **/
    

    
            $('.scroll #outline').fracs('outline', {
                crop: true,
                margin:10,
                styles: [ {
                    selector: 'h1',
                    fillStyle: 'rgb(190,190,190)',
                    strokeWidth: 100,
                }, {
                    selector: 'h2',
                    fillStyle: 'rgb(2,25,55)'
                }, {
                    selector: '.real_footnotes',
                    fillStyle: 'rgb(43,133,202)'
                }],
                viewportStyle: {
                    fillStyle: 'rgba(29,119,194,0.3)'
                },
                viewportDragStyle: {
                    fillStyle: 'rgba(29,119,194,0.4)'
                }
            });
/**         
$( ".menuclosed" ).click(function() {
$( ".left_menu" ).animate({
    opacity: 0.5,
  }, 500, function() {
  });
  $( this ).removeClass( "menuclosed" );
  $( this ).addClass( "menuopen" );
});
    
$( ".menuopen" ).click(function() {
$( ".left_menu" ).animate({
    left: "20%",
  }, 500, function() {
  });
  $( this ).removeClass( "menuopen" );
  $( this ).addClass( "menuclosed" );
});


$("#menu_btn").click( function(event){
    event.preventDefault();
    if ($(this).hasClass("menuopen") ) {
        $(".left_menu").animate({left:"-20%"}, 200);          
        $(this).removeClass("menuopen");
    } else {
        $(".left_menu").animate({left:"0"}, 200);   
        $(this).addClass("menuopen");
    }
    return false;
}); 
    

$( ".btn_open" ).click(function() {
 $("html").addClass("opennav");
}); 

**/ 

$("#menu_btn").click( function(event){
    event.preventDefault();
    if ($(this).hasClass("btn_open") ) {
        $("html").addClass("opennav");        
        $(this).removeClass("btn_open");
    } else {
        $("html").removeClass("opennav");
        $(this).addClass("btn_open");
    }
    return false;
});

});


$(document).ready(function(e){
    // loop through each chapter title and place a footnote wrapper before it
    $('h1').each(function(key,elm){
        var _key = key+1;
        
        $(this).before('<p class="real_footnotes" />');
        
        // create the anchor point
        var aname = $('<a />');
            aname.attr('name','chapter' + _key);
        $(this).before( aname );

        
        // create the link/placeholder
        var li = $('<li />');
        var ahref = $('<a />');
            ahref.attr('href','#chapter' + _key);
            ahref.text( $(this).text() );
        
        li.html( ahref );
        
        // replace the original footnote with the placeholder
        $('.contents').append( li );        
    });
    
    // loop through each footnote
    $('.footnote').each(function(key,elm){
        var _key = key+1;
        
        // copy the text of the footnote
        var cloned = $(this).text() + ' <span class="back_up">^</span>';
        
        // create the anchor point
        var aname = $('<a />');
            aname.attr('name','footnote' + _key);
            aname.html( _key + ': ' + cloned );
            aname.addClass('foot_to_placeholder');
            aname.attr('data-id', _key );
        
        // find the footnote wrapper for that chapter and add the footnote to it
        $(this).parent().parent().nextAll('.real_footnotes').first().append( aname );
        $(this).parent().nextAll('.real_footnotes').first().append( aname );
        
        // create the link/placeholder
        var ahref = $('<a />');
            ahref.attr('href','#footnote' + _key);
            ahref.text( _key );
            ahref.addClass('placeholder_' + _key );
        
        // replace the original footnote with the placeholder
        $(this).html( ahref );
    });

    $('.foot_to_placeholder').on('click',function(e){
        var offset = $('.placeholder_' + $(this).attr('data-id') ).offset().top;
        $('html,body').animate({'scrollTop':offset + 'px'},0);
    });
});