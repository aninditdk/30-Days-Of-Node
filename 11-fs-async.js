const { readFile, writeFile } = require('fs')


console.log('start')
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err,result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result;
        writeFile('./content/result-async.txt', `Hello Async World ${first}, ${second}`, (err, result) => {
            if (err) {
               console.log(err);
            } 
            console.log('done with this yaar')
        })
    })
})

console.log('end of the file')


// start
// end of the file
// done with this yaar