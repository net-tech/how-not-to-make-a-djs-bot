const { MessageEmbed } = require('discord.js')
const discord = require('discord.js')
const PREFIX = require('../config.json')
module.exports = {
  name: 'help',
  description: 'Displays this message.',
  execute(message, args) {
    const { MessageEmbed } = require('discord.js') // what are we doin rn
    const embed = new discord.MessageEmbed()
    .setTitle('Help Menu')
    .setColor('#195EFF')

for (let [name, command] of message.client.commands) {
    embed.addField(name, command.description)
}

message.channel.send(embed)
      }
  }