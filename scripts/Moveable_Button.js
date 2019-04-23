jQuery(($)=>{
    let p = $("span.go");
    let oldPos = p.offset();
    const oldMousePos = {x:-1, y: -1};
    const max_offset = 10;
    var firsttime = true;

    function myFunction(a, b)
    {
        if(a-b > 0){
            if(a-b < max_offset)return a-b;
            else{ return max_offset;}
        }
        else if(b-a > 0){ if(b-a <max_offset )return b-a;
        else{return max_offset;}}

        return 0;
    }

    $(document).mousemove((event)=>{
        const currentMousePos = { x: -1, y: -1 };
        currentMousePos.x = event.clientX;
        currentMousePos.y = event.clientY;
        if(firsttime)
        {
            oldMousePos.x = currentMousePos.x;
            oldMousePos.y = currentMousePos.y;
            firsttime = false;
        }
        let top , left , moveX, moveY;

        if(currentMousePos.x<oldPos.left)
        {
            if(currentMousePos.y<oldPos.top + 15)
            {
                moveX = 4 ;//- myFunction(currentMousePos.x,oldMousePos.x);
                moveY = 4 ;//- myFunction(currentMousePos.y,oldMousePos.y);
                top = oldPos.top - myFunction(currentMousePos.y,oldMousePos.y);
                left = oldPos.left - myFunction(currentMousePos.x,oldMousePos.x);
                /*p.transition({x: -moveX});
                p.transition({y: -moveY});*/
                $('span.go').css({
                    "transform": `translate(${-moveX}px,${-moveY}px)`
                });
                /*p.animate({
                    //backgroundPosition: left + 'px ' + top + 'px',
                    //transform: translate(left+'px',top+'px')
                },1000, ()=>{
                    console.log("Animation0");
                    console.log(-moveX+"left");
                    console.log(-moveY+"top");

                });
                /*p.offset({
                    top: oldPos.top + myFunction(currentMousePos.y,oldMousePos.y),
                    left: oldPos.left + myFunction(currentMousePos.x,oldMousePos.x)
                });*/
            }
            else
            {
                moveX = 4 ;//- myFunction(currentMousePos.x,oldMousePos.x);
                moveY = 4 ;//- myFunction(currentMousePos.y,oldMousePos.y);
                top = oldPos.top + myFunction(currentMousePos.y,oldMousePos.y);
                left = oldPos.left - myFunction(currentMousePos.x,oldMousePos.x);
                /*p.transition({x: -moveX});
                p.transition({y: moveY});*/
                $('span.go').css({
                    "transform": `translate(${-moveX}px,${moveY}px)`
                });
                /*p.animate(1000,{
                    //transform: translate(left+'px',top+'px')
                    //backgroundPosition: left + 'px ' + top + 'px'
                    //right: +left+'px',
                    //top: +top+'px'
                },1000, ()=>{
                    console.log("Animation1");
                    console.log(-moveX+"left");
                    console.log(moveY+"top");

                });
                /*p.offset({
                    top: oldPos.top - myFunction(currentMousePos.y,oldMousePos.y),
                    left: oldPos.left + myFunction(currentMousePos.x,oldMousePos.x)
                });*/
            }
        }
        else if(currentMousePos.x>oldPos.left)
        {
            if(currentMousePos.y<oldPos.top + 15)
            {
                moveX = 4 ;//- myFunction(currentMousePos.x,oldMousePos.x);
                moveY = 4 ;//- myFunction(currentMousePos.y,oldMousePos.y);
                top = oldPos.top - myFunction(currentMousePos.y,oldMousePos.y);
                left = oldPos.left + myFunction(currentMousePos.x,oldMousePos.x);
                /*p.transition({x: moveX});
                p.transition({y: -moveY});*/
                $('span.go').css({
                    "transform": `translate(${moveX}px,${-moveY}px)`
                });
                /*p.animate(1000,{
                    //transform: translate(left+'px',top+'px')
                    //backgroundPosition: left + 'px ' + top + 'px'
                    //left: +left+'px',
                    //bottom: +top+'px'
                },10000, ()=>{
                    console.log("Animation2");
                    console.log(moveX+"left");
                    console.log(-moveY+"top");

                });
                /*p.offset({
                    top: oldPos.top + myFunction(currentMousePos.y,oldMousePos.y),
                    left: oldPos.left - myFunction(currentMousePos.x,oldMousePos.x)
                });*/
            }
            else
            {
                moveX = 4 ;//- myFunction(currentMousePos.x,oldMousePos.x);
                moveY = 4 ;//- myFunction(currentMousePos.y,oldMousePos.y);
                top = oldPos.top + myFunction(currentMousePos.y,oldMousePos.y);
                left = oldPos.left + myFunction(currentMousePos.x,oldMousePos.x);
                /*p.transition({x: moveX});
                p.transition({y: moveY});*/
                $('span.go').css({
                    "transform": `translate(${moveX}px,${moveY}px)`
                });
                /*p.animate({
                    //transform: translate(left+'px ',top+'px')
                    //backgroundPosition: left + 'px ' + top + 'px'
                    left: +left+'px',
                    top: +top+'px'
                },1000, ()=>{
                    console.log("Animation3");
                    console.log(moveX+"left");
                    console.log(moveY+"top");

                });
                /*p.offset({
                    top: oldPos.top - 10,
                    left: oldPos.left - 10
                });*/
            }
        }

        oldMousePos.x = currentMousePos.x;
        oldMousePos.y = currentMousePos.y;

    });
});
