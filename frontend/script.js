const SOCKETSERVER = "ws://localhost:8080/"

// function startCommunicationWithServer() {
//     const Socket = new WebSocket(SOCKETSERVER, 'echo-protocol')

//     Socket.onopen(ev => {
//         console.log('SUCESSo')
//     })

// }


// startCommunicationWithServer()

function WebSocketTest() {
            
    if ("WebSocket" in window) {
       console.log("WebSocket is supported by your Browser!");
       
       // Let us open a web socket
       var ws = new WebSocket(SOCKETSERVER, 'echo-protocol');
        
       ws.onopen = function() {
          
          // Web Socket is connected, send data using send()
          ws.send("Message to send");
          console.log("Message is sent...");

          function sendNumber() {
            if (ws.readyState === 1) {
                var number = Math.round(Math.random() * 0xFFFFFF);
                ws.send(number.toString());
                setTimeout(sendNumber, 5);
            }
        }
        sendNumber();
       };
        
       ws.onmessage = function (evt) { 
          var received_msg = evt.data;
          console.log("Message is received...");
       };
        
       ws.onclose = function() { 
          
          // websocket is closed.
          console.log("Connection is closed..."); 
       };


    
    } else {
      
       // The browser doesn't support WebSocket
       console.log("WebSocket NOT supported by your Browser!");
    }
 }

 WebSocketTest()