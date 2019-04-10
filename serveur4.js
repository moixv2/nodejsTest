var http = require('http');

var server = http.createServer(function(req, res){
  res.writeHead(200);
  res.end('salut tout le monde');
});

server.on('close', function(){
  //on écoute l'évènement close
  console.log('bye bye');
})

server.listen(8080); // démarre le serveur

server.close(); // arrete le serveur. Declenche l'evenement close
