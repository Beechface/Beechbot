module.exports = {
	block: function(userID) {
		const blocklist = [
			/* comma-separated list of discord user IDs - this was made because certain people spammed the crap out of the original Beechbot to the point it needed to be remade, original list removed */
		];
		for (var i in blocklist) {
			if(blocklist[i] == userID) {
				return true;
			}
			else {return false;}
		};
	}
};
