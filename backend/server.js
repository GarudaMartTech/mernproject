const express = require("express")

const app = express()

const PORT  = 4000

app.listen(PORT,()=>{
    console.log(`server is runing at PORT ${PORT}`)
})