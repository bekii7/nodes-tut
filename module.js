//the os module 
const os = require('os')

const upTime = os.uptime() 
console.log(upTime)

const type = os.type()
console.log(type)

//the path module
const path = require('path')



const filePath = path.join('/content','shubfolder')

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname,'content')

//the file system module
//sync
const {readFileSync,writeFileSync} = require('fs')

const writeFile = writeFileSync('./module.js',`const readFile = readFileSync('./module.js','utf8')
console.log(readFile)`,{flag:'a'})
const readFile = readFileSync('./module.js','utf8')
console.log(readFile)
//async
const {readFile,writeFile} = require('fs')

readFile('./module.js','utf8',(err,result)=>{
  if(err){
    console.log(err)
  }if(result){
    console.log(result)
  }
})
writeFile('./module.js',`
//async
const {readFile,writeFile} = require('fs')

readFile('./module.js','utf8',(err,result)=>{
  if(err){
    console.log(err)
  }if(result){
    console.log(result)
  }
})
`,{flag:'a'},(err,result)=>{
  if(err){
    console.log('error has a been caught')
  }
  if(result){
    console.log('success')
  }
})