// path module handles both the windows and Mac systems 
const path = require('path');
// console.log(path);
// file system - to read the file 
const fs = require('fs-extra');
// console.log(fs);
// required compiler 
const solc = require('solc');
// console.log(solc);
const buildPath = path.resolve(__dirname, 'build');
const fakenewsPath = path.resolve(__dirname, 'contracts', 'fakenews.sol');
console.log('final,', fakenewsPath);
const source = fs.readFileSync(fakenewsPath, 'utf8');
//console.log(source);
const output = solc.compile(source, 1).contracts;

//console.log(buildPath);
fs.ensureDirSync(buildPath);

for (let contract in output) {
	//console.log(contract, output);
  fs.outputJsonSync(
    path.resolve(buildPath, contract.replace(':', '') + '.json'),
    output[contract]
  );
}