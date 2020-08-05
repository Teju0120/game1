// coin grouping:
var group3 = new Konva.Group({
    x: 0,
    y: 0,
});
layer.add(group3);

// player coins:
var circles = [];
var coinWidth = 20;
var circle_list = [];
 //LEFT COINS
 circles.push({x:width*(16/100),y:height*(47/100)});
 circles.push({x:width*(16/100), y:height*(56/100)});
 // UPER COINS
circles.push({x:width*(48/100),y:height*(30/100)});
circles.push({x: width*(52/100), y:height*(30/100)});
//down coins
circles.push({x:width*(48/100), y:height*(69/100)});
circles.push({x:width*(52/100), y:height*(69/100)});
// right side
circles.push({x:width*(84/100),y:height*(47/100)});
circles.push({x:width*(84/100), y:height*(56/100),bug:"    "});


let coin_number_objects = [];
let cointNumbers = [];
let circle1,cc,bug;
for (var i =0; i<circles.length; i++) {
    cc = circles[i];
    bug = cc.bug || "";
    circle1 = new Konva.Circle({
        x: parseInt(cc.x),
        y: cc.y,
        radius: coinWidth,
        fill: 'black',
        stroke: 'red',
        strokeWidth: 3,
        name: "coin" + i,
        id:"coin#"+ i
    });
    circle1.on('click', function () {
        this.fill("yellow");
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
    group3.add(simpleText)


      var amplitude = 250;
      // in ms
      var period = 4;
      var centerX = stage.width() / 2;
      var centerY = stage.height()/2;

      var anim = new Konva.Animation(function (frame) {
        circle1.x(
          amplitude * Math.sin((frame.time * 5 * Math.PI) / period) + centerX
        );
      }, layer);

      document.getElementById('start').addEventListener(
        'click',
        function () {
          anim.start();
        },
        false
      );

      document.getElementById('stop').addEventListener(
        'click',
        function () {
          anim.stop();
        },
        false
      );



}
// to align text in the middle of the screen, we can set the
// shape offset to the center of the text shape after instantiating it
function getNextNumber() {
    let n = Math.floor((Math.random() * 50) + 1);
    while (cointNumbers.includes(n) && cointNumbers.length < 50){
        n = Math.floor((Math.random() * 50) + 1)

    }
    if(cointNumbers.length>=50){
        alert("coint got fulled")
    }
    cointNumbers.push(n);
    return n
}
simpleText.offsetX(simpleText.width() / 2);
layer.draw();

