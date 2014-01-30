var program = require('commander')
  , cache   = require('./iron-cache');

program.version(require('../package').version);

program.command('project <id>')
  .description('set the default project')
  .action(cache.defaultProject);

program.command('token <token>')
  .description('set the default token')
  .action(cache.defaultToken);

program.command('cache <cache>')
  .description('set the default cache')
  .action(cache.defaultCache);

program.command('list')
  .description('list all caches for a project')
  .action(cache.list);

program.command('info')
  .description('get information about a cache')
  .option('-c, --cache <name>', 'select the cache to use (overrides defaults)')
  .action(cache.info);

program.command('get <key>')
  .description('get the value of the specified key in the specified cache')
  .option('-c, --cache <name>', 'select the cache to use (overrides defaults)')
  .action(cache.get);

program.command('put <key> <value>')
  .description('set the value of the specified key in the specified cache')
  .option('-c, --cache <name>', 'select the cache to use (overrides defaults)')
  .action(cache.put);

program.parse(process.argv);

if (!program.args.length) {
  program.help();
}
