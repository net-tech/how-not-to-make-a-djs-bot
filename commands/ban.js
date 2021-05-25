const {MessageEmbed} = require('discord.js')
const Discord = require('discord.js')
module.exports = {
  name: 'ban',
  description: 'Bans the specified user.',
  execute(message, args) {
    
    if (!message.member.hasPermission("BAN_MEMBERS")){
        let MissingPermsBanEmbed = new MessageEmbed()
        .setColor("RED")
        .setDescription("You cannot do that, the ban members premmision is required for this command.")
        message.channel.send(MissingPermsBanEmbed)
        return
    }
    
    const member = message.mentions.users.first();
    if(member){
        let wreason = args.slice(1).join(" "); 
        if (!wreason) wreason = `[Banned by ${message.member}] No Reason`;
      const memberTarget = message.guild.members.cache.get(member.id)
      memberTarget.ban(wreason)
      message.channel.send(new Discord.MessageEmbed().setDescription(`The user has been banned because "${wreason}"`).setColor('GREEN'))
    }else{
     let NoUseroBanEmbed = new MessageEmbed()
     .setColor("RED")
     .setDescription("Please mention or type te user-ID of the member you want to ban.")
     message.channel.send(NoUseroBanEmbed)
    }
  }
}