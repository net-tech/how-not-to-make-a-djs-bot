const {MessageEmbed} = require('discord.js')
const Discord = require('discord.js')
const db = require("quick.db")
module.exports = {
name: "warn",
description: "Warns the specified user.",
async execute(message, args) {
  if(!message.member.hasPermission("MANAGE_NICKNAMES")) { 
    let NoPermsEmbed = new MessageEmbed()
    .setColor('RED')
    .setTitle('Error')
    .setDescription('You cannot do that, the manage nicknames premmision is required for this command.')
    message.channel.send(NoPermsEmbed)
    return
  }
  
  const user = message.mentions.users.first()

  if(!user) {

    let NoMentionEmbed = new MessageEmbed()
    .setColor('RED')
    .setTitle('Error')
    .setDescription('Please mention the user that you want to warn ; Syntax: <prefix> warn @user <reason>')
    message.channel.send(NoMentionEmbed)
    return
  }
  
  if(message.mentions.users.first().bot) {
  let NoBotsEmbed = new MessageEmbed()
    .setColor('RED')
    .setTitle('Error')
    .setDescription('You cannot warn bots.')
    message.channel.send(NoBotsEmbed)
    return

  }

  if(message.author.id === user.id) {
    let NoSelfWarn = new MessageEmbed()
    .setColor('RED')
    .setTitle('Error')
    .setDescription('You cannot warn yourself.')
    message.channel.send(NoSelfWarn)
    return

  }

  const reason = args.slice(1).join(" ")

  if(!reason) {
    let NoWarnEmbed = new MessageEmbed()
    .setColor('RED')
    .setTitle('Error')
    .setDescription('Please provied a reason to warn ; Syntax: <prefix> warn @user <reason>')
    message.channel.send(NoWarnEmbed)
    return
  }

  let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)

  if(warnings === null) {
    db.set(`warnings_${message.guild.id}_${user.id}`, 1)
    
    let WarnedDmEmbed = new Discord.MessageEmbed()
    .setColor('ORANGE')
    .setTitle('Notice')
    .setDescription(`You have been warned in ${message.guild.name} for ${reason}`)
    user.send(WarnedDmEmbed)

    let WarnedEmbed = new Discord.MessageEmbed()
    .setColor('ORANGE')
    .setTitle('Notice')
    .setDescription(`You warned ${message.mentions.users.first().username} for ${reason}`)
    message.channel.send(WarnedEmbed)
  } else if(warnings !== null) {
   
    db.add(`warnings_${message.guild.id}_${user.id}`, 1)
    let WarnedDmEmbed = new Discord.MessageEmbed()
    .setColor('ORANGE')
    .setTitle('Notice')
    .setDescription(`You have been warned in ${message.guild.name} for ${reason}`)
    user.send(WarnedDmEmbed)
    
    let WarnedEmbed = new Discord.MessageEmbed()
    .setColor('ORANGE')
    .setTitle('Notice')
    .setDescription(`You warned ${message.mentions.users.first().username} for ${reason}`)
    message.channel.send(WarnedEmbed)
  }

  }
}
