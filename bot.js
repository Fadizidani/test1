const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("603365104397975577")
setInterval(function() {
channel.send(`Yaser`);
}, 30)
})

client.login(process.env.BOT_TOKEN);