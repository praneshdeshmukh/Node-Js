// fs(file system module) - A module provided by Node.JS to perform CRUD operations
const fs = require('fs');



// 02. WRITE FILE :-  This will Overwrite the data previous data wil be removed //
/// .writeFile('fileName','what you want to write' ,callback(err,data)) ///

// ----------------------Asynchronous way to write a file---------------------- //
fs.writeFile('index.txt', 'Hello, I`M FINE ! ', function(err) {
    if(err) {
        console.log('An Unexpected error occured', err);
    }
    console.log("File Write occured Successfully!");
})
// ----------------------Synchronous way to write a file---------------------- //
// fs.writeFileSync('index.txt', 'Hello, I`M FINE ! ', function(err) {
//     if(err) {
//         console.log('An Unexpected error occured', err);
//     }
//     console.log("File Write occured Successfully!");
// })

// 01  READ FILE :-                
/// .readFile('fileName', callback(err,data)) ///



// HIGH-LEVEL Ways to read a file
// ----------------------Asynchronous way to read a file----------------------//
console.log("READ START");

fs.readFile('index.txt',function(err, data){
    if(err) {
        console.log('An Unexpected error occured: ', err);
        return err;
    }
   // console.log('The data fetched is: ', data); data received in buffer format
    console.log('The data fetched is: ', data.toString());
    console.log("READ END");
    return data;
})

console.log("OTHER STUFF");

// ----------------------Synchronous way to read a file---------------------- //

// const data = fs.readFileSync('index.txt');
// console.log('The data fetched is: ', data.toString());
// console.log("READ END");
// console.log("OTHER STUFF");


// LOW-LEVEL way to read a file
// FILE -> (first)OPEN + (then)READ

// ----------------------Another low-level way to read a file---------------------- //
// fs.open('fileName', 'format to open file eg's read only, write only , read and write ,etc')
// fd - returns an object
// buffer - A temporary storage/memory
// const buffer = require('buf') // Built-in module for buffer in Node

const buffer = new Buffer(1024); // or this can be used
fs.open('index.txt', 'r+', function(err,fd) {
    if(err) {
        console.log("An Unexpected error occured: ",err);
        return err;
    }
    console.log("Success in opening file");


    // Now, file is opened
    // step2 - read the file
    // step3 - close file
    /* fs.read(
         Refrence that got after reading file,
         buffer - temporary storage
         offset - From which position to start writing file
         // how much amount of storage you want to use of buffer//
         buffer.length - Consume all amount of storage available in buffer to insert into buffer 
        postion: 0 - From which position to start reading file
        callback() - (error, data received in bytes)

    )*/
     fs.read(
         fd,
         buffer,
         0,
         buffer.length,
         0,
         function (error, bytes) {
         if(error) {
             console.log("An Unexpected error occured: ",error);
             return error;
         }
         console.log('The data fetched is: ', bytes); // 41
         console.log('The data fetched is: ', buffer.slice(0,bytes).toString());
 //      // CLOSE
            fs.close(fd,function(err) {
             if(err) {
                 console.log('Error in closing file');
             }
             else {
                 console.log('Success in closing file');
             }
            })
          // buffer.slice(0,bytes) will return a new buffer which will,  
         // further be converted into string .toString()
     })
 })


// 03. Append File:-          
/* .appendFile('fileName',
    'what you want to write' ,
    'options' - format to use in encoding eg's utf-8...etc ,
    callback(err,data)) */

// ----------------------Asynchronous way to append a file---------------------- //
fs.appendFile('index.txt', 'What`s the Time? ', 'utf-8',function(err) {
    if(err) {
        console.log('An Unexpected error occured', err);
    }
    console.log("File Appending occured Successfully!");
})
// ----------------------Synchronous way to append a file---------------------- //
// fs.appendFileSync('index.txt', 'It`s 5.00pm currently. ', 'utf-8',function(err) {
//     if(err) {
//         console.log('An Unexpected error occured', err);
//     }
//     console.log("File Appending occured Successfully!");
// })


// 04. DELETE FILE :-
// ----------------------Asynchronous way to append a file---------------------- //
// fs.unlink('index2.txt', function(err) {
//     if(err) {
//         console.log('Error in deleting in file.');
//     }
//     console.log('Success in deleting file');
// })
// ----------------------Synchronous way to append a file---------------------- //
// fs.unlinkSync()
