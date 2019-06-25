const commando = require('discord.js-commando');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.channel.sendMessage('pong');
  	}
});

client.on('message', message => {
    if (message.content === 'hello') {
    	message.channel.sendMessage('hello,' + message.author);
  	}
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
