function CustomHammer(canvas){
    ctx = new Array(canvas.length);
    prevX = new Array(canvas.length);
    prevY = new Array(canvas.length);
    suelto = new Array(canvas.length);
    hammer = new Array(canvas.length);
    x = new Array(canvas.length);
    y = new Array(canvas.length);
    
    ctx[0] = canvas[0].getContext("2d");
    ctx[0].strokeStyle = '#000000';
    ctx[0].lineJoin = 'round';
    ctx[0].lineWidth = 5;
    prevX[0] = null;
    prevY[0] = null;
    suelto[0] = true;

    hammer[0] = new Hammer(canvas[0], {
        drag_min_distance: 1,
        drag_horizontal: true,
        drag_vertical: true,
        transform: false,
        hold: false,
        prevent_default: true
    });
    
    hammer[0].ondrag = function(e){
        x[0] = (e.position.x+15) - canvas[0].offsetLeft;
        y[0] = (e.position.y+55) - canvas[0].offsetTop;
        if(prevX[0] == null || suelto[0] == true){
            prevX[0] = x[0];
            prevY[0] = y[0];
            ctx[0].beginPath();
            ctx[0].moveTo(x[0], y[0]);
            ctx[0].closePath();
            ctx[0].stroke();
            suelto[0] = false;
        }else{
            ctx[0].beginPath();
            ctx[0].moveTo(prevX[0], prevY[0]);
            ctx[0].lineTo(x[0], y[0]);
            ctx[0].closePath();
            ctx[0].stroke();
            prevX[0] = x[0];
            prevY[0] = y[0];
            suelto[0] = false;
        }
    };

    hammer[0].ondragend = function(e){
        suelto[0] = true;
    };

    ctx[1] = canvas[1].getContext("2d");
    ctx[1].strokeStyle = '#000000';
    ctx[1].lineJoin = 'round';
    ctx[1].lineWidth = 5;
    prevX[1] = null;
    prevY[1] = null;
    suelto[1] = true;

    hammer[1] = new Hammer(canvas[1], {
        drag_min_distance: 1,
        drag_horizontal: true,
        drag_vertical: true,
        transform: false,
        hold: false,
        prevent_default: true
    });
    
    hammer[1].ondrag = function(e){
        x[1] = (e.position.x+15) - canvas[1].offsetLeft;
        y[1] = (e.position.y+55) - canvas[1].offsetTop;
        if(prevX[1] == null || suelto[1] == true){
            prevX[1] = x[1];
            prevY[1] = y[1];
            ctx[1].beginPath();
            ctx[1].moveTo(x[1], y[1]);
            ctx[1].closePath();
            ctx[1].stroke();
            suelto[1] = false;
        }else{
            ctx[1].beginPath();
            ctx[1].moveTo(prevX[1], prevY[1]);
            ctx[1].lineTo(x[1], y[1]);
            ctx[1].closePath();
            ctx[1].stroke();
            prevX[1] = x[1];
            prevY[1] = y[1];
            suelto[1] = false;
        }
    };

    hammer[1].ondragend = function(e){
        suelto[1] = true;
    };

    ctx[2] = canvas[2].getContext("2d");
    ctx[2].strokeStyle = '#000000';
    ctx[2].lineJoin = 'round';
    ctx[2].lineWidth = 5;
    prevX[2] = null;
    prevY[2] = null;
    suelto[2] = true;

    hammer[2] = new Hammer(canvas[2], {
        drag_min_distance: 1,
        drag_horizontal: true,
        drag_vertical: true,
        transform: false,
        hold: false,
        prevent_default: true
    });
    
    hammer[2].ondrag = function(e){
        x[2] = (e.position.x+15) - canvas[2].offsetLeft;
        y[2] = (e.position.y+55) - canvas[2].offsetTop;
        if(prevX[2] == null || suelto[2] == true){
            prevX[2] = x[2];
            prevY[2] = y[2];
            ctx[2].beginPath();
            ctx[2].moveTo(x[2], y[2]);
            ctx[2].closePath();
            ctx[2].stroke();
            suelto[2] = false;
        }else{
            ctx[2].beginPath();
            ctx[2].moveTo(prevX[2], prevY[2]);
            ctx[2].lineTo(x[2], y[2]);
            ctx[2].closePath();
            ctx[2].stroke();
            prevX[2] = x[2];
            prevY[2] = y[2];
            suelto[2] = false;
        }
    };

    hammer[2].ondragend = function(e){
        suelto[2] = true;
    };

    this.clear = function(index){
        ctx[index].clearRect (0, 0, 290, 400);
    }
}