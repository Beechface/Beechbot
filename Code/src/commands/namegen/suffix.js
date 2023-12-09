const fs = require('fs');
const search = require('discord.js-search');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, Permissions } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('suffix')
		.addIntegerOption(option => option.setName('number').setDescription('The number of suffixes you want to generate. Default 20.'))
		.setDescription('Generate a number of random suffixes.'),
	async execute(interaction, client) {
		function gen(list){
			return list[Math.floor(Math.random() * list.length)];
		}
		let num = interaction.options.getInteger('number');
		if (!num) num = 20;
		const suffix = fs.readFileSync('./src/assets/suffixlist.txt').toString().split(",");
		var reply = '';
		var arr = [];
		for(i=0;i<num;i++){
			var randomSuffix = gen(suffix);
			for(j=0;j<i;j++) {
				if(randomSuffix==arr[j]) {
					var randomSuffix = gen(suffix);
				}
			}
			arr[i] = randomSuffix;
			reply += '-' + arr[i] + '\n';
		}
		await interaction.reply(reply);
	}
};