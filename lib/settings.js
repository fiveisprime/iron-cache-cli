var path = require('path')
  , fs   = require('fs');

const dir  = path.join(getUserHome(), '.iron-cache');
const file = 'settings.json';

//
// Get the home directory for the current user.
//
function getUserHome() {
  return process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];
}

//
// Load the configuration file from disk. Returns an empty object if no
//    configuration file exists.
//
function loadConfig() {
  var configSpec = path.join(dir, file);

  if (fs.existsSync(configSpec)) {
    return JSON.parse(fs.readFileSync(configSpec));
  } else {
    return {};
  }
}

//
// Saves configuration data to disk.
//
exports.set = function(data) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  var configSpec = path.join(dir, file);
  fs.writeFileSync(configSpec, JSON.stringify(data));
};

exports.get = function(key) {
  var config = loadConfig();

  if (!key) {
    return config;
  }

  if (config[key]) {
    return config[key];
  }

  return null;
};
