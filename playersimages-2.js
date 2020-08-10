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
playerimgs.push({x:width*(47.2/100),y:height*(82/100),x1:width*(50/100),y1:height*(89.2/100),rotation: Math.PI*(0), src:'https://scontent.fhyd14-1.fna.fbcdn.net/v/t1.15752-9/117103086_339498113749700_3143721511674086420_n.png?_nc_cat=104&_nc_sid=b96e70&_nc_ohc=T50Fv8m44eAAX-eJCvJ&_nc_ht=scontent.fhyd14-1.fna&oh=3f3a69a79fefa871da66ef78373c7658&oe=5F518564'});
//right side image
playerimgs.push({x:width*(72/100),y:height*(4.2/100),x1:width*(74/100),y1:height*(12.5/100),rotation: Math.PI*(4), src:'https://scontent.fhyd14-1.fna.fbcdn.net/v/t1.15752-9/117148789_926423864546835_7479812040873757060_n.png?_nc_cat=100&_nc_sid=b96e70&_nc_ohc=qyj6Sg-4pfsAX8OHWYA&_nc_ht=scontent.fhyd14-1.fna&oh=ec0c7f5379f81da977e1660237d860ea&oe=5F52EBB6'});
//top side image
playerimgs.push({x:width*(47.3/100),y:0,x1:width*(50/100),y1:height*(7/100),rotation:Math.PI*(0), src:'https://scontent.fhyd14-1.fna.fbcdn.net/v/t1.15752-9/117066001_986931598433141_1111604238353196909_n.png?_nc_cat=109&_nc_sid=b96e70&_nc_ohc=5ZoT7ovlVl8AX9-3m64&_nc_ht=scontent.fhyd14-1.fna&oh=9e338c1a344f35c79201e797fa26cc13&oe=5F5442EB'});
//left side image
playerimgs.push({x:width*(24/100),y:height*(8/100),x1:width*(27.5/100),y1:height*(13/100),rotation: Math.PI*(110), src:'https://scontent.fhyd14-1.fna.fbcdn.net/v/t1.15752-9/117175768_311081560146574_5266424682202564150_n.png?_nc_cat=106&_nc_sid=b96e70&_nc_ohc=1RzVoGGKaAgAX_-_jaQ&_nc_ht=scontent.fhyd14-1.fna&oh=1dad489e04714ada2a6ce0e719569e66&oe=5F540C80'});

let playerimg,ee, imageObj1,circleProfile;
for (var j =0; j<playerimgs.length; j++){
    ee = playerimgs[j];
    imageObj1 = new Image();
    imageObj1.onload = function () {

       layer.batchDraw();
    };

    circleProfile = new Konva.Circle({
        x: ee.x1,
        y: ee.y1,
        radius: 53,
        fill: 'white',
        stroke: 'black',
        strokewidth: 2,
        shadowBlur: 10,
    })
     group1.add(circleProfile);

     playerimg = new Konva.Image({
            x: ee.x,
            y: ee.y,
            rotation: ee.rotation,
            image: imageObj1,
            width: playerwidth,
            height: playerwidth,
        });


        // add the shape to the layer
        group1.add(playerimg);

    imageObj1.src = ee.src;

}

// player name boxes:
var nameboxes =[];
var nameboxes_list = [];

// down name box
nameboxes.push({x:width*(47.5/100),y:height*(97.1/100),rotation: Math.PI*(0)});
// right name box
nameboxes.push({x:width*(70.5/100),y:height*(19/100),rotation: Math.PI*(5)});
// top name box
nameboxes.push({x:width*(47.5/100),y:height*(15.5/100),rotation: Math.PI*(0)});
// left name box
nameboxes.push({x:width*(26/100),y:height*(22.5/100),rotation: Math.PI*(110)});

