var config = module.exports = {};
config.general = {};
config.settings = {};
config.support = {};
config.embeds = {};

// General settings
config.general.botName = 'Bot name here';
config.general.ownerName = ['name/tag of bot creator'];

config.general.clientid = ''; //the bot's user ID in discord
config.general.clientPerms = '2147483648'; //the bit for the client permissions set in discord's dev portal

// Example invite link
// https://discord.com/api/oauth2/authorize?client_id=CLIENT_ID&permissions=CLIENT_PERMS&scope=applications.commands%20bot

// Settings
config.settings.owners = ['']; //bot owner's discord user ID


// Embeds Settings
config.embeds.embedColor = '6E8C0A'; //accent color for embeds, hex code - default is Beech's speech color on WCC
config.embeds.embedFooterText = ''; //footer text, if wanted
