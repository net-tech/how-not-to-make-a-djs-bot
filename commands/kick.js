const {MessageEmbed} = require('discord.js')//wrong bot, we are doing dia ;hello?? am here;ok lets switch to dia pls
const Discord = require('discord.js')
module.exports = {
  name: 'kick',
  description: 'Kicks the specified user.',
  execute(message, args) {
    
    if (!message.member.hasPermission("KICK_MEMBERS")){
        message.channel.send(new Discord.MessageEmbed().setDescription('You cannot do that, the kick members permission is required for this command.').setColor('RED'))
        return;
    }
    
    const member = message.mentions.users.first();
    if(member){
      const memberTarget = message.guild.members.cache.get(member.id)
      memberTarget.kick();
      message.channel.send(new Discord.MessageEmbed().setDescription('The user has been kicked.').setColor('GREEN'))
    }else{
      message.channel.send(new Discord.MessageEmbed().setDescription('Please mention or type the user-id of the member you want to kick.').setColor('RED'))
    }
  }
}
