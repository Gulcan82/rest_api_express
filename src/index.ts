import express, {Request, Response } from 'express'

// we define our server and port

const app = express()
const port = 3000

// http-request: method (GET,POST ...), URL (path)
app.get('/', (req: Request, res: Response) => {
    res.send('GET - Hallo Welt! Ich bin ein Express-Server.')
})
// start our server

app.get('/info', (req: Request, res: Response) => {
    res.send('GET - Wir haben heute viel über APIs und HTTP gelernt.')
    
})
app.post('/info', (req: Request, res: Response) => {
    res.send('POST - Deine Post Anfrage ist angekommen!')
})

// starte den Server

app.listen(port, () => {
    console.log(`Server is runnig at http://localhost:${port}`)
  })