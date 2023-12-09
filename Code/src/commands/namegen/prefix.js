const fs = require('fs');
const search = require('discord.js-search');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, Permissions } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('prefix')
		.addIntegerOption(option => option.setName('number').setDescription('The number of prefixes you want to generate. Default 20.'))
		.setDescription('Generate a number of random prefixes.'),
	async execute(interaction, client) {
		function gen(list){
			return list[Math.floor(Math.random() * list.length)];
		}
		let num = interaction.options.getInteger('number');
		if (!num) num = 20;
		const prefix = fs.readFileSync('./src/assets/prefixlist.txt').toString().split(",");
		var reply = '';
		var arr = [];
		for(i=0;i<num;i++){
			var randomPrefix = gen(prefix);
			for(j=0;j<i;j++) {
				if(randomPrefix==arr[j]) {
					var randomPrefix = gen(prefix);
				}
			}
			arr[i] = randomPrefix;
			reply += arr[i].charAt(0).toUpperCase() + arr[i].slice(1) + '\n';
		}
		await interaction.reply(reply);
	}
};