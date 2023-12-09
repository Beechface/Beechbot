const fs = require('fs');
var checkname = require('../../assets/checkname');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, Permissions } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('valid')
		.addStringOption(option => option.setName('prefix').setDescription('Prefix').setRequired(true))
		.addStringOption(option => option.setName('suffix').setDescription('Suffix').setRequired(true))
		.setDescription('Checks validity of a full name.'),
	async execute(interaction, client) {
		let uPrefix = interaction.options.getString('prefix');
		let uSuffix = interaction.options.getString('suffix');
		
		const prefix = fs.readFileSync('./src/assets/prefixlist.txt').toString().split(",");
		const suffix = fs.readFileSync('./src/assets/suffixlist.txt').toString().split(",");
		
		var reply = '';
		
		if(uPrefix.toLowerCase() == 'grey') {uPrefix = 'gray';}
		if(!uPrefix || !uSuffix) {
			return interaction.reply({content: 'Specify both a prefix and a suffix.', ephemeral: true });
		}
		else if(!checkname.isValid(uPrefix.toLowerCase(),uSuffix.toLowerCase())) {
			var reply = 'The name ' + uPrefix.charAt(0).toUpperCase() + uPrefix.slice(1).toLowerCase() + uSuffix.toLowerCase() + ' is not valid.';
		}
		else if(checkname.isValid(uPrefix.toLowerCase(),uSuffix.toLowerCase())) {
			var reply = 'The name ' + uPrefix.charAt(0).toUpperCase() + uPrefix.slice(1).toLowerCase() + uSuffix.toLowerCase() + ' is valid.';
		}
		
		await interaction.reply(reply);
	}
};
