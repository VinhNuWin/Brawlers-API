const express = require('express')
const app = express()
const PORT = 8000

const brawlers = {
    'frank':{
        'health': 7000,
        'attDmg': 1240,
        'attRange': 6,
        'reloadSpeed': '.8s',
        'moveSpeed': 770
    },
    'el primo':{
        'health': 6000,
        'attDmg': 1440,
        'attRange': 3,
        'reloadSpeed': '.8s',
        'moveSpeed': 770
    },
    'unknown':{
        'health': 0,
        'attDmg': 'unknown',
        'attRange': 'unknown',
        'reloadSpeed': 'unknown',
        'moveSpeed': 'unknown'
    } 
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name',(request,response)=>{
    const brawlerName = request.params.name.toLowerCase()
    if(brawlers[brawlerName]){
        response.json(brawlers[brawlerName])
    }else{
        response.json(rappers['unknown'])
    }

})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Time to Brawl!`)
})