require('dotenv').config();

const fs = require('fs');

const config = require('./config');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

const { Client, Intents, Collection } = require('discord.js');
const client = new Client({
	intents: [Intents.FLAGS.GUILDS],
	presence: {
		status: 'online',
		activity: 'Generating warrior cats names.'
	}
});

client.commands = new Collection();

(async () => {
	const clientId = config.general.clientid;
	const guildId = config.general.guildid;
	
	const eventsPath = './src/events';
	const eventsFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));
	client.handleEvents = async (eventFiles, path) => {
		for (const file of eventFiles) {
			const event = require(`${path}/${file}`);
			if (event.once) {
				client.once(event.name, (...args) => event.execute(...args, client));
			} else {
				client.on(event.name, (...args) => event.execute(...args, client));
			}
		}
	};
	client.handleEvents(eventsFiles, eventsPath);
	
	const commandPath = './src/commands';
	const commandFolders = fs.readdirSync(commandPath);
	client.handleCommands = async (commandFolders, path) => {
		client.commandArray = [];
		for (folder of commandFolders) {
			const commandFiles = fs
				.readdirSync(`${path}/${folder}`)
				.filter((file) => file.endsWith('.js'));
			for (const file of commandFiles) {
				const command = require(`${path}/${folder}/${file}`);
				client.commands.set(command.data.name, command);
				client.commandArray.push(command.data.toJSON());
			}
		}

		const rest = new REST({ version: '9' }).setToken(process.env.TOKEN);

		(async () => {
			try {
				console.log('Started refreshing application (/) commands.');

				await rest.put(Routes.applicationCommands(clientId), {
					body: client.commandArray,
				});

				console.log('Successfully reloaded application (/) commands.');
			} catch (error) {
				console.log(`${error}`);
			}
		})();
	};
	client.handleCommands(commandFolders, commandPath);
	
	client.login(process.env.TOKEN);
})();
