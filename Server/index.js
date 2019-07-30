const express = require('express')
const fs = require('fs')
const cors = require('cors')
const port = 9999
let app = express()
let start = 0;
let mockData = fs.readFileSync('datab.json')


mockData = JSON.parse(mockData.toString())
//console.log(mockData)
app.use(cors())

app.get('/mockdataid/:id', (req, res)=>{
    let targetElem = req.params.id
    console.log(targetElem)
    let target = mockData.find( x => {
        if(x.id==targetElem){
            return x
        }
    })
    res.send(target)
})


app.get('/mockdata/', (req,res)=>{
    let result = Number( req.query.results)
    console.log(result)
    let stop = start + result
    if(!result){
        result = 0
        stop = mockData.length
    }
    
 
    let target = mockData.slice(start, stop)
    start = start + result
    stop = stop + result
    console.log('start ->', start)
    console.log('stop ->', stop)
    
    res.send(target)        
         
})



app.listen(port)
console.log(port)