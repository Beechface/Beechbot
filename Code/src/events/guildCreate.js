var blocklist = require('../assets/blocklist');

module.exports = {
	name: 'guildCreate',
	async execute(guild, client) {
		if(blocklist.block(guild.ownerId) == true) {
			console.log(`Blocked ${guild.name} (${guild.id})! Owner: ${guild.ownerId}`);
			client.guilds.cache.get(guild.id).leave();
		}
		else if (blocklist.block(guild.ownerId) == false) {
			console.log(`Added to ${guild.name} (${guild.id})! Owner: ${guild.ownerId}`);
		}
	}
};