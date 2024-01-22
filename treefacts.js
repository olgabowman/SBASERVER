const fs = require('fs');

function getTreeFacts(callback) {
  fs.readFile('treeFacts.json', 'utf8', (err, data) => {
    if (err) {
      return callback(err, null);
    }

    const treeFacts = JSON.parse(data);
    callback(null, treeFacts);
  });
}

module.exports = {
  getTreeFacts,
};
