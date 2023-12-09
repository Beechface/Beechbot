const config = require('../../../config');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('invite')
		.setDescription('Invite the bot to your own server.'),
	async execute(interaction, client) {
		let emb = new MessageEmbed()
			.setTitle(`Invite ${config.general.botName} to your server.`)
			.setDescription(`[Invite ${config.general.botName} to your server](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=${config.general.clientPerms}&scope=applications.commands%20bot)!`)
			.setTimestamp()
			.setFooter(config.embeds.embedFooterText)
			.setColor(config.embeds.embedColor);
		await interaction.reply({embeds: [emb]});
	}
};
