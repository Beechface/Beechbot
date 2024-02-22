const fs = require('fs');
var checkname = require('../../assets/checkname');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, Permissions } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('name')
		.addIntegerOption(option => option.setName('number').setDescription('The number of names you want to generate. Default 20.'))
		.addStringOption(option => option.setName('prefix').setDescription('The prefix you wish to generate with.'))
		.addStringOption(option => option.setName('suffix').setDescription('The suffix you wish to generate with.'))
		.setDescription('Generate a number of random names.'),
	async execute(interaction, client) {
		function gen(list){
			return list[Math.floor(Math.random() * list.length)];
		}
		let num = interaction.options.getInteger('number');
		let uPrefix = interaction.options.getString('prefix');
		let uSuffix = interaction.options.getString('suffix');
		
		if (!num) num = 20;
		const prefix = fs.readFileSync('./src/assets/prefixlist.txt').toString().split(",");
		const suffix = fs.readFileSync('./src/assets/suffixlist.txt').toString().split(",");
		
		var randomPrefix, randomSuffix;
		var reply = '';
		var arr = [];
		
		
		for(i=0;i<num;i++){
			if(!!uPrefix && !uSuffix){
				for(k=0;k<prefix.length;k++){
					if(uPrefix.toLowerCase() == 'grey') {randomPrefix = 'gray';}
					if(uPrefix.toLowerCase() == prefix[k]){
						var randomPrefix = uPrefix;
						var randomSuffix = gen(suffix);
						while(!checkname.isValid(randomPrefix.toLowerCase(),randomSuffix.toLowerCase())){
							randomSuffix = gen(suffix);
							checkname.isValid(randomPrefix.toLowerCase(),randomSuffix.toLowerCase())
						}
						for(j=0;j<i;j++) {
							if(randomPrefix.toLowerCase()+randomSuffix.toLowerCase()==arr[j]) {
								randomSuffix = gen(suffix);
							}
						}
					}
				}
				if(randomPrefix == undefined){
					console.log(`Invalid Prefix: ` + uPrefix + `\n`);
					return interaction.reply({content: 'You did not specify a valid prefix.', ephemeral: true });
				}
			}
			else if(!uPrefix && !!uSuffix){
				for(k=0;k<suffix.length;k++){
					if(uSuffix.toLowerCase() == suffix[k]){
						var randomSuffix = uSuffix;
						var randomPrefix = gen(prefix);
						while(!checkname.isValid(randomPrefix.toLowerCase(),randomSuffix.toLowerCase())){
							randomPrefix = gen(prefix);
							checkname.isValid(randomPrefix.toLowerCase(),randomSuffix.toLowerCase())
						}
						for(j=0;j<i;j++) {
							if(randomPrefix.toLowerCase()+randomSuffix.toLowerCase()==arr[j]) {
								randomPrefix = gen(prefix);
							}
						}
					}
				}
				if(randomSuffix == undefined){
					console.log(`Invalid Suffix: ` + uSuffix + `\n`);
					return interaction.reply({content: 'You did not specify a valid suffix.', ephemeral: true });
				}
			}
			else if(!!uPrefix && !!uSuffix){
				return interaction.reply({content: 'Specify a prefix or suffix, but not both.', ephemeral: true });
			}
			else if(!uPrefix && !uSuffix) {
				var randomPrefix = gen(prefix);
				var randomSuffix = gen(suffix);
				while(!checkname.isValid(randomPrefix.toLowerCase(),randomSuffix.toLowerCase())){
					randomSuffix = gen(suffix);
					checkname.isValid(randomPrefix.toLowerCase(),randomSuffix.toLowerCase())
				}
				for(j=0;j<i;j++) {
					if(randomPrefix.toLowerCase()+randomSuffix.toLowerCase()==arr[j]) {
						var randomSuffix = gen(suffix);
					}
				}
			}
			
			if(randomPrefix !== undefined && randomSuffix !== undefined){			
				if( randomPrefix.charAt(randomPrefix.length - 1) == randomSuffix.charAt(0) ) {
					arr[i] = randomPrefix.toLowerCase() + randomSuffix.toLowerCase();
					reply += '\n' + randomPrefix.charAt(0).toUpperCase() + randomPrefix.slice(1).toLowerCase() + "-" + randomSuffix.toLowerCase();
				}
				else {
					arr[i] = randomPrefix.toLowerCase() + randomSuffix.toLowerCase();
					reply += '\n' + randomPrefix.charAt(0).toUpperCase() + randomPrefix.slice(1).toLowerCase() + randomSuffix.toLowerCase();
				};
			}
		}
		
		await interaction.reply(reply);
	}
};
