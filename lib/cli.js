var program = require('commander')
  , cache   = require('./iron-cache');

program.version(require('../package').version)
  .option('-p, --project <id>', 'select the project to use (overrides defaults)')
  .option('-t, --token <token>', 'select the token to use (overrides defaults)');

program.command('defaults <project> <token>')
  .description('set the default values for project and token')
  .action(cache.defaults);

program.command('list')
  .description('list all caches for a project')
  .action(cache.list);

program.command('info <cache>')
  .description('get information about a cache')
  .action(cache.info);

program.command('get <cache> <key>')
  .description('get the value of the specified key in the specified cache')
  .action(cache.get);

program.command('put <cache> <key> <value>')
  .description('set the value of the specified key in the specified cache')
  .action(cache.put);

program.parse(process.argv);

if (!program.args.length) {
  program.help();
}
