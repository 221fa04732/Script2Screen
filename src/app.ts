import express from 'express'

const app = express();

app.get("hii", async(req, res)=>{
    
    res.status(201).json({
        message : "hii from aws ec2 machine"
    })
})

app.listen(3000)