const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pongg');
  	}
});


client.on("message", message => {
  if(message.content.startsWith("!banner")) {
    if(message.guild.bannerURL === null || message.guild.bannerURL === undefined) return message.channel.send("his server doesn't have a banner.");
    const ba = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setDescription(`[Banner URL](${message.guild.bannerURL}?size=2048)`)
    .setImage(message.guild.bannerURL + "?size=2048")
    message.channel.send({embed : ba})
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
