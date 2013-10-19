var test = require('tape')

var prod = require('../')

test('collects results with .map', function(t) {
  t.plan(2)
  prod(__dirname + '/fixture').map(function(dep, next) {
    next(null, dep.name) // assume the rest of the data is there I guess
  }, function(err, deps) {
    t.ifError(err)
    t.deepEqual([
                'test-fixture',
                'tape',
                'jsonify',
                'deep-equal',
                'defined',
                'through' ], deps)
  })
})
