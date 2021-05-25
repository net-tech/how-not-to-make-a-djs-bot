const {MessageEmbed} = require('discord.js')
const discord = require('discord.js')
const ms = require('ms');
module.exports = {
  name: 'mute',
  description: 'Mutes the specified user.',
  execute(message, args) {
        const target = message.mentions.users.first();
        if (target) {

            let mainRole = message.guild.roles.cache.find(role => role.name === 'Member');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

            let memberTarget = message.guild.members.cache.get(target.id);

            if (!args[1]) {
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                message.channel.send(new MessageEmbed().setDescription(`<@${memberTarget.user.id}> has been muted.`).setColor('GREEN'))
                return
            }
            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            message.channel.send(new MessageEmbed().setDescription(`<@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))}`).setColor('GREEN'))

            setTimeout(function () {
                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);
            }, ms(args[1]));
        } else {
            message.channel.send(new MessageEmbed().setDescription('Please mention or type the user-id of the member you want to mute.').setColor('RED'))
        }
    }
}