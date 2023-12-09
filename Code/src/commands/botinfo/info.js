const fs = require('fs');
const config = require('../../../config');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('info')
		.setDescription('Info, credits and statistics.'),
	async execute(interaction, client) {
		const prefix = fs.readFileSync('./src/assets/prefixlist.txt').toString().split(",");
		const suffix = fs.readFileSync('./src/assets/suffixlist.txt').toString().split(",");
		let emb = new MessageEmbed()
			.setTitle(`${config.general.botName} Info`)
			.setDescription(`**Prefixes:** ` + prefix.length + `\n**Suffixes:** ` + suffix.length + `\n\n**Avatar by:** [person](link) \n**Created by:** ${config.general.ownerName}`)
			.setTimestamp()
			.setFooter(config.embeds.embedFooterText)
			.setColor(config.embeds.embedColor);
		await interaction.reply({embeds: [emb]});
	}
};
