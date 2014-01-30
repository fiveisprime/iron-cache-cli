iron-cache-cli
==============

Command line interface for iron cache.

# Usage

    Usage: cache [options] [command]

    Commands:

      defaults <project> <token>  set the default values for project and token
      list                        list all caches for a project
      info <cache>                get information about a cache
      get <cache> <key>           get the value of the specified key in the specified cache
      put <cache> <key> <value>   set the value of the specified key in the specified cache

    Options:

      -h, --help           output usage information
      -V, --version        output the version number
      -p, --project <id>   select the project to use (overrides defaults)
      -t, --token <token>  select the token to use (overrides defaults)

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

