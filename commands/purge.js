const {MessageEmbed} = require('discord.js')
const Discord = require('discord.js')
module.exports = {
  name: 'purge',
  description: 'Purges the specified number of messages.',
  async execute(message, args) {

    if (!message.member.hasPermission("MANAGE_MESSAGES")){
        message.channel.send(new Discord.MessageEmbed().setDescription('You cannot do that, the manage messages premmision is required for this command.').setColor('RED'))
        return;
    }

    if(!args[0]) return message.reply("Please enter the amount of messages you want to clear");
    if(isNaN(args[0])) return message.reply("Please type a number");
    
    if(args[0] > 100) return messgae.reply("You cannot delete more than 100 messages");
    if(args[0] < 1) return message.reply("You must delete atleast one message");

    await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
      message.channel.bulkDelete(messages);
    });
  }
}