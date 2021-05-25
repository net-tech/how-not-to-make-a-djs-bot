const Discord = require('discord.js');
module.exports = {
  name: 'slowmode',
  description: 'Sets slowmode for a Channel',
  async execute(message, args) {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
      message.channel.send(new Discord.MessageEmbed().setDescription('You cannot do that, the manage messages premmision is required for this command.').setColor('RED'))
      return;
    }

    if (!args[0]) return message.channel.send(new Discord.MessageEmbed().setDescription('Invalid Args: What do you want the slowmode to be set to?').setColor('RED'));
    if (isNaN(args[0])) return message.channel.send(new Discord.MessageEmbed().setDescription('Please type a real number!').setColor('RED'));
    if (args[0] > 21600 || args[0] < 1) return message.channel.send(new Discord.MessageEmbed().setDescription('Number must be between 1 - 21600').setColor('RED'))

    const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[1]) || message.channel

    channel.setRateLimitPerUser(args[0])
    message.channel.send(new Discord.MessageEmbed().setDescription(`Slowmode set to ${args[0]}s.`).setColor('#195EFF'))
    return;

    message.channel.send(new Discord.MessageEmbed().setDescription(`Slowmode set to ${args[0]}s.`).setColor('#195EFF'))

      .catch((e) => {
        message.channel.send('Error Occured!')
        e ? console.error(e) : console.log('Uknown Error')
      })
  }
}