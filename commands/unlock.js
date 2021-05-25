const {MessageEmbed} = require('discord.js')
const Discord = require('discord.js')
module.exports = {
name: "unlock",
description: "Unlock Command",
execute(message, args) {

  let myRole = message.mentions.roles.first()
  if(!myRole) myRole = message.guild.roles.everyone
  if(!message.member.hasPermission("ADMINISTRATOR")) { return message.channel.send('You need Admin permission to perform this command!'); }

  message.channel.updateOverwrite(myRole, { SEND_MESSAGES: true, VIEW_CHANNEL: true});
  message.reply('Successfully unlocked this channel!')
  }
}