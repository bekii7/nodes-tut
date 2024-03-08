const {readFile} = require('fs')

const getText = (path)=>{
  return new Promise((resolve,reject)=>{
    readFile(path,"utf8",(err,res)=>{
      if(err){
        reject(err)
      }else {
        resolve(res)
      }
    })
  })
}

getText('./module.js')
  .then(()=>{
    console.log('file is successfully read')
  },()=>{
    console.log('couldnt even find the file')
  })
//await ffor the previous promise
const start = async ()=>{
  
  try{
    const first = await getText('./file.js')
    console.log(first)

  }
  catch(error){
    console.log('error')
  }


  }

start()
//using util
const {readFile,writeFile} = require('fs')
const util = require('util')

const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)


const start2 = async ()=>{
  
  try{
    const first = await readFilePromise('./file.js','utf8')
    await writeFilePromise('./file.js','this is the added text',{flag:'a'})
    

  }
  catch(error){
    console.log('error')
  }
  }

start2()