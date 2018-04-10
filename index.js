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

var messages = [];
bot.on('message', (message) => {

    //store message
    messages.push(message);
    let upMsg = message.content.toUpperCase();
    console.log(upMsg);
    if(upMsg === 'ping'.toUpperCase()) {
        message.reply('pong _' + message.author + '_')
    } else if(upMsg === '/del'.toUpperCase() 
            || upMsg === '/clear'.toUpperCase() 
            || upMsg === '/delete'.toUpperCase()) {
                message.reply('Deleting... please wait');
                console.log('webhook: ' + message.webhookID + ', ' + !message.webhookID);
                clear();
                //if (message.webhookID != null 
                  //  && message.member.hasPermission("MANAGE_MESSAGES")) {
                    message.channel.fetchMessages()
                       .then(function(list){
                            message.channel.bulkDelete(list);
                        }, function(err){message.channel.send("ERROR: ERROR CLEARING CHANNEL.")})                        
                //}
                //messages = [];
    }
});

function clear() {
    this.bot.deleteMessages(messages);
    messages = [];
}

bot.login("NDI0OTE1ODY1MzMxMzAyNDAw.DY_3Mg._kPh3apVAFt5J4qo4LsrFpMbzxA");
