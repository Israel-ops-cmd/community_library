import express from 'express'

const app = express()
app.use(express.json())

const user = []

app.post('/users', (req, res) => {
    const body = req.body
    user.push(body)
    res.status(201).send("Usuário criado com sucesso!")
})

app.get('/users', (req, res) => {
    res.send({message: 'Esses são os users', user})
})

app.listen(3000, () => {console.log('Server is runnig on port 3000')})