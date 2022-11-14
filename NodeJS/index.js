// file system module

const fsPromises = require('fs').promises;
const path = require('path');

const fileOps = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8');
        console.log(data);
        await fsPromises.unlink(path.join(__dirname, 'files', 'starter.txt'))

        await fsPromises.writeFile(path.join(__dirname, 'files', 'promiseWrite.txt'), data)
        await fsPromises.appendFile(path.join(__dirname, 'files', 'promiseWrite.txt'), '\nNice to meet you');
        await fsPromises.rename(path.join(__dirname, 'files', 'promiseWrite.txt'), path.join(__dirname, 'files', 'promiseComplete.txt'));

        const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'promiseComplete.txt'), 'utf8');
        console.log(newData);
    } catch (err) {
        console.log(err);
    }
}

fileOps();

// fs.readFile('./files/starter.txt', (err, data) => {
//     if(err) throw err;
//     console.log(data.toString());
// })

// another way

// fs.readFile('./files/starter.txt', 'utf8', (err, data) => {
//     if(err) throw err;
//     console.log(data);
// })

// console.log('Hello Hi Bye');

// path module


// fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8', (err, data) => {
//     if(err) throw err;
//     console.log(data.toString());
// })

// write and creating file

// fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Hi there.', (err) => {
//     if(err) throw err;
//     console.log('Write complete');
// })

// append - updating a file

// fs.appendFile(path.join(__dirname, 'files', 'test.txt'), 'Testing Append.', (err) => {
//     if(err) throw err;
//     console.log('Append complete');
// })

// exit on uncaught error

process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
})

// updating

// fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Hi there.', (err) => {
//     if(err) throw err;
//     console.log('Write complete');

//     // adding value to file
//     fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), 'Testing Append.', (err) => {
//         if(err) throw err;
//         console.log('Append complete');

//         // rename file
//         fs.rename(path.join(__dirname, 'files', 'reply.txt'),path.join(__dirname, 'files', 'newReply.txt'), (err) => {
//             if(err) throw err;
//             console.log('Rename complete');
//         })
//     })

// })











