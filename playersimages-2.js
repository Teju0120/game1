// payers grouping:
var group1 = new Konva.Group({
    x: 0,
    y: 0,
});
layer.add(group1);

// players images:
var playerimgs = [];
//down side image
playerimgs.push({x:width*(46/100),y:height*(76/100),width:width/13,height:width/13,
    src:'https://scontent.fhyd11-1.fna.fbcdn.net/v/t1.15752-9/116519331_648458026055301_5570697585556005454_n.png?_nc_cat=108&_nc_sid=b96e70&_nc_ohc=d4jJowslKRQAX-t2GwK&_nc_ht=scontent.fhyd11-1.fna&oh=05576218fbe02c0c63e7f001ffe4d62a&oe=5F4C4524'});
//right side image
playerimgs.push({x:width*(89/100),y:height/2.3-height/50,width:width/13,height:width/13, src:'https://scontent.fhyd11-1.fna.fbcdn.net/v/t1.15752-9/116435680_1093277054401067_2012473983785592536_n.png?_nc_cat=105&_nc_sid=b96e70&_nc_ohc=68cS59HDIakAX8JQvVc&_nc_ht=scontent.fhyd11-1.fna&oh=52e012758263bfc046def843143bc72c&oe=5F49A6DA'});
//top side image
playerimgs.push({x:width*(46/100),y:height/9-height/22,width:width/13,height:width/13, src:'https://scontent.fhyd11-1.fna.fbcdn.net/v/t1.15752-9/116441491_405829653725516_1989718125986912832_n.png?_nc_cat=109&_nc_sid=b96e70&_nc_ohc=5q6U1uAeGbsAX8ntqEP&_nc_ht=scontent.fhyd11-1.fna&oh=91f4d86e2bfce2af244a391a99a3a44c&oe=5F4B6516'});
//left side image
playerimgs.push({x:width*(2.8/100),y:height*(42.5/100),width:width/13,height:width/13, src:'https://scontent.fhyd11-1.fna.fbcdn.net/v/t1.15752-9/116430457_1146372589070070_5842816948800403803_n.png?_nc_cat=101&_nc_sid=b96e70&_nc_ohc=P7oqzO5wz9wAX8SqMjz&_nc_ht=scontent.fhyd11-1.fna&oh=9751b199749b5d141f39892e81989050&oe=5F4B9E6F  '});

let playerimg1,ee, imageObj1;
for (var j =0; j<4; j++){
    ee = playerimgs[j];
    imageObj1 = new Image();
    imageObj1.onload = function () {

       layer.batchDraw();
    };
     playerimg1 = new Konva.Image({
            x: ee.x,
            y: ee.y,
            image: imageObj1,
            width: ee.width,
            height: ee.height,
        });


        // add the shape to the layer
        group1.add(playerimg1);

    imageObj1.src = ee.src;

}


