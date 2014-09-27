$(document).ready(function(e){

    $('.rearnote').each(function(key){
		
		var _key = key+1;
		
        $(this).attr('data-inc', key+1 );
		$(this).prepend( _key + ': ' );
    });

});