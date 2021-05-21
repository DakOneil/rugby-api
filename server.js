const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 4000

app.use(cors())

let ruggers = {
    'jones': {
        'firstName': 'Alun Wyn', 
        'lastName': 'Jones',
        'team': 'Wales', 
        'position': 'Second Row'
    },
    'carter': {
        'firstName': 'Dan', 
        'lastName': 'Carter',
        'team': 'NZ All Blacks', 
        'position': 'Flyhalf'
    },
    'pocock': {
        'firstName': 'David', 
        'lastName': 'Pocock',
        'team': 'Wallabies', 
        'position': 'Flanker'
    },
    'oneil': {
        'firstName': 'Dakota', 
        'lastName': "O'Neil",
        'team': 'Houston SaberCats', 
        'position': 'Second Row'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/ruggers/:ruggerName', (request, response) => {
    const ruggerName = request.params.ruggerName.toLowerCase()
    console.log(ruggerName)
    if (ruggers[ruggerName]) {
        response.json(ruggers[ruggerName])
    }else{
        response.json(ruggers['oneil'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Listening on port ${PORT}`)
})