function isAControlEmoji(emoji, controlEmojis) {
  return Object.keys(controlEmojis).includes(emoji);
}

module.exports = isAControlEmoji;
