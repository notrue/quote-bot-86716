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
        message.reply(message.author + ' said: _\"' + message.content + '\"_,\n qUote-bot answered: _\"pong\"_')
    } else if(upMsg === '/del'.toUpperCase() 
            || upMsg === '/clear'.toUpperCase() 
            || upMsg === '/delete'.toUpperCase()) {
                //message.reply('Deleting... please wai');
                console.log('webhook: ' + message.webhookID + ', ' + !message.webhookID);
                //clear();
                //if (message.webhookID != null 
                  //  && message.member.hasPermission("MANAGE_MESSAGES")) {
                      //console.log('bulk: ' + message.channel.bulkDelete + ', ' + bot.sweepMessages);
                      let x = bot.sweepMessages(1000);
                      console.log('deleted!!! -> ' + x);
                    

                    message.channel.fetchMessages()
                        .then((messages) => {
                        /*works ONLY inside channel !!!! not direct chat*/message.channel.bulkDelete(messages.size).then(() => {
                            message.channel.send("Purged 3 messages.").then(m => m.delete(3000));
                        });
                    });



                    if(message.webhookID) {
                        console.log('This is Webhook!!')
                    }
                    else if(false){
                        console.log('This is direct chat! ! ! !');
                        let messagecount = 100;
                        message.channel.fetchMessages({limit: messagecount}).then(messages1 => {console.log(messages1.size + ', ' + messages1.values().next())
                            ; bot.sweepMessages(1)}/*message.channel.bulkDelete(messages1)*/);
                        /*
                        message.channel.fetchMessages()
                            .then((messages1) => {
                                //message.channel.bulkDelete(list);
                                console.log('messages1.length: ' + messages1.length);
                                for(msg of messages1) {
                                    console.log('--->> your message: ' + msg);
                                    msg.reply('new try').then(m => m.delete(3000));
                                }
                                //message.channel.send("Purged 100 messages.").then(m => m.delete(3000));
                            }, function(err){message.channel.send("ERROR: ERROR CLEARING CHANNEL.")});
                        */
                    }
                    
                //}
                //messages = [];
    }
});

 
function clear() {
    console.log('client:' + bot.deleteMessages);
    bot.sweepMessages(1000);
    messages = [];
}

bot.login("NDI0OTE1ODY1MzMxMzAyNDAw.DY_3Mg._kPh3apVAFt5J4qo4LsrFpMbzxA");
