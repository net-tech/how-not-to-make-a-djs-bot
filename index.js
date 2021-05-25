require('dotenv').config()
const {INVITE, PREFIX, STATUS} = require('./config.json')
const Discord = require('discord.js')
const client = new Discord.Client()
const fs = require('fs')

client.commands = new Discord.Collection();
const commands = fs.readdirSync(process.cwd()+/commands/).filter(d => d.endsWith('.js'));
for (let command of commands) {
let cmd = require(process.cwd()+`/commands/${command}`);
client.commands.set(cmd.name, cmd);
}

client.once('ready', () => {
    console.log('Ready')
      client.user.setActivity(STATUS)
        client.guilds.cache.forEach(guild => {
        console.log(`${guild.name} | ${guild.id}`);
      })
})

client.on('message', message => {
    if(!message.content.startsWith(PREFIX) || message.author.bot) return

    const args = message.content.slice(PREFIX.length).split(/ +/)
    const command = args.shift().toLowerCase()

    if(command === 'ping') {
        client.commands.get('ping').execute(message, args)
    }
})

client.on('message', message => {
    if(!message.content.startsWith(PREFIX) || message.author.bot) return

    const args = message.content.slice(PREFIX.length).split(/ +/)
    const command = args.shift().toLowerCase()

    if(command === 'purge') {
        client.commands.get('purge').execute(message, args)
    }
})

client.on('message', message => {
    if(!message.content.startsWith(PREFIX) || message.author.bot) return

    const args = message.content.slice(PREFIX.length).split(/ +/)
    const command = args.shift().toLowerCase()

    if(command === 'slowmode') {
        client.commands.get('slowmode').execute(message, args)
    }
})

client.on('message', message => {
    if(!message.content.startsWith(PREFIX) || message.author.bot) return

    const args = message.content.slice(PREFIX.length).split(/ +/)
    const command = args.shift().toLowerCase()

    if(command === 'help') {
        client.commands.get('help').execute(message, args)
    }
})

client.on('message', message => {
    if(!message.content.startsWith(PREFIX) || message.author.bot) return

    const args = message.content.slice(PREFIX.length).split(/ +/)
    const command = args.shift().toLowerCase()

    if(command === 'kick') {
        client.commands.get('kick').execute(message, args)
    }
})

client.on('message', message => {
    if(!message.content.startsWith(PREFIX) || message.author.bot) return

    const args = message.content.slice(PREFIX.length).split(/ +/)
    const command = args.shift().toLowerCase()

    if(command === 'ban') {
        client.commands.get('ban').execute(message, args)
    }
})

client.on('message', message => {
    if(!message.content.startsWith(PREFIX) || message.author.bot) return

    const args = message.content.slice(PREFIX.length).split(/ +/)
    const command = args.shift().toLowerCase()

    if(command === 'mute') {
        client.commands.get('mute').execute(message, args)
    }
})

client.on('message', message => {
    if(!message.content.startsWith(PREFIX) || message.author.bot) return

    const args = message.content.slice(PREFIX.length).split(/ +/)
    const command = args.shift().toLowerCase()

    if(command === 'unmute') {
        client.commands.get('unmute').execute(message, args)
    }
})

client.on('message', message => {
    if(!message.content.startsWith(PREFIX) || message.author.bot) return

    const args = message.content.slice(PREFIX.length).split(/ +/)
    const command = args.shift().toLowerCase()

    if(command === 'unban') {
        client.commands.get('unban').execute(message, args)
    }
})

client.on('message', message => {
    if(!message.content.startsWith(PREFIX) || message.author.bot) return

    const args = message.content.slice(PREFIX.length).split(/ +/)
    const command = args.shift().toLowerCase()

    if(command === 'lock') {
        client.commands.get('lock').execute(message, args)
    }
})

client.on('message', message => {
    if(!message.content.startsWith(PREFIX) || message.author.bot) return

    const args = message.content.slice(PREFIX.length).split(/ +/)
    const command = args.shift().toLowerCase()

    if(command === 'unlock') {
        client.commands.get('unlock').execute(message, args)
    }
})

client.on('message', message => {
    if(!message.content.startsWith(PREFIX) || message.author.bot) return

    const args = message.content.slice(PREFIX.length).split(/ +/)
    const command = args.shift().toLowerCase()

    if(command === 'lockdown') {
        client.commands.get('lockdown').execute(message, args)
    }
})

client.on('message', message => {
    if(!message.content.startsWith(PREFIX) || message.author.bot) return

    const args = message.content.slice(PREFIX.length).split(/ +/)
    const command = args.shift().toLowerCase()

    if(command === 'warn') {
        client.commands.get('warn').execute(message, args)
    }
})

client.on('message', message => {
    if(!message.content.startsWith(PREFIX) || message.author.bot) return

    const args = message.content.slice(PREFIX.length).split(/ +/)
    const command = args.shift().toLowerCase()

    if(command === 'userinfo') {
        client.commands.get('userinfo').execute(message, args)
    }
})

client.on('message', message => {
    if(!message.content.startsWith(PREFIX) || message.author.bot) return

    const args = message.content.slice(PREFIX.length).split(/ +/)
    const command = args.shift().toLowerCase()

    if(command === 'warnings') {
        client.commands.get('warnings').execute(message, args)
    }
})

client.on('message', message => {
    if(!message.content.startsWith(PREFIX) || message.author.bot) return

    const args = message.content.slice(PREFIX.length).split(/ +/)
    const command = args.shift().toLowerCase()

    if(command === 'resetwarns') {
        client.commands.get('resetwarns').execute(message, args)
    }
})


client.login(process.env.TOKEN)