let namebox,ff;
let nameid__list = [];
for (var k =0; k<nameboxes.length; k++) {
    ff = nameboxes[k];
    namebox = new Konva.Rect({
        x: ff.x,
        y: ff.y,
        rotation: ff.rotation,
        width: width / 20,
        height: height / 38,
        fill: '#D1D0CE',
        shadowBlur: 2,
        cornerRadius: 3,
    });
    nameboxes_list.push(namebox);
    group1.add(namebox);


    var playerid = new Konva.Text({
        x: parseInt(ff.x) + 10,
        y: ff.y + 2,
        text: "pavan123",
        rotation: ff.rotation,
        fontSize: 16,
        fontFamily: 'Geomanist-Bold',
        fill: 'black',
    });
    nameid__list.push(playerid);
    group1.add(playerid);


    // player wallet:
    var walletboxes = [];
    var walletboxes_list = [];

// down walletboxes
    walletboxes.push({x: width * (48.3 / 100), y: height * (93/ 100),rotation: Math.PI*(0)});
// right walletboxes
    walletboxes.push({x: width * (71.9/ 100), y: height * (15.5/ 100),rotation: Math.PI*(5)});
// top walletboxes
    walletboxes.push({x: width * (48.3 / 100), y: height*(11/100) ,rotation: Math.PI*(0)});
// left walletboxes
    walletboxes.push({x: width * (26.5/100), y: height * (18/ 100),rotation: Math.PI*(109)});

    let walletbox, gg;
    let walletmoney_list = [];
    for (var l = 0; l < walletboxes.length; l++) {
        gg = walletboxes[l];
        walletbox = new Konva.Rect({
            x: gg.x,
            y: gg.y,
            width: width /30,
            height: height /40,
            rotation: gg.rotation,
            fill: '#566D7E',
            cornerRadius: 3,
        });
        walletboxes_list.push(walletbox);
        group1.add(walletbox);


        var walletmoney = new Konva.Text({
            x: parseInt(gg.x) + 11,
            y: gg.y + 3,
            text: "50/-",
            rotation: gg.rotation,
            fontSize: 15,
            fontFamily: 'Geomanist-Bold',
            fill: '#FFE87C',
        });
        walletmoney_list.push(walletmoney);
        group1.add(walletmoney);
    }

}

// message box:
var messageBox = new Konva.Rect({
        x: width*(45/100),
        y: height*(40/100),
        width: width*(10/100),
        height: height*(4/100),
        fill: '#493D26',
        shadowBlur: 3,
        cornerRadius: 3,
    });
var messageId = new Konva.Text({
        x: width*(45.2/100),
        y: height*(41/100),
        text: "Welcome, Ready to play",
        fontSize: 15,
        fontFamily: 'Geomanist-Bold',
        fill: 'white',
    });
        group1.add(messageBox,messageId);



// numbers key board:
// numbers grouping:
var groupNum = new Konva.Group({
    x: 0,
    y: height*(93/100),

});
layer.add(groupNum);

// number background:
var numberBack = new Konva.Rect({
    x: 0,
    y: 0,
    width: width,
    height: height*(7/100),
    fill: '#ADD8E6',
    shadowBlur: 15,
  });
    groupNum.add(numberBack);
    group1.add(groupNum);

var numbers = [];
var numberBox_list = [];
    numbers.push({x:width*(1/100),text: '1'});
    numbers.push({x:width*(10/100),text: '2'});
    numbers.push({x:width*(19/100),text: '3'});
    numbers.push({x:width*(28/100),text: '4'});
    numbers.push({x:width*(37/100),text: '5'});
    numbers.push({x:width*(46/100),text: '6'});
    numbers.push({x:width*(55/100),text: '7'});
    numbers.push({x:width*(64/100),text: '8'});
    numbers.push({x:width*(73/100),text: '9'});
    numbers.push({x:width*(82/100),text: '0'});
    numbers.push({x:width*(91/100),text: 'Done'});

let numberBox,bb,numberid;
for (var b =0; b<numbers.length; b++) {
    bb = numbers[b];
    numberBox = new Konva.Rect({
        x: bb.x,
        y: 8,
        width: width*(8/100),
        height: height*(5/100),
        fill: '#808080',
        cornerRadius: 10,
        shadowBlur: 5,
    });

    numberid = new Konva.Text({
        x: bb.x +50,
        y: 14,
        text : bb.text,
        fontSize: 25,
        fontFamily: 'Geomanist-Bold',
        fill: 'white',
    });
     numberBox_list.push(numberBox,numberid);
     groupNum.add(numberBox,numberid);
     group1.add(groupNum);
}
