/*const mock = require('mock-require');*/

/*
mock('fs', 'path')

console.log(require('fs') === require('path'))

var fs = require('fs');

test('should read file content', async () => {
    const fileName = '../e1.js';

    const file = fs.readFileSync(__filename, (err, file) => {
        console.log(file)
    })

    expect(file).toBe('file content async'.toUpperCase())
})*/

/*mock('fs', {
    readFileSync: () => 'file content async'.toUpperCase()
});
mock('path');

var fs1 = require('fs');
var path1 = require('path');

console.log(fs1)
console.log('sosi: ', fs1 === path1)

mock.stopAll();

var fs2 = require('fs');
var path2 = require('path');

console.log(fs1 === fs2); // false
console.log(path1 === path2); // false



mock('fs', 'path')

console.log(require('fs') === require('path'))

var fs = require('fs');*/

/*test('should read file content', async () => {
    const fileName = '../e1.js';

    const file = fs.readFileSync(__filename, (err, file) => {
        console.log(file)
    })

    expect(file).toBe('file content async'.toUpperCase())
})*/
