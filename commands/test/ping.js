module.exports = {
	name: 'ping',
	description: 'Ping!',
	cooldown: 5,
	execute(message, args) {
		message.channel.send('Pong.');
		await message.react('👍').then(() => message.react('👎'));
	},
};