const http = require('http')

const server = http.createServer((req,res)=>{
  if(req.url === '/'){
    res.end('hello welcome to the home page')
  }
  if(req.url === '/about'){
    res.end('there is nothing here')
  }
  res.write(`
  <p>this doesnt exist</p>
  <a href="/">go to home</a> 
  `)
})
server.listen(5000)