var ironcache = require('iron-cache')
  , settings  = require('./settings')
  , json      = require('prettyjson');

//
// Set default project and token for the current user.
//
exports.defaults = function(project, token) {
  settings.set({ project: project, token: token });
};

//
// List all caches.
//
exports.list = function(options) {
  var client = tryCreateClient(options);

  client.list(function(err, result) {
    if (err) {
      return writeError(err);
    }

    console.log();
    console.log('  %s caches found', result.length);

    if (result.length > 0) {
      writeResult(result);
    }
  });
};

//
// Get info for a specific cache.
//
exports.info = function(cache, options) {
  var client = tryCreateClient(options);

  client.info(cache, function(err, result) {
    if (err) {
      return writeError(err);
    }

    writeResult(result);
  });
};

//
// Get the value of a key in the specified cache.
//
exports.get = function(cache, key, options) {
  var client = tryCreateClient(options);

  client.get(cache, key, function(err, result) {
    if (err) {
      return writeError(err);
    }

    writeResult(result);
  });
};

//
// Get the value of a key in the specified cache.
//
exports.put = function(cache, key, value, options) {
  var client = tryCreateClient(options);

  client.put(cache, key, { value: value }, function(err, result) {
    if (err) {
      return writeError(err);
    }

    console.log();
    console.log('  %s', result.msg);
    console.log();
  });
};

//
// Helpers
// =======
//

//
// Formats and writes an error.
//
function writeError(err) {
  console.log();
  console.log('  \033[33merror:\033[0m', err.message);
  console.log();
}

//
// Attempts to create an iron cache client. Exits the process on failure;
//    returns an iron cache client on success.
//
function tryCreateClient(options) {
  try {
    return ironcache.createClient({
      project: options.project || settings.get('project')
    , token: options.token || settings.get('token')
    });
  } catch (e) {
    writeError(e);
    process.exit(1);
  }
}

//
// Formats and writes the result.
//
function writeResult(result) {
  console.log();
  console.log(json.render(result));
  console.log();
}
