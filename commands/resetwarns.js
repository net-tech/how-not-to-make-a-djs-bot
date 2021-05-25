const {MessageEmbed} = require('discord.js')
const Discord = require('discord.js')
const db = require("quick.db")
module.exports = {
  name: "resetwarns",
  description: "Resets the warnings of specified user",
  async execute(message, args) {
    
    if(!message.member.hasPermission("MANAGE_NICKNAMES")) {
    let NoPermsEmbed = new MessageEmbed()
    .setColor('RED')
    .setTitle('Error')
    .setDescription('You cannot do that, the manage nicknames premmision is required for this command.')
    message.channel.send(NoPermsEmbed)
    }
    
    const user = message.mentions.members.first()
    
    if(!user) {
    let NoMentionEmbed = new MessageEmbed()
    .setColor('RED')
    .setTitle('Error')
    .setDescription('Please mention the user whose warning you want to reset.')
    message.channel.send(NoMentionEmbed)
    return
    }
    
    if(message.mentions.users.first().bot) {
    let NoBotsEmbed = new MessageEmbed()
    .setColor('RED')
    .setTitle('Error')
    .setDescription('You cannot lookup the warnings of bots as they cannot be warned.')
    message.channel.send(NoBotsEmbed)
    return
    }
    
    if(message.author.id === user.id) {
      message.channel.send(NoPermsEmbed)
    }
    
    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)
    
    if(warnings === null) {
    let NoWarnsEmbed = new MessageEmbed()
    .setColor('RED')
    .setTitle('Error')
    .setDescription(`${message.mentions.users.first().username} does not have any warnings`)
    message.channel.send(NoWarnsEmbed)
    }
    
    db.delete(`warnings_${message.guild.id}_${user.id}`)
    user.send(`Your all warnings are reseted by ${message.author.username} from ${message.guild.name}`)
    await message.channel.send(`Reseted all warnings of ${message.mentions.users.first().username}`)
    
  
    
}
}