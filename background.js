    // floor grouping:
var group = new Konva.Group({
         x: 0,
         y: 0,
       });
    layer.add(group);

// ellipse board image:
var imageObj = new Image();
imageObj.onload = function () {
    var yoda = new Konva.Image({

        x: 0,
        y: 0,
        image: imageObj,
        width: width,
        height: height,

    });

    // add the shape to the layer
    group.add(yoda);
    layer.batchDraw();
};
imageObj.src = 'https://scontent.fhyd14-1.fna.fbcdn.net/v/t1.15752-9/117173822_2021065464692532_1097646488266090022_n.jpg?_nc_cat=111&_nc_sid=b96e70&_nc_ohc=LtisDjbL9UYAX8tfHmA&_nc_ht=scontent.fhyd14-1.fna&oh=adb3edc125df7c90e5052bc41bd007fe&oe=5F51D7FF';


var imageObj2 = new Image();
imageObj2.onload = function () {
    var GGolam = new Konva.Image({

        x: width*(28/100),
        y: height*(47/100),
        image: imageObj2,
        width: width/25,
        height: height/8,
    });

    // add the shape to the layer
    group.add(GGolam);
    layer.batchDraw();
    var period1 = 5;

      var anim1 = new Konva.Animation(function (frame) {
         GGolam.x(10 * Math.sin((frame.time * 3 * Math.PI) / period1) + width*(33/100));

      }, layer);

      anim1.start();
};

imageObj2.src = 'https://scontent.fhyd14-1.fna.fbcdn.net/v/t1.15752-9/117186781_366585937837589_7708157431570213012_n.png?_nc_cat=104&_nc_sid=b96e70&_nc_ohc=z1CdYIecadQAX-k0Jsg&_nc_ht=scontent.fhyd14-1.fna&oh=c112d17377da2822247e8c56bbf158aa&oe=5F4FF72C';


var imageObj3 = new Image();
imageObj3.onload = function () {
    var yoda = new Konva.Image({

        x: width*(55/100),
        y: height*(42/100),
        image: imageObj3,
        width: width/5,
        height: height/4,
    });

    // add the shape to the layer
    group.add(yoda);
    layer.batchDraw();
};
imageObj3.src = 'https://scontent.fhyd1-2.fna.fbcdn.net/v/t1.15752-9/116871202_588997991980307_1199268569693120787_n.png?_nc_cat=105&_nc_sid=b96e70&_nc_ohc=uKfer_XBHjwAX-A1MS2&_nc_ht=scontent.fhyd1-2.fna&oh=af834a327dc38eccb8ce78cb33db2b2a&oe=5F507153';



