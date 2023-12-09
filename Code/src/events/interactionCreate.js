var blocklist = require('../assets/blocklist');

module.exports = {
	name: 'interactionCreate',
	async execute(interaction, client) {
		if (!interaction.isCommand()) return;
		
		const command = client.commands.get(interaction.commandName);
		if (!command) return;
		
		if(blocklist.block(interaction.user.id) == true) {
			return interaction.reply({content: 'You do not have permission to use Beechface.', ephemeral: true });
		}
		else if (blocklist.block(interaction.user.id) == false) {
			if (!interaction.channel || !interaction.guild) {
				console.log(`${interaction.commandName} in DMs\nBy ${interaction.user.tag} (#${interaction.user.id})`);
			}
			else {
				console.log(`${interaction.commandName} in ${interaction.guild} (#${interaction.guild.id})\nBy ${interaction.user.tag} (#${interaction.user.id})`);
			}
		
			try {
				await command.execute(interaction, interaction.client);
			} catch (error) {
				console.log(`${error}`);
				await interaction.reply({ content: 'There was an error executing this command.', ephemeral: true });
			}
		}
	}
};