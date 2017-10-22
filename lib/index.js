if (process.env.NODE_ENV === 'production') {
  module.exports = require('./react-dribble-button');
} else {
  module.exports = require('./react-dribble-button.prod');
}
