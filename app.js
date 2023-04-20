const cors = require('cors')

const express   =  require("express")
const data = require("./data.json")

const app = express()
app.get("/service", (req, res)=>{
    res.json(data)
})

app.use(cors({
    origin: "*"
}))

app.get("/", (req, res)=>{
    console.log(req.method)
    res.send("hello")
})

app.listen(5000,()=>{
    console.log("Server is running 5000 port");
})