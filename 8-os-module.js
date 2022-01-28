const os = require('os')


// info about current user
const user = os.userInfo()

console.log(user)
// {
//     uid: -1,
//     gid: -1,
//     username: 'anind',
//     homedir: 'C:\\Users\\anind',
//     shell: null
//   }

console.log(`They System Uptime is ${os.uptime()} seconds.` );
// They System Uptime is 148591 seconds.

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS)
// {
//     name: 'Windows_NT',
//     release: '10.0.19044',
//     totalMem: 8435277824,
//     freeMem: 986357760
// }