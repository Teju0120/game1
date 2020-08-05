// payers grouping:
var group1 = new Konva.Group({
    x: 0,
    y: 0,

});
layer.add(group1);

var playerwidth = width/18;

// players images:
var playerimgs = [];
//down side image
playerimgs.push({x:width*(47/100),y:height*(80/100), src:'https://image.shutterstock.com/image-vector/arab-man-portrait-260nw-409360072.jpg'});
//right side image
playerimgs.push({x:width*(94.5/100),y:height*(45/100), src:'https://image.shutterstock.com/image-vector/arab-man-portrait-260nw-409360072.jpg'});
//top side image
playerimgs.push({x:width*(47/100),y:height/22-height/22, src:'https://image.shutterstock.com/image-vector/arab-man-portrait-260nw-409360072.jpg'});
//left side image
playerimgs.push({x:0,y:height*(45/100), src:'https://image.shutterstock.com/image-vector/arab-man-portrait-260nw-409360072.jpg'});

let playerimg1,ee, imageObj1;
for (var j =0; j<playerimgs.length; j++){
    ee = playerimgs[j];
    imageObj1 = new Image();
    imageObj1.onload = function () {

       layer.batchDraw();
    };
     playerimg1 = new Konva.Image({
            x: ee.x,
            y: ee.y,
            image: imageObj1,
            width: playerwidth,
            height: playerwidth,
        });


        // add the shape to the layer
        group1.add(playerimg1);

    imageObj1.src = ee.src;

}

// player name boxes:
var nameboxes =[];
var nameboxes_list = [];

// down name box
nameboxes.push({x:width*(47/100),y:height*(92/100)});
// right name box
nameboxes.push({x:width*(94.5/100),y:height*(54.5/100)});
// top name box
nameboxes.push({x:width*(47/100),y:height/7.1-height/22});
// left name box
nameboxes.push({x:0,y:height*(54.5/100)});

let namebox,ff;
let nameid__list = [];
for (var k =0; k<nameboxes.length; k++) {
    ff = nameboxes[k];
    namebox = new Konva.Rect({
        x: ff.x,
        y: ff.y,
        width: width / 18,
        height: height / 27,
        fill: 'white ',
        stroke: 'black',
        strokeWidth: 3,
    });
    nameboxes_list.push(namebox);
    group1.add(namebox);


    var playerid = new Konva.Text({
        x: parseInt(ff.x) + 11,
        y: ff.y + 3,
        text: "pavan123",
        fontSize: 17,
        fontFamily: 'Geomanist-Bold',
        fill: 'black',
    });
    nameid__list.push(playerid);
    group1.add(playerid);


    // player wallet:
    var walletboxes = [];
    var walletboxes_list = [];

// down name box
    walletboxes.push({x: width * (47 / 100), y: height * (96 / 100)});
// right name box
    walletboxes.push({x: width * (94.5 / 100), y: height * (54.5 / 100)});
// top name box
    walletboxes.push({x: width * (47 / 100), y: height / 7.1 - height / 22});
// left name box
    walletboxes.push({x: 0, y: height * (40.8 / 100)});

    let walletbox, gg;
    let walletmoney_list = [];
    for (var l = 0; l < walletboxes.length; l++) {
        gg = walletboxes[l];
        walletbox = new Konva.Rect({
            x: gg.x,
            y: gg.y,
            width: width / 18,
            height: height / 27,
            fill: 'white ',
            stroke: 'black',
            strokeWidth: 3,
        });
        walletboxes_list.push(walletbox);
        group1.add(walletbox);


        var walletmoney = new Konva.Text({
            x: parseInt(gg.x) + 11,
            y: gg.y + 3,
            text: "50 RS",
            fontSize: 17,
            fontFamily: 'Geomanist-Bold',
            fill: 'black',
        });
        walletmoney_list.push(walletmoney);
        group1.add(walletmoney);
    }

}