const path = require('path')

console.log(path.sep)
// \

//TO get the normalized path
const filePath= path.join('\content', 'subfolder','test.txt')

console.log(filePath)
// \content\subfolder\test.txt

//To get only the last path name
const base = path.basename(filePath)
console.log(base);
//test.txt

//To get abs path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);

// C:\Users\anind\Desktop\Projects\node_backend\content\subfolder\test.txt