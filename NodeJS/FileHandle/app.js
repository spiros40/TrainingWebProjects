const http=require('http');
const PORT=3000;

const server=http.createServer((req,res)=>{
    console.log(req.readableObjectMode);
    process.exit();
    
});

server.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});

