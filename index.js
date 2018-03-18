const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {

    if(message.content == 'ping') {
        message.reply('pong')
    }
});

bot.login("NDI0OTE1ODY1MzMxMzAyNDAw.DY_3Mg._kPh3apVAFt5J4qo4LsrFpMbzxA");

