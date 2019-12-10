var firebase = require("firebase"); 
var { Board, Led } = require("johnny-five");
var board = new Board();

board.on("ready", () => {
  var led_azul = new Led(10);
  var led_verde = new Led(9);
  var led_vermelho = new Led(11);
  //console.log(led);
  board.repl.inject({
    led_azul : led_azul,
    led_verde : led_verde,
    led_vermelho : led_vermelho
  });

  var config = {
    apiKey: "AIzaSyD5gbUbS1_dX5wd-XUS3mvLFYBHHZ3IqpU",
    authDomain: "tcunip-cc.firebaseapp.com",
    databaseURL: "https://tcunip-cc.firebaseio.com",
    projectId: "tcunip-cc",
    storageBucket: "tcunip-cc.appspot.com",
    messagingSenderId: "sender-id",
    appID: "app-id",
  };

  firebase.initializeApp(config);   

 
  var starCountRef = firebase.database().ref('led').on('value', function(snapshot) {
    let led2 = snapshot.val();

    if (led2 == 'azul'){
      led_azul.pulse();
      led_verde.stop();
      led_verde.off();
      led_vermelho.stop();
      led_vermelho.off();
    } 
    
    else if (led2 == 'vermeio') {

        led_vermelho.blink();
        led_verde.stop();
        led_verde.off();
        led_azul.stop();
        led_azul.off();
    }

    else if (led2 == 'verde') {
        led_vermelho.stop();
        led_vermelho.off();
        led_azul.stop();
        led_azul.off();
        led_verde.blink();
    }

    else {

      led_vermelho.stop();
      led_vermelho.off();
      led_azul.off();
      led_azul.stop();
      led_verde.off();
      led_verde.stop();
    }

  }); 

});


