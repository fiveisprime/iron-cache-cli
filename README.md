iron-cache-cli
==============

Command line interface for iron cache.

# Usage

    Usage: cache [options] [command]

    Commands:

      defaults                      view your current defaults
      project <id>                  set the default project
      token <token>                 set the default token
      cache <cache>                 set the default cache
      list                          list all caches for a project
      info [options]                get information about a cache
      get  [options] <key>          get the value of the specified key in the specified cache
      put  [options] <key> <value>  set the value of the specified key in the specified cache

    Options:

      -h, --help     output usage information
      -V, --version  output the version number

## Defaults

Set the project and token to use by running `$ cache token my-token` and
`$ cache project my-project`. Optionally set a default cache to use:
`$ cache cache my-cache` otherwise pass the cache to use with the -c (--cache)
option.

See all of your default settings by running `$ cache defaults`.

### Example

Set defaults and use the cache:

    $ cache token my-token
    $ cache project my-project-id
    $ cache cache my-cache
    $ cache info

    id:         57e85t6e8d0a5e5a9d000eb9
    created_at: 0001-01-01T00:00:00Z
    updated_at: 0001-01-01T00:00:00Z
    project_id: my-project-id
    name:       my-cache
    size:       36
    data_size:  0

    $ cache get my-key

    cache:   my-cache
    key:     my-key
    value:   The value of my key
    cas:     5974142746743636948
    flags:   0
    expires: 9999-01-01T00:00:00Z

Override defaults with options:

    $ cache -c other-cache info

    id:         52f86f3c1ef7915b7f000d85
    created_at: 0001-01-01T00:00:00Z
    updated_at: 0001-01-01T00:00:00Z
    project_id: my-project-id
    name:       other-cache
    size:       7
    data_size:  0

# License

The MIT License (MIT)

Copyright (c) 2014 Matt Hernandez

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

