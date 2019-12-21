const logger = require('../../logger');

async function reactToWithEmojis(message, emojis) {
  for (const emoji of emojis) {
    try {
      await message.react(emoji);
    } catch(error) {
      logger.error('Failed to react with emoji', error);
    }
  }
}

module.exports = reactToWithEmojis;
