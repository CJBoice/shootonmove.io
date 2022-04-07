$(document).ready(function(){
    $("select,input").change(function ()
    {
        
    })
    var box = jQuery('.box').css;

        var x = 300;
        var y = 200;

       box.keydown(moveBox(e));

        function moveBox(e) {
            if(e === 37){ //key left
                x -= 3;
            } else if(e === 38){ //key up
                y += 3;
            } else if(e === 39){ //key right
                x += 3;
            } else if(e === 40){ //key down
                y -= 3;
            } else {
            
            }

            boxPosition(x, y);
        }

        function boxPosition(x, y) {
            box.css('left', x);
            box.css('top', y);
        }
});
    

    
