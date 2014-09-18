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