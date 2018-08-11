const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Savage.");
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`**  طلب صغير ممكن تدخل 
  https://discord.gg/eNRjKpd**`) 

}).catch(console.error)
})
client.login(process.env.BOT_TOKEN);
