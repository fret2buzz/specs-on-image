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