const {MessageEmbed} = require('discord.js')
const Discord = require('discord.js')
module.exports = {
  name: 'ping',
  description: 'Returns the ping.',
  execute(message, args) {
  const embed = new Discord.MessageEmbed()
  .setColor('#195EFF')
  .setDescription(`:ping_pong: Pong! ${message.client.ws.ping}ms :ping_pong:`)
        message.channel.send(embed)
    }
}