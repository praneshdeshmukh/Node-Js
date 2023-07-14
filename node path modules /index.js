const path = require("path");

// console.log(path.sep);

// console.log(process.env.PATH);

// console.log(path.delimiter);

const currentFilePath = __filename;
console.log("Current File Path > ",currentFilePath); // C:\Users\Pranesh Deshmukh\Desktop\Node js\path module lecture-3\index.js

const currentFileDirectory = __dirname;
// console.log("Current File Directory > ",currentFileDirectory); // C:\Users\Pranesh Deshmukh\Desktop\Node js\path module lecture-3

let basenameResult  = path.basename(currentFilePath)
console.log("base name > ",basenameResult);

let basenameWithoutExtention = path.basename(currentFilePath, '.js');
console.log("base name without extention > " ,basenameWithoutExtention);

let dirname = path.dirname(currentFilePath)
console.log("directory name >",dirname);

console.log("extention 1 > ", path.extname(currentFilePath));
console.log("extention 2 > ", path.extname('index.md.js'));

const filePath = '/public_html/home/index.html';
let combine_Basename_And_Directory = path.format ({
    dir : '/public_html/home',
    base : 'index.html',
});
console.log(combine_Basename_And_Directory);

console.log("Is Absoulute? >", path.isAbsolute(currentFilePath)); // true
console.log("Is Absoulute? >", path.isAbsolute("/index.js")); // true
console.log("Is Absoulute? >", path.isAbsolute("./index.js")); // false, it is relative path
// as you are in some directory
console.log("Is Absoulute? >", path.isAbsolute("../index.js")); // false, it is relative path

let pathToDire = path.join('/home','js','dist','index.js')
console.log("Path together joined" ,pathToDire);

console.log('Path in parts > ', path.parse(currentFilePath));
// Path in parts >  {
//   root: 'C:\\',
//   dir: 'C:\\Users\\Pranesh Deshmukh\\Desktop\\Node js\\path module lecture-3',
//   base: 'index.js',
//   ext: '.js',
//   name: 'index'
// }

console.log("Relative path > ", path.relative('/home/user/config','/home/user/js'));
// ..\js
// means, you are in user folder and there are two files in it 
// home
    // user
        // 1. config
        // 2.js

console.log("Resolve > ", path.resolve()); // works same as __dirname
// Resolve >  C:\Users\Pranesh Deshmukh\Desktop\Node js\path module lecture-3

console.log('Normalize > ', path.normalize('/\home//user/\js'));
// Normalized path : \home\user\js
// More eg's -
// Un-Normalized paths : '//home//user//js'
