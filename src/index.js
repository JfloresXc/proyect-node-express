const express = require('express')
const path = require('path')

const app = express()

//Settings
app.set('port', 8000)

//Motor de plantilla ejs
app.set('view engine', 'ejs')

//Para decirle a express donde estan la carpeta views que va a buscar
app.set('views', path.join(__dirname, 'views'))
app.engine('html', require('ejs').renderFile)

/* Una manera de conectar la ruta sin el Route de express
app.get('/', (req, res) => {
    res.render(path.join(__dirname, './views/index.ejs'))
})*/

//routes
app.use(require('./Routes/index'))
/*Example 1:
app.get('/',(req, res) => {
    res.send('Hola')
})*/

// app.get('/', (req, res) => {
//     //res.sendFile(__dirname + '/views/index.html')
//     //dirname da toda la ruta en la cual se encuentra el documento, en este caso index.js
//     res.render(path.join(__dirname, 'views'))
// })
app.use(express.static(path.join(__dirname, 'public')))

app.listen(app.get('port'), () => {
    console.log('Welcome on port', app.get('port'))
})