const path = require('path');

const a = path.basename('C:\\temp\\myfile.html');
const a2 = path.dirname('/foo/bar/baz/asdf/quux');
const a3 = path.extname(__filename);

console.log(a)
console.log(a2)
console.log(a3)
console.log(__filename,a3) 