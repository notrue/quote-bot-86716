const http = require('http');
var port = process.env.PORT || 5000;

//--
//create a server object:
var server = http.createServer(function (req, res) {
    console.log("listening on " + port);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hello World!'); //write a response to the client
    res.end(); //end the response
});

server.listen(port); //the server object listens on port 8080
//heroku config:set PORT=3000


const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {

    if(message.content == 'ping') {
        message.reply('pong')
    }
});

bot.login("NDI0OTE1ODY1MzMxMzAyNDAw.DY_3Mg._kPh3apVAFt5J4qo4LsrFpMbzxA");
