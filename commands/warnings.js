const {MessageEmbed} = require('discord.js')
const Discord = require('discord.js')
const db = require("quick.db")
module.exports = {
name: "warnings",
description: "Gets the warnings of the specified user.",
async execute(message, args) {
  const user = message.mentions.members.first() || message.author

  let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)

  if(warnings === null) warnings = 0;

  let NoWarnsEmbed = new MessageEmbed()
    .setColor('GREEN')
    .setTitle(`Warnings for ${user.username}`)
    .setDescription(`${user.username} has ${warnings} warnings.`)
    message.channel.send(NoWarnsEmbed)
    return
  }
}