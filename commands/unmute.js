const Discord = require('discord.js');
module.exports = {
  name: 'unmute',
  description: 'Unmutes the specified.',
  execute(message, args){
        const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Member');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

            let memberTarget= message.guild.members.cache.get(target.id);

            memberTarget.roles.remove(muteRole.id);
            memberTarget.roles.add(mainRole.id);
            message.channel.send(new Discord.MessageEmbed().setDescription(`<@${memberTarget.user.id}> has been unmuted.`).setColor('GREEN'))
        } else{
            message.channel.send
            const embed = new Discord.MessageEmbed()
            .setTitle('Error')
            .setDescription('An error occured, please check the following things: 1.) The user-id is typed or the user is mentioned ;')
            .setColor('RED')
            .setTimestamp()
            message.channel.send(embed)
        }
    }
}