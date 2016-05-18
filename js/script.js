$( document ).ready(function() {

    var hotspot = $('.list li');
    var actionItem = $('.actions li');
    var clicked = function(item){
        item.on('click', function(e){
            item.removeClass('active');
            $(this).addClass('active');
            e.preventDefault();
        });
    };

    hotspot.find('span').each(function(){
        var parentLi = $(this).parent('li');
        var position = parentLi.width()+10;
        if(parentLi.hasClass('pos-right')){
            $(this).css('left', position+'px');
        };
        if(parentLi.hasClass('pos-left')){
            $(this).css('right', position+'px');
        };
    });

    clicked(hotspot);
    clicked(actionItem);

    $('#showAll').on('click', function(e){
        hotspot.addClass('active');
        e.preventDefault();
    });
    $('#hideAll').on('click', function(e){
        hotspot.removeClass('active');
        e.preventDefault();
    });

});