$(document).ready(function(e){
    
    // loop through each footnote
$('.rearnote').each(function(key){
        $(this).attr('data-inc', key+1 );
    });
});