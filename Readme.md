# prod

### Asynchronous node module dependency tree walker.

Easily perform asynchronous operations on each item in a module's dependency tree.

`prod` uses [async-mixin](https://github.com/timoxley/async-mixin) so you automatically have access to the following
methods while iterating over your dependency tree:

* each
* eachSeries
* eachLimit
* map
* mapSeries
* mapLimit
* filter
* filterSeries
* reject
* rejectSeries
* reduce
* reduceRight
* detect
* detectSeries
* sortBy
* some
* every
* concat
* concatSeries

If you don't want any of this async magic, you could try using
[read-installed](https://github.com/isaacs/read-installed) with
[traverse](https://github.com/substack/js-traverse)

## Example

### Collect names and versions of all dependencies into a database with .map

```js

var prod = require('prod')

prod(path.dirname(require.resolve('tape'))).map(function(dep, next) {
  db.put(dep.name + '@' + dep.version, next)
}, function(err, deps) {
  if (err) throw err
  console.log(deps)
  // => [ 'tape@2.0.0', 'jsonify@0.0.0', 'deep-equal@0.1.0', 'defined@0.0.0', 'through@2.3.4' ]
  })
})

```

## License

MIT
