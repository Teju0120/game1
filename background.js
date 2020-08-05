    // floor grouping:
var group = new Konva.Group({
         x: 0,
         y: 0,
       });
    layer.add(group);

  //rectangular floor:
var rect1 = new Konva.Rect({

    x: 0,
    y: 0,
    width: width,
    height: height,
    fill: '#555659',

});
group.add(rect1);

//eliipse board:
var rect1 = new Konva.Rect({

    x: width*(17/100),
    y: height*(25/100),
    width: width/1.5,
    height: height/2.3,
    fill: '#30DA1B ',
    shadowBlur: 20,
    cornerRadius: 250,
});
group.add(rect1);


// ellipse board image:
var a = width*(9/100);
var b = height*(20/100)
var imageObj = new Image();
imageObj.onload = function () {
    var yoda = new Konva.Image({

        x: a,
        y: b,
        image: imageObj,
        width: width-(a*2),
        height: height-(b*2),
    });

    // add the shape to the layer
    group.add(yoda);
    layer.batchDraw();
};
imageObj.src = 'https://scontent.fhyd11-1.fna.fbcdn.net/v/t1.15752-9/p960x960/116431441_300695987817235_4995300281551678089_n.png?_nc_cat=103&_nc_sid=b96e70&_nc_ohc=93tsg-qE2REAX_GVET2&_nc_ht=scontent.fhyd11-1.fna&oh=e7b0aefd48a2b988b59807ae54e0c467&oe=5F4B2D69';


var c = width*(55/100);
var d = height*(45/100);
var imageObj2 = new Image();
imageObj2.onload = function () {
    var GGolam = new Konva.Image({

        x: c,
        y: d,
        image: imageObj2,
        width: width/25,
        height: height/8,
    });

    // add the shape to the layer
    group.add(GGolam);
    layer.batchDraw();
    var period1 = 50;

      var anim1 = new Konva.Animation(function (frame) {
         GGolam.x(10 * Math.sin((frame.time * 3 * Math.PI) / period1) + 900);

      }, layer);

      anim1.start();
};

imageObj2.src = 'https://scontent.fhyd14-1.fna.fbcdn.net/v/t1.15752-9/117186781_366585937837589_7708157431570213012_n.png?_nc_cat=104&_nc_sid=b96e70&_nc_ohc=z1CdYIecadQAX-k0Jsg&_nc_ht=scontent.fhyd14-1.fna&oh=c112d17377da2822247e8c56bbf158aa&oe=5F4FF72C';

var e = width*(28/100);
var f = height*(42/100);
var imageObj3 = new Image();
imageObj3.onload = function () {
    var yoda = new Konva.Image({

        x: e,
        y: f,
        image: imageObj3,
        width: width/5,
        height: height/5,
    });

    // add the shape to the layer
    group.add(yoda);
    layer.batchDraw();
};
imageObj3.src = 'https://scontent.fhyd1-2.fna.fbcdn.net/v/t1.15752-9/116871202_588997991980307_1199268569693120787_n.png?_nc_cat=105&_nc_sid=b96e70&_nc_ohc=uKfer_XBHjwAX-A1MS2&_nc_ht=scontent.fhyd1-2.fna&oh=af834a327dc38eccb8ce78cb33db2b2a&oe=5F507153';
