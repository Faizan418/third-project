const express = require('express')

const app = express()



app.use('/', (req, res) => {
    res.send("Hello This is Home Page...")
})

app.listen(3000, () => {
    console.log("Server listen on port : 3000");
    
})
