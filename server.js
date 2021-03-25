const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

app.get('/' , (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

let wrestlers = {
    'World Champion': {
        currentChampion: 'Kenny Omega'
    }, 
    'Tag Team Champion':{
        currentChampion: 'Young Bucks'
    },
    'TNT Champion':{
        currentChampion: 'Darby Allin'
    }, 
    'Women\'s Champion': {
        currentChampion: 'Hikaru Shida'
    },
    'unknown': {
        currentChampion: 'unknown'
    }
}

app.get('/api/:wrestlerName', (req, res) => {
    const wrestlerName = req.params.name.toLowerCase()
    if(wrestlers[wrestlerName]){
        res.json(wrestlers[wrestlerName])
    } else{
        res.json(wrestlers['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})