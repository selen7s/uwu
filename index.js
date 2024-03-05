const config = require("./config.json");
const prefix = config.prefix;
const Discord = require("discord.js");
const fs = require('fs');
const createKickBot = require('./kickBot.js');
const createbanBot = require('./banBot.js');
const token = require('./models/tokennts.js');
const { MessageAttachment } = require('discord.js');
const { MessageEmbed, permissionOverwrites, ChannelType, Permissions , MessageButton , MessageActionRow } = require("discord.js");
const { Client, Intents } = require('discord.js');
const client = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS" , "GUILD_PRESENCES" , "GUILD_BANS" , "GUILD_INVITES" , "GUILD_MESSAGE_REACTIONS" , "GUILD_MESSAGE_TYPING" , "DIRECT_MESSAGES" , "DIRECT_MESSAGE_REACTIONS" , "DIRECT_MESSAGE_TYPING"]
});

// Require the ban bot module and pass the Client class
// const banBot = require('./banBot')(Client, ''); ////////// https://youtu.be/gtykpkOYy94

client.on('ready', () => {
  console.log('Bot is online!');
});
const mongoose = require("mongoose");
const db = require("./models/shop");
const user_db = require("./models/user");
const toto = require("./models/steck");
const tokens = require("./models/tokens");
const setSlash = require("./slash");
const axios = require("axios");
const i18n = require('i18n');

i18n.configure({
  locales: ['en', 'ar'],
  directory: __dirname + '/locales',
  defaultLocale: 'en',
  objectNotation: true
});


mongoose.connect("mongodb+srv://behoo:12345Wageh@tuortl.ih3qjnq.mongodb.net/data");


console.log('Connected to MongoDB');
client.on("ready", async () => {
  console.log(client.user.tag);
  await setSlash(client);
});

process.on("unhandledRejection", error => {
  return;
});
process.on("unhandledRejection", error => {
  return;
});
process.on("unhandledRejection", error => {
  return;
});

process.on("unhandledRejection", error => {
  return console.log(error)
});




client.on('ready', () => {
  function abady() {
    let status = [`Xos Level`]
    let S = Math.floor(Math.random() * status.length);
    client.user.setActivity(status[S], { type: 'PLAYING' })
  };
  //ismailmgde
  setInterval(abady, 5000)

})



///////////////////////////// https://youtu.be/gtykpkOYy84   
///


const too = require('./models/tokennts.js')
client.on('messageCreate' , async message => {
    if (message.content.startsWith('-cre')) {
        
        too.findOne({guildId : message.guild.id} , async (data) => {
            if(!data) {
                too.create (
                {
                    guildId : message.guild.id , 
                     botTokens : ['']
                })
            }
        })
        await message.reply ({content : `done`})
    }
})

/// https://youtu.be/gtykpkOYy94

client.login("MTIxMDk2MDk4NDIyMzc4NTAwMQ.G9TJX7.xgtoBQ5M7cySc-IMYaP6g_lTC0w5U94g8l5evI");
createKickBot("MTIxMDk2MDk4NDIyMzc4NTAwMQ.G9TJX7.xgtoBQ5M7cySc-IMYaP6g_lTC0w5U94g8l5evI");