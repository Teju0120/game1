// coin grouping:
var group3 = new Konva.Group({
    x: 0,
    y: 0,
});
layer.add(group3);

// player coins:
var circles = [];
var circle_list = [];
 //LEFT COINS
 circles.push({x:width*(28/100),y:height*(32/100),radius: 25});
 circles.push({x:width*(32/100), y:height*(30/100),radius: 25});
 // UPER COINS
circles.push({x:width*(48/100),y:height*(26/100),radius: 25});
circles.push({x: width*(52/100), y:height*(26/100),radius: 25});
//down coins
circles.push({x:width*(47/100), y:height*(78/100),radius: 30});
circles.push({x:width*(53/100), y:height*(78/100),radius: 30});
// right side
circles.push({x:width*(74/100),y:height*(31/100),radius: 25});
circles.push({x:width*(70/100), y:height*(29/100),radius: 25,bug:"    "});


let coin_number_objects = [];
let cointNumbers = [];
let circle1,cc,bug;
for (var i =0; i<circles.length; i++) {
    cc = circles[i];
    bug = cc.bug || "";
    circle1 = new Konva.Circle({
        x: parseInt(cc.x),
        y: cc.y,
        radius: cc.radius,
        fill: '#E55451',
        stroke: 'black',
        strokeWidth: 3,
        name: "coin" + i,
        id:"coin#"+ i,
    });
    circle1.on('click', function () {
        this.fill("#E77471");
        let coinId = this.id();
        coinId = coinId.split("#")[1];
        let coinNumberObject = coin_number_objects[coinId];
        coinNumberObject.text(getNextNumber());

        group3.draw()

    });
    circle_list.push(circle1);
    group3.add(circle1);

    var simpleText = new Konva.Text({
        x: parseInt(cc.x)-10,
        y: cc.y-8,
        text : "",
        fontSize: 20,
        stroke: 'black',
        strokeWidth: 2,
        fontFamily: 'Geomanist-Bold',
        fill: 'black',
         listening:false
    });

    coin_number_objects.push(simpleText);
    group3.add(simpleText);

    var velocity = 50;
      max = 50;
      count = 0;

      var anim = new Konva.Animation(function(frame) {
       var dist = velocity * (frame.timeDiff / 1000);
        // count = count + 1;
        // simpleText.text(hexagon.x()  + " | " + count + " | " +frame.timeDiff)
        if(circle1.x() > 530) {
        	circle1.move({x: -dist, y: 1.2});

            }
           else{
           this.stop()
           }
      }, layer);

	anim.start();
   
}
// to align text in the middle of the screen, we can set the
// shape offset to the center of the text shape after instantiating it
function getNextNumber() {
    let n = Math.floor((Math.random() * 41) + 10);
    while (cointNumbers.includes(n) && cointNumbers.length < 40){
        n = Math.floor((Math.random() * 41) + 10)

    }
    if(cointNumbers.length>=40){
        alert("coint got fulled")
    }
    cointNumbers.push(n);
    return n
}
simpleText.offsetX(simpleText.width() / 2);
layer.draw();


// Center Coin:
    var coinCenter = new Konva.Circle({

    x: width/2,
    y: height/1.9,
    radius: 27,
    fill: '#555659',
    stroke: 'black',
    strokeWidth: 3,
   });
   group.add(coinCenter);

// Entry Money text:
    var entrymoneyid = new Konva.Text({
        x: width*(64.2/100),
        y: height*(54/100),
        text : "20",
        fontSize: 25,
        stroke: 'white',
        strokeWidth: 2,
        fontFamily: 'Geomanist-Bold',
        fill: 'black',
        shadowBlur: 5,
    });
    group3.add(entrymoneyid);


// claim money display:
   var claimDisplay = new Konva.Rect({

      x: width*(72.9/100),
      y: height*(70/100),
      width: 100,
      height: 25,
      fill: 'white',
      stroke: 'black',
      strokeWidth: 3,
   });
   claimDisplay.on('click', function () {
       this.fill("yellow");
       group3.draw()
   });
   group3.add(claimDisplay);


// drop buton:
var dropButton = new Konva.Rect({
    x: width*(66/100),
    y: height*(93/100),
    width: width*(8.7/100),
    height: height*(5/100),
    fill: 'red',
    shadowBlur: 10,
    cornerRadius: 10,
  });

// drop text:
var dropText = new Konva.Text({
        x: width*(68.5/100),
        y: height*(94/100),
        text : "Drop",
        fontSize: 25,
        fontFamily: 'Geomanist-Bold',
        fill: 'black',
    });
    group3.add(dropButton,dropText);

// claim button;
var claimButton = new Konva.Rect({
       x: width*(80/100),
       y: height*(93/100),
       width: width*(8.7/100),
       height: height*(5/100),
       fill: 'green',
       shadowBlur: 10,
       cornerRadius: 10,
    });

// claim text:
var claimText = new Konva.Text({
        x: width*(82/100),
        y: height*(94/100),
        text : "Claim",
        fontSize: 25,
        fontFamily: 'Geomanist-Bold',
        fill: 'black',
    });
    group3.add(claimButton,claimText);

// cleaar button:
var clearButton = new Konva.Rect({
    x: width*(79.5/100),
    y: height*(70/100),
    width: 30,
    height: 25,
    fill: '#555659',
    stroke: 'black',
    strokewidth: 3,
  });

// clear symbol:
    var clearSymbol = new Konva.Text({
        x: width*(80.1/100),
        y: height*(70/100),
        text : "x",
        fontSize: 25,
        fontFamily: 'Geomanist-Bold',
        fill: 'white',

    });
    group3.add(clearButton,clearSymbol);

// round  text:
    var round = new Konva.Text({
        x: width* (1/100),
        y: height*(10/100),
        text : "Round No :",
        fontSize: 20,
        fontFamily: 'Geomanist-Bold',
        fill: 'white',
        shadowBlur: 3,
    });
// round number :
    var roundId = new Konva.Text({
        x: width* (8/100),
        y: height*(10/100),
        text : "1",
        fontSize: 20,
        fontFamily: 'Geomanist-Bold',
        fill: 'white',
        shadowBlur: 3,
    });
    group3.add(round,roundId);


// match  text:
    var match = new Konva.Text({
        x: width* (1/100),
        y: height*(15/100),
        text : "Match No :",
        fontSize: 20,
        fontFamily: 'Geomanist-Bold',
        fill: 'white',
        shadowBlur: 3,
    });
// match number:
var matchId = new Konva.Text({
        x: width* (8/100),
        y: height*(15/100),
        text : "1",
        fontSize: 20,
        fontFamily: 'Geomanist-Bold',
        fill: 'white',
        shadowBlur: 3,
    });
    group3.add(match,matchId);

// Exit button:
var exitButton = new Konva.Rect({
       x: width*(35/100),
       y: height*(93/100),
       width: width*(5/100),
       height: height*(5/100),
       fill: 'brown',
       shadowBlur: 10,
       cornerRadius: 10,
    });
var exitId = new Konva.Text({
        x: width* (36.5/100),
        y: height*(94/100),
        text : "Exit",
        fontSize: 20,
        fontFamily: 'Geomanist-Bold',
        fill: 'black',
    });
    group3.add(exitButton,exitId);
