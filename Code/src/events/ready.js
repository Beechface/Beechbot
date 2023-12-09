module.exports = {
	name: 'ready',
	once: true, 
	async execute(client) {
		console.log(`Logged in as ${client.user.tag}. Ready! \nServer List:`);
		console.log(client.guilds.cache.map(g=>g.name + ` (` + g.id + `) - Owner: ` + g.ownerId).join(`\n`));
		console.log(`\n`);

		//client.guilds.cache.get("1031246737618251937").leave()

	}
};
