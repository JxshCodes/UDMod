const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "ping",
  aliases: [],
  description: "Pong! I Win lol",
  usage: "Ping",
  run: async (client, message, args) => {
    //Start
    message.delete();

    const embed = new MessageEmbed()
      .setColor(Color)
      .setDescription(`Pong - ${client.ws.ping}`)
      .setFooter(`Requested By ${message.author.username} (Created by Jxsh)`)
      .setTimestamp();

    message.channel.send(embed);

    //End
  }
};
