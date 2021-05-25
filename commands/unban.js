const {MessageEmbed} = require('discord.js')
const discord = require('discord.js')
const ms = require('ms');
module.exports = {
  name: 'unban',
  description: 'Unbans the specified user.',
  execute(message, args) {    if(!message.member.hasPermission("BAN_MEMBERS")) {
      return message.channel.send(`**${message.author.username}**, You cannot do that, the ban members premmision is required for this command.`)
    }
    
    if(!message.guild.me.hasPermission("BAN_MEMBERS")) {
      return message.channel.send(`**${message.author.username}**,I do not have the ban members premmision which is required for this command.`)
    }
    
    let userID = args[0]
      message.guild.fetchBans().then(bans=> {
      if(bans.size == 0) return 
      let bUser = bans.find(b => b.user.id == userID)
      if(!bUser) return
      message.guild.members.unban(bUser.user)
      message.channel.send(`User successfully unbanned.`)
    })
  }
}   