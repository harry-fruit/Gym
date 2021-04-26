const express = require("express");
const path = require("path");

const app = express();

const port = process.env.PORT || 5000

app.use(express.static(path.join(__dirname, "client")))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get("*", (req, resp)=>{
    resp.sendFile(path.join(__dirname, "client/public/index.html"))
})

app.listen(port, ()=> console.log(`Running on port ${port}`))