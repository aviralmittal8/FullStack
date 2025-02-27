const http= require('http')
const fs=require('fs').promises
const PORT= 3001
const server= http.createServer((req,res)=>{
    if(req.url=="/register" && req.method=="POST"){
        let body=''
        let arr=[]
        req.on('data',chunk=>{
            
            body+=chunk;
        })
        req.on('end', async()=>{
            const {email,password}=JSON.parse(body)
            const fdata= await fs.readFile('student.json',{encoding:'utf-8'})
            arr=JSON.parse(fdata)
            // console.log(arr)
            const result=arr.find(ele=>ele.email==email && ele.password == password)
            if(result){
                //res.setHeader('Content-Type','application/json')
                return res.end(JSON.stringify({"message":"Logged in"}))
            }
            arr.push({email,password})
            await fs.writeFile('student.json',JSON.stringify(arr,null,2))
            res.end(JSON.stringify({"message":"/register api hit successfully!"}))
        })
    }
})
server.listen(PORT,()=>{
    console.log("server is running on " + PORT)
})